import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const buttonVariants = cva(
  // ─── Base styles ────────────────────────────────────────────────────────
  [
    'inline-flex items-center justify-center gap-2',
    'font-sans font-medium tracking-luxury uppercase text-xs',
    'border transition-all duration-250 ease-editorial',
    'cursor-pointer select-none whitespace-nowrap',
    'disabled:pointer-events-none disabled:opacity-40',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2',
  ],
  {
    variants: {
      variant: {
        /** Solid — primary CTA (dark fill) */
        primary: [
          'bg-brand-black text-brand-white border-brand-black',
          'hover:bg-neutral-700 hover:border-neutral-700',
          'active:bg-neutral-900',
        ],
        /** Outline — secondary CTA (transparent, dark border) */
        secondary: [
          'bg-transparent text-brand-black border-brand-black',
          'hover:bg-brand-black hover:text-brand-white',
          'active:bg-neutral-800',
        ],
        /** Ghost — tertiary (no border on rest) */
        ghost: [
          'bg-transparent text-brand-black border-transparent',
          'hover:border-brand-black',
          'active:bg-cream-200',
        ],
        /** Ivory — for use on dark/image backgrounds */
        ivory: [
          'bg-brand-white text-brand-black border-brand-white',
          'hover:bg-cream-200 hover:border-cream-200',
        ],
        /** Gold — premium accent CTA */
        gold: [
          'bg-gold-500 text-brand-white border-gold-500',
          'hover:bg-gold-600 hover:border-gold-600',
        ],
        /** Link — text-only button */
        link: [
          'bg-transparent border-transparent text-brand-black',
          'underline-offset-4 hover:underline',
          'p-0 h-auto',
        ],
      },
      size: {
        sm:   'h-8  px-4  text-[0.625rem]',
        md:   'h-10 px-6  text-xs',
        lg:   'h-12 px-8  text-xs',
        xl:   'h-14 px-10 text-xs',
        icon: 'h-10 w-10 p-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size:    'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Renders as a different element (e.g. anchor) */
  asChild?: boolean
  /** Loading state — replaces content with spinner */
  loading?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <span className="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
