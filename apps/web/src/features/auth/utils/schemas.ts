import { z } from 'zod'

import { isValidCPF, refinePhone, removeNonDigits } from '@/lib/utils'

export const registerSchema = z.object({
  name: z.string().trim().min(1, 'Nome é obrigatório'),
  taxNumber: z
    .string()
    .trim()
    .min(1, 'CPF é obrigatório')
    .transform(removeNonDigits)
    .refine(isValidCPF, 'CPF inválido'),
  mail: z
    .string()
    .trim()
    .email('E-mail inválido')
    .min(1, 'E-mail é obrigatório'),
  phone: z
    .string()
    .trim()
    .min(1, 'Telefone é obrigatório')
    .transform(removeNonDigits)
    .refine(refinePhone, 'Telefone inválido'),
  password: z.string().trim().min(6, 'Senha deve ter no mínimo 6 caracteres'),
})

export type RegisterSchema = z.infer<typeof registerSchema>

export const loginSchema = z.object({
  taxNumber: z
    .string()
    .trim()
    .min(1, 'CPF é obrigatório')
    .transform(removeNonDigits)
    .refine(isValidCPF, 'CPF inválido'),
  password: z.string().trim().min(1, 'Senha é obrigatória'),
})

export type LoginSchema = z.infer<typeof loginSchema>
