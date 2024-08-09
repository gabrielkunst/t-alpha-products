'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { ErrorMessage } from '@/components/ui/error-message'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { LoginSchema, loginSchema } from '../utils'

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (formData: LoginSchema) => {}

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2">
        <div className="space-y-1">
          <Label className="sr-only" htmlFor="taxNumber">
            CPF / CNPJ
          </Label>

          <Input
            {...register('taxNumber')}
            id="taxNumber"
            placeholder="CPF / CNPJ"
            disabled={isSubmitting}
            autoComplete="taxNumber"
          />

          <ErrorMessage>{errors.taxNumber?.message}</ErrorMessage>
        </div>

        <div className="space-y-1">
          <Label className="sr-only" htmlFor="password">
            Senha
          </Label>

          <Input
            {...register('password')}
            id="password"
            placeholder="Senha"
            type="password"
            disabled={isSubmitting}
            autoComplete="password"
          />

          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        </div>
      </div>

      <Button className="w-full" disabled={isSubmitting}>
        Entrar
      </Button>
    </form>
  )
}
