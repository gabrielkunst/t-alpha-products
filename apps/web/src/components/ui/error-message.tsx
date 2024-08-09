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
      className={cn('text-red-500 text-left text-sm ml-1', className)}
    />
  )
}
