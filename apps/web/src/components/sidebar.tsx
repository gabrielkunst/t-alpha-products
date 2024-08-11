import { LogoText } from './logo-text'
import { LogoutButton } from './logout-button'

export function Sidebar() {
  return (
    <aside className="flex w-64 flex-col items-center justify-between bg-muted p-6">
      <LogoText />
      <LogoutButton />
    </aside>
  )
}
