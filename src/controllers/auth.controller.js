import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

const prisma = new PrismaClient();

export const register = async (req, res) => {
  try {
    const { nombre, apellido, email, pass, rol } = req.body;
    const passwordHash = await bcrypt.hash(pass, 5);

    const newUser = await prisma.usuarios.create({
      data: {
        nombre,
        apellido,
        email,
        pass: passwordHash,
        rol,
      },
    });

    const userSaved = newUser;
    const token = await createAccessToken({ id: userSaved.id });

    res.cookie("token", token);

    res.json({
      message: "User successfully registered",
      email: userSaved.email,
      nombre: userSaved.nombre,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Error registering user" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, pass } = req.body;
    const userFound = await prisma.usuarios.findUnique({
      where: {
        email: email,
      },
    });

    if (!userFound) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(pass, userFound.pass);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = await createAccessToken({ id: userFound.id });

    res.cookie("token", token, {
      sameSite: "None", // Configurando SameSite a "None"
      secure: true,
    });
    res.json({
      id: userFound.id,
      nombre: userFound.nombre,
      apellido: userFound.apellido,
      email: userFound.email,
      rol: userFound.rol,
    });
  } catch (error) {
    res.status(500).json({ error: "Error registering user" });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  try {
    const userId = req.user.payload.id;

    const userFound = await prisma.usuarios.findFirst({
      where: {
        id: userId,
      },
    });

    if (userFound) {
      res.json({
        id: userFound.id,
        nombre: userFound.nombre,
        email: userFound.email,
      });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error when searching for the user:", error);
    res.status(500).json({ error: "Error when searching for the user" });
  }
};

export const verifyTokenRequest = async (req, res) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const userFound = await prisma.usuarios.findUnique({
      where: { id: user.id },
    });
    console.log("el usuario Found es: " + JSON.stringify(userFound, null, 2));
    if (!userFound) return res.status(401).json({ message: "Unauthorized" });

    return res.json({
      id: userFound.id,
      email: userFound.email,
      rol: userFound.rol,
    });
  });
};
