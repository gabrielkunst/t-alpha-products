import Link from 'next/link'
import { AuthTitle } from '../components/auth-title'
import { AuthSubtitle } from '../components/auth-subtitle'
import { RegisterForm } from '../components/register-form'

export function RegisterScreen() {
  return (
    <div className="space-y-6 text-center mx-auto w-full max-w-md">
      <div className="space-y-2">
        <AuthTitle>Cadastro</AuthTitle>
        <AuthSubtitle>
          Crie uma conta para começar a usar o T-Alpha
        </AuthSubtitle>
      </div>

      <RegisterForm />

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
