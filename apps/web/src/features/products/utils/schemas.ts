import { z } from 'zod'

export const productSchema = z.object({
  name: z.string().trim().min(1, 'O nome do produto é obrigatório'),
  description: z.string().trim().optional(),
  price: z.coerce
    .number()
    .min(0.01, 'Preço obrigatório')
    .positive('O preço deve ser maior que zero'),
  stock: z.coerce.number().min(1, 'Quantidade obrigatória'),
})

export type ProductSchema = z.infer<typeof productSchema>
