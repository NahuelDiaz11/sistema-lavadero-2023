import { z } from "zod";

export const serviceSchema = z.object({

  fecha: z.string({
    required_error: "La fecha es requerida",
  }),
  hora_entrada: z.string({
    required_error: "La hora de entrada es requerida",
  }),
  hora_salida: z.string({
    required_error: "La hora de salida es requerida",
  }),
  id_vehiculo: z.number({
    required_error: "El vehiculo es requerido",
  }),
  id_cliente: z.number({
    required_error: "El cliente es requerido",
  }),
});
