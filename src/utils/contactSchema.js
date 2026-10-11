import { z } from "zod";
import { services } from "../data/services.js";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Ingresá tu nombre (al menos 2 caracteres).")
    .max(80, "Usá hasta 80 caracteres."),
  contact: z
    .string()
    .trim()
    .max(150, "Usá hasta 150 caracteres.")
    .refine(
      (value) =>
        z.email().safeParse(value).success ||
        (/^\+?[\d\s()-]+$/.test(value) &&
          value.replace(/\D/g, "").length >= 8 &&
          value.replace(/\D/g, "").length <= 15),
      "Ingresá un email válido o un teléfono con código de área.",
    ),
  type: z.enum([...services.map((service) => service.id), "otra"], {
    error: "Seleccioná un tipo de consulta.",
  }),
  message: z
    .string()
    .trim()
    .min(15, "Contanos un poco más (al menos 15 caracteres).")
    .max(2000, "Usá hasta 2000 caracteres."),
});
