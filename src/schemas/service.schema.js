import { z } from "zod";

export const serviceSchema = z.object({

  fecha: z.string({
    required_error: "La fecha es requerida",
  }),
  id_vehiculo: z.number({
    required_error: "El vehiculo es requerido",
  }),
});
