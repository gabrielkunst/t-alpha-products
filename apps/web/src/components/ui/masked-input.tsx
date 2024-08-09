import { InputMask, MaskProps } from '@react-input/mask'
import * as React from 'react'

import { cn } from '@/lib/utils'

export interface MaskedInputProps
  extends MaskProps,
    React.InputHTMLAttributes<HTMLInputElement> {}

const MaskedInput = React.forwardRef<HTMLInputElement, MaskedInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <InputMask
        {...props}
        ref={ref}
        className={cn(
          'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
      />
    )
  },
)

MaskedInput.displayName = 'MaskedInput'

export { MaskedInput }
