import z from "zod";

export const addressSchema = z.object({
       cep: z.string().min(4, "CEP deve ter mais de 2 Caracteres"),
     estado: z.string().min(4, "Estado deve ter mais de 4 Caracteres"),
      cidade: z.string().min(4, "Cidade deve ter mais de 2 Caracteres"),
      bairro: z.string().min(4, "Bairro deve ter mais de 2 Caracteres"),
      rua: z.string().min(4, "Rua deve ter mais de 2 Caracteres"),
      numero: z.string().min(1, "Numero deve ter pelo menos 1 Caracter"),
      complemento: z.string().min(2, "Complemento deve ter mais de 2 Caracteres"),
})