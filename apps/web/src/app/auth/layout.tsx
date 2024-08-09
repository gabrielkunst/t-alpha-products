import { PropsWithChildren } from 'react'

import { AuthScreensLayout } from '@/features/auth/components'

export default function AuthLayout({ children }: PropsWithChildren) {
  return <AuthScreensLayout>{children}</AuthScreensLayout>
}
