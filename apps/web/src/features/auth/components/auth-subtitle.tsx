import { cn } from '@/lib/utils'

interface AuthSubtitleProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export function AuthSubtitle({ className, ...props }: AuthSubtitleProps) {
  return (
    <p
      {...props}
      className={cn('text-sm text-muted-foreground', className)}
    />
  )
}
