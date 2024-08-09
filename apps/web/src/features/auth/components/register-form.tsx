'use client'

import { Button } from '@/components/ui/button'
import { ErrorMessage } from '@/components/ui/error-message'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { useRegisterForm } from '../hooks/use-register-form'

export function RegisterForm() {
  const { form, onSubmit } = useRegisterForm()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <div className="space-y-1">
          <Label className="sr-only" htmlFor="name">
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
          <Label className="sr-only" htmlFor="mail">
            E-mail
          </Label>

          <Input
            {...register('mail')}
            id="mail"
            placeholder="E-mail"
            disabled={isSubmitting}
            autoComplete="email"
          />

          <ErrorMessage>{errors.mail?.message}</ErrorMessage>
        </div>

        <div className="space-y-1">
          <Label className="sr-only" htmlFor="phone">
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
        Cadastrar
      </Button>
    </form>
  )
}
