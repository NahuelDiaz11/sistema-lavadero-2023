import { z } from "zod";

export const customerSchema = z.object({
  nombre: z
    .string({
      required_error: "El nombre del cliente es requerido",
    })
    .min(3, {
      message: "La patente debe tener al menos 3 caracteres",
    })
    .max(10, {
        message: "La patente puede tener como maximo 10 caracteres",
      }),
  id_localidad: z
    .number({
      required_error: "La localidad es requerida",
    }),
});
