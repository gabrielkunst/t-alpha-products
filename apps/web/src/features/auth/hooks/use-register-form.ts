import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { RegisterSchema, registerSchema } from '../utils'

export function useRegisterForm() {
  const router = useRouter()
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = async (formData: RegisterSchema) => {
    try {
      const response = await fetch('/api/auth/register', {
        body: JSON.stringify(formData),
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
      })

      const json = await response.json()

      if (!response.ok || json.status !== 201) {
        toast.error(json.message)
        return
      }

      toast.success(json.message)
      router.push('/auth/login')
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
