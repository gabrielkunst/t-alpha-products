import { cn } from '@/lib/utils'

interface SubtitleProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export function Subtitle({ className, ...props }: SubtitleProps) {
  return (
    <p {...props} className={cn('text-sm text-muted-foreground', className)} />
  )
}
