import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { LoginSchema, loginSchema } from '../utils'

export function useLoginForm() {
  const router = useRouter()
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (formData: LoginSchema) => {
    try {
      const response = await fetch('/api/auth/login', {
        body: JSON.stringify(formData),
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
      })

      const json = await response.json()

      if (!response.ok || json.status !== 200) {
        toast.error(json.message)
        return
      }

      toast.success(json.message)
      router.replace('/app')
    } catch (error) {
      toast.error(
        'Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.'
      )
    }
  }

  return {
    form,
    onSubmit,
  }
}
