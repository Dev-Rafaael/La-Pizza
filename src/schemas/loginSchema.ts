import z from "zod";



export const loginSchema = z.object({
  email: z.string().min(3, 'Email deve ter mais de 2 caracteres').email('Email inválido'),
  senha: z.string().min(2,'Senha deve ter Mais de 2 caracteres').max(10,'Caracter Deve ter até 10 caracteres'),
})