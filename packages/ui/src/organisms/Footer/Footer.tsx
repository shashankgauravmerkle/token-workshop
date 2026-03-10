import * as React from 'react'
import { cn } from '../../lib/utils'
import { Text } from '../../atoms/Text'
import { Divider } from '../../atoms/Divider'
import { Icon } from '../../atoms/Icon'

interface FooterLinkGroup {
  title: string
  links: Array<{ label: string; href: string }>
}

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  linkGroups?: FooterLinkGroup[]
  /** Social links */
  socialLinks?: Array<{
    platform: 'instagram' | 'facebook' | 'pinterest' | 'twitter' | 'tiktok'
    href: string
  }>
  copyrightYear?: number
}

const DEFAULT_GROUPS: FooterLinkGroup[] = [
  {
    title: 'Explore',
    links: [
      { label: 'New Arrivals',     href: '/new-arrivals' },
      { label: 'Dodie Thayer',     href: '/dodie-thayer' },
      { label: 'Bags',             href: '/bags' },
      { label: 'Shoes',            href: '/shoes' },
      { label: 'Ready-to-Wear',    href: '/ready-to-wear' },
      { label: 'Home',             href: '/home' },
      { label: 'Sale',             href: '/sale' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Order Status',     href: '/order-status' },
      { label: 'Shipping & Returns',href: '/shipping' },
      { label: 'Contact Us',       href: '/contact' },
      { label: 'Store Locator',    href: '/stores' },
      { label: 'Size Guides',      href: '/size-guides' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'Our Story',        href: '/about' },
      { label: 'Careers',          href: '/careers' },
      { label: 'Sustainability',   href: '/sustainability' },
      { label: 'Press',            href: '/press' },
    ],
  },
  {
    title: 'Foundation',
    links: [
      { label: 'Tory Burch Foundation', href: '/foundation' },
      { label: 'Empowering Women',      href: '/foundation/programs' },
    ],
  },
]

// Simple SVG social icons
const SocialIcon = ({ platform }: { platform: string }) => {
  const paths: Record<string, React.ReactNode> = {
    instagram: <><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></>,
    facebook:  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>,
    pinterest: <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.852 0 1.265.64 1.265 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.476 1.806 1.771 0 3.132-1.867 3.132-4.562 0-2.387-1.715-4.054-4.163-4.054-2.836 0-4.498 2.126-4.498 4.322 0 .856.33 1.772.741 2.273a.3.3 0 0 1 .07.285c-.075.314-.244.995-.277 1.134-.044.183-.146.222-.338.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/>,
    twitter:   <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>,
    tiktok:    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.79a8.18 8.18 0 0 0 4.78 1.52V6.88a4.85 4.85 0 0 1-1.01-.19z"/>,
  }
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {paths[platform]}
    </svg>
  )
}

export const Footer = React.forwardRef<HTMLElement, FooterProps>(
  (
    {
      className,
      linkGroups = DEFAULT_GROUPS,
      socialLinks = [
        { platform: 'instagram', href: '#' },
        { platform: 'facebook',  href: '#' },
        { platform: 'pinterest', href: '#' },
        { platform: 'tiktok',    href: '#' },
      ],
      copyrightYear = new Date().getFullYear(),
      ...props
    },
    ref
  ) => (
    <footer
      ref={ref}
      className={cn('bg-brand-black text-brand-white', className)}
      {...props}
    >
      {/* ─── Newsletter ─────────────────────────────────────────────────── */}
      <div className="border-b border-neutral-800 py-14 text-center">
        <Text variant="labelLuxury" color="muted" as="p" className="mb-3">
          Stay in the world of Tory Burch
        </Text>
        <Text variant="headingMedium" color="inverse" className="mb-6">
          Sign Up for Updates
        </Text>
        <form
          className="mx-auto flex max-w-md gap-0"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Your email address"
            className={cn(
              'flex-1 border border-neutral-700 bg-transparent px-4 py-3',
              'font-sans text-sm text-brand-white placeholder:text-neutral-500',
              'transition-colors focus:border-gold-500 focus:outline-none'
            )}
          />
          <button
            type="submit"
            className={cn(
              'border border-l-0 border-gold-500 bg-gold-500 px-6 py-3',
              'font-sans text-[0.6rem] tracking-luxury uppercase text-brand-white',
              'transition-colors hover:bg-gold-600 hover:border-gold-600'
            )}
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* ─── Links Grid ─────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-content px-8 py-14">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {linkGroups.map((group) => (
            <div key={group.title}>
              <Text variant="labelLuxury" color="muted" as="p" className="mb-5">
                {group.title}
              </Text>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-sans text-sm text-neutral-400 transition-colors hover:text-brand-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Divider className="border-neutral-800" />

      {/* ─── Bottom Bar ─────────────────────────────────────────────────── */}
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-6 px-8 py-8 md:flex-row">
        {/* Logo wordmark */}
        <span className="font-serif text-lg tracking-[0.15em] uppercase text-brand-white">
          Tory Burch
        </span>

        {/* Social */}
        {socialLinks.length > 0 ? (
          <div className="flex items-center gap-5">
            {socialLinks.map(({ platform, href }) => (
              <a
                key={platform}
                href={href}
                aria-label={platform}
                className="text-neutral-400 transition-colors hover:text-brand-white"
              >
                <SocialIcon platform={platform} />
              </a>
            ))}
          </div>
        ) : null}

        {/* Legal */}
        <div className="flex flex-wrap items-center gap-4">
          {['Privacy Policy', 'Terms of Use', 'Accessibility', 'Do Not Sell'].map((item) => (
            <a
              key={item}
              href="#"
              className="font-sans text-xs text-neutral-500 hover:text-neutral-300 transition-colors"
            >
              {item}
            </a>
          ))}
          <Text variant="caption" color="muted">
            © {copyrightYear} Tory Burch
          </Text>
        </div>
      </div>
    </footer>
  )
)

Footer.displayName = 'Footer'
