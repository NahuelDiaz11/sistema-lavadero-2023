import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { createAccesToken } from '../libs/jwt.js';

const prisma = new PrismaClient();
export const register = async (req, res) => {
    try {

      const { nombre, apellido, email, pass } = req.body;
      const passwordHash = await bcrypt.hash(pass, 5);
  
      const newUser = await prisma.usuarios.create({
        data: {
          nombre,
          apellido,
          email,
          pass: passwordHash,
        },
      });
      
      const userSaved = newUser;
      const token = await createAccesToken({ id: userSaved.id });

      res.cookie('token', token)
   
      res.json({ 
        message: 'User successfully registered',
        email: userSaved.email,
        nombre: userSaved.nombre,
     });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Error registering user' });
    }
  };

export const login = (req, res) => res.send('login');