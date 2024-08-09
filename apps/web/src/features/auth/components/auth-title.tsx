import { cn } from '@/lib/utils'

interface AuthTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export function AuthTitle({ className, ...props }: AuthTitleProps) {
  return (
    <h1
      {...props}
      className={cn('text-2xl font-semibold tracking-tight', className)}
    />
  )
}
