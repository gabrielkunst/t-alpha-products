import Link from 'next/link'
import { AuthTitle } from '../components/auth-title'
import { AuthSubtitle } from '../components/auth-subtitle'
import { LoginForm } from '../components/login-form'

export function LoginScreen() {
  return (
    <div className="space-y-6 text-center mx-auto w-full max-w-md">
      <div className="space-y-2">
        <AuthTitle>Login</AuthTitle>
        <AuthSubtitle>Faça login para acessar sua conta</AuthSubtitle>
      </div>

      <LoginForm />

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
