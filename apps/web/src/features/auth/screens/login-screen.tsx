import { Input } from '@/components/ui/input'
import { AuthTitle } from '../components/auth-title'
import { AuthSubtitle } from '../components/auth-subtitle'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function LoginScreen() {
  return (
    <div className="space-y-6 text-center mx-auto w-full max-w-md">
      <div className="space-y-2">
        <AuthTitle>Login</AuthTitle>
        <AuthSubtitle>Faça login para acessar sua conta</AuthSubtitle>
      </div>

      <div className="space-y-2">
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
        Não tem uma conta?{' '}
        <Link
          href="/auth/register"
          className="underline font-medium underline-offset-2"
        >
          Registre-se
        </Link>
      </AuthSubtitle>
    </div>
  )
}
