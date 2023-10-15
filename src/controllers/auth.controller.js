import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const register = async (req, res) => {
    try {
      const { nombre, apellido, email, pass } = req.body;
  
      const newUser = await prisma.usuarios.create({
        data: {
          nombre,
          apellido,
          email,
          pass,
        },
      });
  
      res.json({ message: 'User successfully registered', user: newUser });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Error registering user' });
    }
  };

export const login = (req, res) => res.send('login');