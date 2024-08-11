import { PropsWithChildren } from 'react'

import { Sidebar } from '@/components/sidebar'

export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex max-h-screen min-h-screen w-full overflow-hidden">
      <Sidebar />
      <main className="max-h-screen flex-1 overflow-y-auto p-8 lg:p-12">
        {children}
      </main>
    </div>
  )
}
