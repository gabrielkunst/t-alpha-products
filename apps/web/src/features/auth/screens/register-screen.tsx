import { Input } from '@/components/ui/input'
import { AuthTitle } from '../components/auth-title'
import { AuthSubtitle } from '../components/auth-subtitle'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function RegisterScreen() {
  return (
    <div className="space-y-6 text-center mx-auto w-full max-w-md">
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

          <Input placeholder="Nome" />
        </div>

        <div className="space-y-1">
          <Label
            className="sr-only"
            htmlFor="cpf-cnpj"
          >
            CPF / CNPJ
          </Label>

          <Input placeholder="CPF / CNPJ" />
        </div>

        <div className="space-y-1">
          <Label
            className="sr-only"
            htmlFor="email"
          >
            E-mail
          </Label>

          <Input placeholder="E-mail" />
        </div>

        <div className="space-y-1">
          <Label
            className="sr-only"
            htmlFor="phone"
          >
            Telefone
          </Label>

          <Input placeholder="Telefone" />
        </div>

        <div className="space-y-1">
          <Label
            className="sr-only"
            htmlFor="password"
          >
            Senha
          </Label>

          <Input
            placeholder="Senha"
            type="password"
          />
        </div>
      </div>

      <Button className="w-full">Entrar</Button>

      <AuthSubtitle>
        Já tem uma conta?{' '}
        <Link
          href="/auth/login"
          className="underline font-medium underline-offset-2"
        >
          Faça login
        </Link>
      </AuthSubtitle>
    </div>
  )
}
