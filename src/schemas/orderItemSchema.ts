import z from 'zod'


export const orderItemschema= z.object({
    sabor: z.string().min(2,"Sabor precisa ter pelo menos 2 caracteres"),
  descricao: z.string().min(2,"A descrição precisa ter pelo menos 2 caracteres"),
  preco: z.number().min(1,"O preço mínimo é 1"),
  imagem: z.string().optional(),
  precoTotal: z.number(),
  unidades: z.number(),
  adicionais: z.array(z.string()),
  cartId: z.number(),
})