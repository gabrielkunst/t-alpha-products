import { cn } from '@/lib/utils'

interface LogoTextProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export function LogoText({ className, ...props }: LogoTextProps) {
  return (
    <h2
      {...props}
      className={cn(
        'text-2xl font-semibold uppercase tracking-wider',
        className
      )}
    >
      T-Alpha
    </h2>
  )
}
