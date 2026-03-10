import * as React from 'react'
import { cn } from '../../lib/utils'

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Renders a dismiss ✕ button */
  onDismiss?: () => void
  /** Visual size */
  size?: 'sm' | 'md'
}

export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ className, children, onDismiss, size = 'md', ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        'inline-flex items-center gap-1.5 border border-neutral-300 bg-cream-100',
        'font-sans tracking-wide text-brand-black',
        size === 'sm' ? 'px-2 py-0.5 text-[0.6rem]' : 'px-3 py-1 text-xs',
        className
      )}
      {...props}
    >
      {children}
      {onDismiss ? (
        <button
          onClick={onDismiss}
          className="ml-1 text-neutral-400 hover:text-brand-black transition-colors"
          aria-label="Remove filter"
        >
          ✕
        </button>
      ) : null}
    </span>
  )
)

Tag.displayName = 'Tag'
