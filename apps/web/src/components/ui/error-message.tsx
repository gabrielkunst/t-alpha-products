import { cn } from '@/lib/utils'

interface ErrorMessageProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export function ErrorMessage({ className, ...props }: ErrorMessageProps) {
  if (!props.children) {
    return null
  }

  return (
    <p
      {...props}
      className={cn('ml-1 text-left text-sm text-red-500', className)}
    />
  )
}
