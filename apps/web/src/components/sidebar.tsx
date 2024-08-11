import { LogoutButton } from './logout-button'

export function Sidebar() {
  return (
    <aside className="hidden w-64 flex-col items-center justify-end bg-muted p-6 lg:flex">
      <LogoutButton />
    </aside>
  )
}
