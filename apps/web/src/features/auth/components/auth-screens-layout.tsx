import { PropsWithChildren } from 'react'

export function AuthScreensLayout({ children }: PropsWithChildren) {
  return (
    <main className="min-h-screen flex">
      <section className="w-full xl:w-1/3 flex items-center justify-center">
        {children}
      </section>
      <section className="hidden xl:block w-2/3 bg-red-500">image</section>
    </main>
  )
}
