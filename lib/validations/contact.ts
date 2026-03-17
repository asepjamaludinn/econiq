import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Nama harus terdiri dari minimal 2 karakter." }),
  email: z.string().email({ message: "Format email tidak valid." }),
});

export type ContactInput = z.infer<typeof contactSchema>;
