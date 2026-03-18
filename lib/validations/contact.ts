import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Nama harus terdiri dari minimal 2 karakter." }),
  email: z.string().email({ message: "Format email tidak valid." }),
  interest: z
    .string()
    .min(1, { message: "Silakan pilih salah satu topik minat." }),
  message: z
    .string()
    .min(10, { message: "Pesan terlalu singkat (minimal 10 karakter)." })
    .max(500, { message: "Pesan terlalu panjang (maksimal 500 karakter)." }),
  terms_agreed: z.literal(true, {
    errorMap: () => ({ message: "Anda harus menyetujui kebijakan privasi." }),
  }),
});

export type ContactInput = z.infer<typeof contactSchema>;
