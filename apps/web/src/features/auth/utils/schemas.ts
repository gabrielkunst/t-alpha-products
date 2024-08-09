import { z } from 'zod'

export const registerSchema = z.object({
  name: z.string().trim().min(1, 'Nome é obrigatório'),
  taxNumber: z.string().trim().min(1, 'CPF / CNPJ é obrigatório'),
  mail: z
    .string()
    .trim()
    .email('E-mail inválido')
    .min(1, 'E-mail é obrigatório'),
  phone: z.string().trim().min(1, 'Telefone é obrigatório'),
  password: z.string().trim().min(6, 'Senha deve ter no mínimo 6 caracteres'),
})

export type RegisterSchema = z.infer<typeof registerSchema>

export const loginSchema = z.object({
  taxNumber: z.string().trim().min(1, 'CPF / CNPJ é obrigatório'),
  password: z.string().trim().min(6, 'Senha deve ter no mínimo 6 caracteres'),
})

export type LoginSchema = z.infer<typeof loginSchema>
