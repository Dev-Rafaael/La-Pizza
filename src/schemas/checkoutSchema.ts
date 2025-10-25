import z from "zod";

export const checkoutSchema = z.object({
  sabor: z.string().min(5, "Sabor deve ter mais de 5 Caracteres"),
  descricao: z.string().min(10, "Descrição deve ter mais de 10 Caracteres").max(50,'Descrição deve ter no maximo 50 letras'),
  preco: z.number().min(1).max(100),
  imagem: z.string().optional(),
  precoTotal: z.number().min(10).max(1000),
  unidades: z.number().min(1).max(10),
  adicionais: z.array(z.string()).min(1),
  nome: z.string().min(2,'Nome deve ter Mais de 2 caracteres'),
 sobreNome: z.string().min(3,'sobre Nome deve ter Mais de 3 caracteres'),
    cpf: z.string().min(9,'CPF deve ter 9 caracteres').max(9),
  sexo: z.string().min(2,'sexo ter Mais de 2 caracteres'),
  nascimento: z.date(),
  email: z.string().min(10,'Email Deve ter Mais de 2 caracteres'),
  telefone: z.string().min(9,'Telefone Deve ter 11 caracteres').max(11),
  cep: z.string().min(8, "CEP deve ter  8 Caracteres"),
  estado: z.string().min(4, "Estado deve ter mais de 4 Caracteres"),
  cidade: z.string().min(4, "Cidade deve ter mais de 2 Caracteres"),
  numero: z.string().min(1, "Numero deve ter pelo menos 1 Caracter"),
  complemento: z.string().min(5, "Complemento deve ter mais de 2 Caracteres"),
});
 