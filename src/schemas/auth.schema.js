import { z } from "zod";

export const registerSchema = z.object({
  nombre: z.string({
    required_error: "Name is required",
  }),
  apellido: z.string({
    required_error: "Lastname is required",
  }),
  email: z.string({
    required_error: "Email is required",
  }),
  pass: z.string({
    required_error: "Password is required",
  }).min(6, {
      message: "Password must be at laest 6 characters",
    }),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Invalid email",
    }),
  pass: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password must be at laest 6 characters",
    }),
});
