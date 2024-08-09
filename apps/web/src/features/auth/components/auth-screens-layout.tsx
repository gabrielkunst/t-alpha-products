import { PropsWithChildren } from 'react'

export function AuthScreensLayout({ children }: PropsWithChildren) {
  return (
    <main className="flex min-h-screen">
      <section className="flex w-full items-center justify-center px-12 py-6 md:w-1/3">
        {children}
      </section>
      <section className="hidden w-2/3 bg-muted md:block" />
    </main>
  )
}
