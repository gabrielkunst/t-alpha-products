import { z } from 'zod'

export const productSchema = z.object({
  name: z.string().trim().min(1, 'O nome do produto é obrigatório'),
  description: z.string().trim().optional(),
  price: z.number(),
  stock: z
    .number()
    .min(1, 'Quantidade obrigatória')
    .positive('O estoque deve ser maior que zero'),
})

export type ProductSchema = z.infer<typeof productSchema>
