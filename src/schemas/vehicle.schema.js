import { z } from "zod";

export const vehicleSchema = z.object({
  patente: z
    .string({
      required_error: "La patente es requerida",
    })
    .min(6, {
      message: "La patente debe tener al menos 6 caracteres",
    })
    .max(8, {
        message: "La patente puede tener como maximo 8 caracteres",
      }),
  id_modelo: z
    .number({
      required_error: "El modelo es requerido",
    }),
});
