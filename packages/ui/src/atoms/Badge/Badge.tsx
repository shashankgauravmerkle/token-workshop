import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const badgeVariants = cva(
  'inline-flex items-center font-sans font-medium tracking-wider uppercase',
  {
    variants: {
      variant: {
        /** "New" — sage green */
        new:       'bg-sage-400 text-brand-white text-[0.6rem] px-2 py-0.5',
        /** "Sale" — terracotta */
        sale:      'bg-terracotta-400 text-brand-white text-[0.6rem] px-2 py-0.5',
        /** "Exclusive" — gold */
        exclusive: 'bg-gold-500 text-brand-white text-[0.6rem] px-2 py-0.5',
        /** "Sold Out" — neutral */
        soldOut:   'bg-neutral-300 text-neutral-600 text-[0.6rem] px-2 py-0.5',
        /** Outline badge */
        outline:   'border border-brand-black text-brand-black text-[0.6rem] px-2 py-0.5',
      },
    },
    defaultVariants: {
      variant: 'new',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, children, ...props }, ref) => (
    <span ref={ref} className={cn(badgeVariants({ variant }), className)} {...props}>
      {children}
    </span>
  )
)

Badge.displayName = 'Badge'
