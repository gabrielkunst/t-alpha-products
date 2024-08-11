import { PropsWithChildren } from 'react'

import { Sidebar } from '@/components/sidebar'

export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}
