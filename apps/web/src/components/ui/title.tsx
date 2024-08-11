import { cn } from '@/lib/utils'

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export function Title({ className, ...props }: TitleProps) {
  return <h2 {...props} className={cn('text-3xl font-bold', className)} />
}
