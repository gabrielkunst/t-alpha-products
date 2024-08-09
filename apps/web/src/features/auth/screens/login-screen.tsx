'use client'

import { Input } from '@/components/ui/input'
import { AuthTitle } from '../components/auth-title'
import { AuthSubtitle } from '../components/auth-subtitle'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { loginSchema, LoginSchema } from '../utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { ErrorMessage } from '@/components/ui/error-message'

export function LoginScreen() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (formData: LoginSchema) => {
    console.log(formData)
  }

  return (
    <form
      className="space-y-6 text-center mx-auto w-full max-w-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="space-y-2">
        <AuthTitle>Login</AuthTitle>
        <AuthSubtitle>Faça login para acessar sua conta</AuthSubtitle>
      </div>

      <div className="space-y-2">
        <div className="space-y-1">
          <Label
            className="sr-only"
            htmlFor="taxNumber"
          >
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
          <Label
            className="sr-only"
            htmlFor="password"
          >
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

      <Button className="w-full">Entrar</Button>

      <AuthSubtitle>
        Não tem uma conta?{' '}
        <Link
          href="/auth/register"
          className="underline font-medium underline-offset-2"
        >
          Registre-se
        </Link>
      </AuthSubtitle>
    </form>
  )
}
