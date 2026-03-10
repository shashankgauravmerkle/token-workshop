import * as React from 'react'
import { cn } from '../../lib/utils'

/** Subset of icons used across Tory Burch site patterns */
export type IconName =
  | 'search'
  | 'bag'
  | 'wishlist'
  | 'account'
  | 'menu'
  | 'close'
  | 'chevron-right'
  | 'chevron-left'
  | 'chevron-down'
  | 'chevron-up'
  | 'arrow-right'
  | 'arrow-left'
  | 'check'
  | 'star'
  | 'star-filled'
  | 'share'
  | 'filter'
  | 'sort'

const iconPaths: Record<IconName, React.ReactNode> = {
  search:        <><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></>,
  bag:           <><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></>,
  wishlist:      <><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></>,
  account:       <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
  menu:          <><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></>,
  close:         <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>,
  'chevron-right':<polyline points="9 18 15 12 9 6"/>,
  'chevron-left': <polyline points="15 18 9 12 15 6"/>,
  'chevron-down': <polyline points="6 9 12 15 18 9"/>,
  'chevron-up':   <polyline points="18 15 12 9 6 15"/>,
  'arrow-right':  <><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>,
  'arrow-left':   <><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></>,
  check:         <polyline points="20 6 9 17 4 12"/>,
  star:          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>,
  'star-filled': <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor"/>,
  share:         <><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></>,
  filter:        <><line x1="4" y1="6" x2="16" y2="6"/><line x1="8" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="16" y2="18"/></>,
  sort:          <><line x1="3" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="13" y1="18" x2="21" y2="18"/></>,
}

export interface IconProps extends React.SVGAttributes<SVGElement> {
  name: IconName
  size?: number | string
  strokeWidth?: number
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 20, strokeWidth = 1.5, className, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('shrink-0', className)}
      aria-hidden="true"
      {...props}
    >
      {iconPaths[name]}
    </svg>
  )
)

Icon.displayName = 'Icon'
