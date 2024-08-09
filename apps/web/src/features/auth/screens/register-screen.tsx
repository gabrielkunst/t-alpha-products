'use client'

import { Input } from '@/components/ui/input'
import { AuthTitle } from '../components/auth-title'
import { AuthSubtitle } from '../components/auth-subtitle'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { registerSchema, RegisterSchema } from '../utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { ErrorMessage } from '@/components/ui/error-message'

export function RegisterScreen() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = async (formData: RegisterSchema) => {
    console.log(formData)
  }

  return (
    <form
      className="space-y-6 text-center mx-auto w-full max-w-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="space-y-2">
        <AuthTitle>Cadastro</AuthTitle>
        <AuthSubtitle>
          Crie uma conta para começar a usar o T-Alpha
        </AuthSubtitle>
      </div>

      <div className="space-y-2">
        <div className="space-y-1">
          <Label
            className="sr-only"
            htmlFor="name"
          >
            Nome
          </Label>

          <Input
            {...register('name')}
            id="name"
            placeholder="Nome"
            disabled={isSubmitting}
            autoComplete="name"
          />

          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>

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
            htmlFor="mail"
          >
            E-mail
          </Label>

          <Input
            {...register('email')}
            id="email"
            placeholder="E-mail"
            disabled={isSubmitting}
            autoComplete="email"
          />

          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        </div>

        <div className="space-y-1">
          <Label
            className="sr-only"
            htmlFor="phone"
          >
            Telefone
          </Label>

          <Input
            {...register('phone')}
            id="phone"
            placeholder="Telefone"
            disabled={isSubmitting}
            autoComplete="phone"
          />

          <ErrorMessage>{errors.phone?.message}</ErrorMessage>
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

      <Button className="w-full">Cadastrar</Button>

      <AuthSubtitle>
        Já tem uma conta?{' '}
        <Link
          href="/auth/login"
          className="underline font-medium underline-offset-2"
        >
          Faça login
        </Link>
      </AuthSubtitle>
    </form>
  )
}
