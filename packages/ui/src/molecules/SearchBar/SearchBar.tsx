import * as React from 'react'
import { cn } from '../../lib/utils'
import { Icon } from '../../atoms/Icon'

export interface SearchBarProps extends React.HTMLAttributes<HTMLFormElement> {
  placeholder?: string
  onSearch?: (query: string) => void
  defaultValue?: string
  autoFocus?: boolean
}

export const SearchBar = React.forwardRef<HTMLFormElement, SearchBarProps>(
  ({ className, placeholder = 'Search', onSearch, defaultValue = '', autoFocus, ...props }, ref) => {
    const [value, setValue] = React.useState(defaultValue)

    return (
      <form
        ref={ref}
        className={cn('relative flex items-center', className)}
        onSubmit={(e) => {
          e.preventDefault()
          onSearch?.(value)
        }}
        {...props}
      >
        <Icon
          name="search"
          size={16}
          className="absolute left-0 text-neutral-400"
        />
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className={cn(
            'w-full border-b border-neutral-300 bg-transparent py-2 pl-6 pr-4',
            'font-sans text-sm text-brand-black placeholder:text-neutral-400',
            'transition-colors duration-250 ease-editorial',
            'focus:border-brand-black focus:outline-none',
            'hover:border-neutral-500'
          )}
        />
      </form>
    )
  }
)

SearchBar.displayName = 'SearchBar'
