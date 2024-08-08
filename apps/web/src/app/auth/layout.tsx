import { AuthScreensLayout } from '@/features/auth/components'
import { PropsWithChildren } from 'react'

export default function AuthLayout({ children }: PropsWithChildren) {
  return <AuthScreensLayout>{children}</AuthScreensLayout>
}
