import z from "zod";



export const loginSchema = z.object({
    email: z.string().min(10,'Email deve ter Mais de 2 caracteres'),
  senha: z.string().min(2,'Senha deve ter Mais de 2 caracteres').max(10,'Caracter Deve ter até 10 caracteres'),
})