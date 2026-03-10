import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const linkVariants = cva(
  'cursor-pointer transition-colors duration-250 ease-editorial focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-1',
  {
    variants: {
      variant: {
        /** Animated underline — primary editorial link */
        default: [
          'relative font-sans text-brand-black',
          'after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-brand-black',
          'after:transition-[width] after:duration-250 after:ease-editorial',
          'hover:after:w-full',
        ],
        /** Persistent underline */
        underline: 'font-sans text-brand-black underline underline-offset-4 decoration-neutral-300 hover:decoration-brand-black',
        /** Navigation — no underline, hover color shift */
        nav: 'font-sans text-brand-black hover:text-gold-500',
        /** Muted grey link */
        muted: 'font-sans text-neutral-500 hover:text-brand-black',
        /** Gold accent link */
        gold: [
          'relative font-sans text-gold-500',
          'after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gold-500',
          'after:transition-[width] after:duration-250 after:ease-editorial',
          'hover:after:w-full',
        ],
      },
      size: {
        xs:   'text-xs',
        sm:   'text-sm',
        base: 'text-base',
        lg:   'text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size:    'base',
    },
  }
)

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, size, ...props }, ref) => (
    <a ref={ref} className={cn(linkVariants({ variant, size }), className)} {...props} />
  )
)

Link.displayName = 'Link'
