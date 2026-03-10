import * as React from 'react'
import { cn } from '../../lib/utils'

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical'
  /** Decorative ornament variant */
  decorative?: boolean
}

export const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  ({ className, orientation = 'horizontal', decorative = false, ...props }, ref) => {
    if (decorative) {
      return (
        <div className={cn('flex items-center gap-4', className)}>
          <hr className="flex-1 border-t border-neutral-200" />
          <span className="text-gold-500 text-lg">✦</span>
          <hr className="flex-1 border-t border-neutral-200" />
        </div>
      )
    }

    return (
      <hr
        ref={ref}
        className={cn(
          orientation === 'vertical'
            ? 'h-full w-px border-l border-t-0 border-neutral-200'
            : 'w-full border-t border-neutral-200',
          className
        )}
        {...props}
      />
    )
  }
)

Divider.displayName = 'Divider'
