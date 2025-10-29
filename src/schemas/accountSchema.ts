import z from "zod";



export const accountSchema = z.object({
  nome: z.string().min(2,'deve ter Mais de 2 caracteres'),
  sobreNome: z.string().min(3,'sobreNome deve ter Mais de 3 caracteres'), 
  email: z.string().min(10,'Email deve ter Mais de 2 caracteres'),
  senha: z.string().min(7,'A senha deve ter pelo menos 8  a 20 caracteres').max(20),
  cpf: z.string().min(9,'CPF deve ter 9 caracteres').max(9),
  sexo: z.string().min(2,'sexo deve ter Mais de 2 caracteres'),
  nascimento: z.string().max(8),
  telefone: z.string().min(9,'Telefone deve ter 11 caracteres').max(11),
})