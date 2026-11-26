import { z } from 'zod';

const registerSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  username: z.string().min(3, "Username minimal 3 karakter").regex(/^[a-zA-Z0-9_]+$/, "Username hanya boleh huruf, angka, dan underscore"),
  email: z.string().email("Format email tidak valid"),
  phoneNumber: z.string().min(10, "Nomor telepon/WhatsApp minimal 10 digit"),
  password: z.string().min(8, "Password minimal 8 karakter"),
  confirmPassword: z.string(),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "Anda harus menyetujui syarat & ketentuan" })
  })
}).refine((data) => data.password === data.confirmPassword, {
  message: "Konfirmasi password tidak cocok",
  path: ["confirmPassword"]
});
const loginSchema = z.object({
  emailOrUsername: z.string().min(1, "Email atau username wajib diisi"),
  password: z.string().min(1, "Password wajib diisi")
});
z.object({
  email: z.string().email("Format email tidak valid")
});
z.object({
  token: z.string().min(1, "Token wajib diisi"),
  password: z.string().min(8, "Password minimal 8 karakter"),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Konfirmasi password tidak cocok",
  path: ["confirmPassword"]
});

export { loginSchema as l, registerSchema as r };
//# sourceMappingURL=auth.mjs.map
