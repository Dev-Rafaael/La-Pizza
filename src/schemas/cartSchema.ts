
import z from "zod";


export const adicionalSchema = z.object({
  id: z.number(),
  nome: z.string(),
  preco: z.number(),
  pizzaId: z.number(),
});

export const cartSchema = z.object({
  id: z.number().min(1).max(1000),
  sabor: z.string().min(5),
  descricao: z.string().min(10).max(50),
  preco: z.number().min(1).max(100),
  precoTotal: z.number().min(10).max(1000),
  unidades: z.number().min(1).max(10),
  adicionais: z.array(adicionalSchema).min(0),
  imagem: z.string().optional(),
});
