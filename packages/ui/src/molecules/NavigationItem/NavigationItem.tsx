import * as React from 'react'
import { cn } from '../../lib/utils'
import { Icon } from '../../atoms/Icon'
import { Text } from '../../atoms/Text'

export interface DropdownItem {
  label: string
  href:  string
  image?: string
}

export interface NavigationItemProps extends React.HTMLAttributes<HTMLLIElement> {
  label:   string
  href:    string
  /** Whether this item has a mega-menu dropdown */
  hasDropdown?: boolean
  /** Dropdown link groups */
  groups?: Array<{
    title: string
    links: DropdownItem[]
  }>
  /** Whether to show a featured image in the dropdown */
  featuredImage?: {
    src:   string
    alt:   string
    label: string
    href:  string
  }
  active?: boolean
}

export const NavigationItem = React.forwardRef<HTMLLIElement, NavigationItemProps>(
  ({ className, label, href, hasDropdown, groups, featuredImage, active, ...props }, ref) => {
    const [open, setOpen] = React.useState(false)

    return (
      <li
        ref={ref}
        className={cn('relative', className)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        {...props}
      >
        <a
          href={href}
          className={cn(
            'inline-flex items-center gap-0.5 py-2',
            'font-sans text-xs font-medium tracking-luxury uppercase',
            'transition-colors duration-250 ease-editorial',
            'hover:text-gold-500',
            active ? 'text-gold-500' : 'text-brand-black'
          )}
        >
          {label}
          {hasDropdown ? <Icon name="chevron-down" size={12} className="mt-0.5" /> : null}
        </a>

        {/* Mega menu dropdown */}
        {hasDropdown && groups ? (
          <div
            className={cn(
              'absolute left-0 top-full z-50 w-max min-w-[600px]',
              'border-t border-neutral-200 bg-brand-white shadow-xl',
              'transition-all duration-250 ease-editorial',
              open
                ? 'pointer-events-auto opacity-100 translate-y-0'
                : 'pointer-events-none opacity-0 -translate-y-2'
            )}
          >
            <div className="flex gap-0 p-8">
              {/* Link groups */}
              <div className="flex flex-1 gap-12">
                {groups.map((group) => (
                  <div key={group.title}>
                    <Text variant="labelLuxury" className="mb-4 text-neutral-500">
                      {group.title}
                    </Text>
                    <ul className="space-y-2">
                      {group.links.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            className={cn(
                              'font-sans text-sm text-brand-black',
                              'transition-colors duration-250 hover:text-gold-500'
                            )}
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Featured image */}
              {featuredImage ? (
                <a href={featuredImage.href} className="group ml-8 shrink-0">
                  <div className="relative w-[200px] overflow-hidden">
                    <img
                      src={featuredImage.src}
                      alt={featuredImage.alt}
                      className="aspect-[3/4] w-full object-cover transition-transform duration-400 ease-editorial group-hover:scale-105"
                    />
                    <p className="mt-2 font-sans text-xs tracking-wider text-brand-black uppercase">
                      {featuredImage.label}
                    </p>
                  </div>
                </a>
              ) : null}
            </div>
          </div>
        ) : null}
      </li>
    )

    function setHovered(value: boolean) {
      setOpen(value)
    }
  }
)

NavigationItem.displayName = 'NavigationItem'
