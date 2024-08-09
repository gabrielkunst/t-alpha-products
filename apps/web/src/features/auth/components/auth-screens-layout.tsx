import { PropsWithChildren } from 'react'

export function AuthScreensLayout({ children }: PropsWithChildren) {
  return (
    <main className="min-h-screen flex">
      <section className="w-full md:w-1/3 flex items-center justify-center px-12 py-6">
        {children}
      </section>
      <section className="hidden md:block w-2/3 bg-muted" />
    </main>
  )
}
