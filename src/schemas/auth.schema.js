import { z } from "zod";

export const registerSchema = z.object({
  nombre: z.string({
    required_error: "El nombre es requerido",
  }),
  apellido: z.string({
    required_error: "El apellido es requerido",
  }),
  email: z.string({
    required_error: "El email es requerido",
  }),
  pass: z.string({
    required_error: "La contraseña es requerida",
  }).min(6, {
      message: "La contraseña debe tener al menos 6 caracteres",
    }),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "El email es requerido",
    })
    .email({
      message: "Email invalido",
    }),
  pass: z
    .string({
      required_error: "La contraseña es requerida",
    })
    .min(6, {
      message: "La contraseña debe tener al menos 6 caracteres",
    }),
});
