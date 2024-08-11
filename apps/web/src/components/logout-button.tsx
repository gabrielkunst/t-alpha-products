'use client'

import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { cn } from '@/lib/utils'

import { Button } from './ui/button'

interface LogoutButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export function LogoutButton({ className, ...props }: LogoutButtonProps) {
  const router = useRouter()

  const handleClick = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
      })

      const json = await response.json()

      if (!response.ok) {
        throw new Error(json.message)
      }

      toast.success(json.message)
      router.replace('/auth/login')
    } catch (error) {
      console.error(error)
      toast.error(
        'Ocorreu um erro ao fazer logout. Por favor, tente novamente mais tarde.'
      )
    }
  }

  return (
    <Button
      {...props}
      className={cn('w-full', className)}
      onClick={handleClick}
    >
      Logout
    </Button>
  )
}
