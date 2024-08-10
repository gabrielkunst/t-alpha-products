'use client'

import { Button } from '@/components/ui/button'
import { ErrorMessage } from '@/components/ui/error-message'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { MaskedInput } from '@/components/ui/masked-input'

import { useLoginForm } from '../hooks/use-login-form'

export function LoginForm() {
  const { form, onSubmit } = useLoginForm()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2">
        <div className="space-y-1">
          <Label className="sr-only" htmlFor="taxNumber">
            CPF
          </Label>

          <MaskedInput
            {...register('taxNumber')}
            mask="___.___.___-__"
            replacement={{ _: /\d/ }}
            id="taxNumber"
            placeholder="CPF"
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
