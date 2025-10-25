import z from "zod";


export const cartSchema = z.object({
 sabor: z.string().min(5, "Sabor deve ter mais de 5 Caracteres"),
  descricao: z.string().min(10, "Descrição deve ter mais de 10 Caracteres").max(50,'Descrição deve ter no maximo 50 letras'),
  preco: z.number().min(1).max(100),
  precoTotal:z.number().min(10).max(1000),
  unidades: z.number().min(1).max(10),
  adicionais: z.array(z.string()).min(1),
  imagem: z.string().optional(),
})