import Link from 'next/link'

import { AuthSubtitle } from '../components/auth-subtitle'
import { AuthTitle } from '../components/auth-title'
import { LoginForm } from '../components/login-form'

export function LoginScreen() {
  return (
    <div className="mx-auto w-full max-w-md space-y-6 text-center">
      <div className="space-y-2">
        <AuthTitle>Login</AuthTitle>
        <AuthSubtitle>Faça login para acessar sua conta</AuthSubtitle>
      </div>

      <LoginForm />

      <AuthSubtitle>
        Não tem uma conta?{' '}
        <Link
          href="/auth/register"
          className="font-medium underline underline-offset-2"
        >
          Registre-se
        </Link>
      </AuthSubtitle>
    </div>
  )
}
