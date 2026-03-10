import * as React from 'react'
import { cn } from '../../lib/utils'
import { Icon } from '../../atoms/Icon'
import { SearchBar } from '../../molecules/SearchBar'
import { Text } from '../../atoms/Text'
import { Divider } from '../../atoms/Divider'

export interface NavConfig {
  label:        string
  href:         string
  hasDropdown?: boolean
  groups?: Array<{
    title: string
    links: Array<{ label: string; href: string }>
  }>
  featuredImage?: {
    src:   string
    alt:   string
    label: string
    href:  string
  }
}

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  /** Navigation links */
  navItems?: NavConfig[]
  /** Bag item count */
  bagCount?: number
  /** Callback for bag icon click */
  onBagClick?:     () => void
  onSearchClick?:  () => void
  onAccountClick?: () => void
  onWishlistClick?:() => void
  /** Transparent on hero — becomes opaque on scroll */
  transparent?: boolean
  /** Promo bar text above the header */
  promoText?: string
}

const DEFAULT_NAV: NavConfig[] = [
  {
    label: 'New Arrivals',
    href:  '/new-arrivals',
  },
  {
    label: 'Dodie Thayer',
    href:  '/dodie-thayer',
    hasDropdown: true,
    groups: [
      {
        title: 'The Collaboration',
        links: [
          { label: 'Shop All',           href: '/dodie-thayer' },
          { label: 'Ceramic Collection', href: '/dodie-thayer/ceramics' },
          { label: 'Bags & Accessories', href: '/dodie-thayer/bags' },
          { label: 'Ready-to-Wear',      href: '/dodie-thayer/rtw' },
        ],
      },
      {
        title: 'The Story',
        links: [
          { label: 'About Dodie Thayer', href: '/dodie-thayer/story' },
          { label: 'The Lookbook',       href: '/dodie-thayer/lookbook' },
        ],
      },
    ],
    featuredImage: {
      src:   'https://via.placeholder.com/200x267/F5F0E8/8B9E7E?text=Dodie',
      alt:   'Dodie Thayer Ceramics',
      label: 'Shop the Collection',
      href:  '/dodie-thayer',
    },
  },
  {
    label: 'Bags',
    href:  '/bags',
    hasDropdown: true,
    groups: [
      {
        title: 'Shop By',
        links: [
          { label: 'All Bags',     href: '/bags' },
          { label: 'New Arrivals', href: '/bags/new' },
          { label: 'Totes',        href: '/bags/totes' },
          { label: 'Crossbodies',  href: '/bags/crossbodies' },
          { label: 'Clutches',     href: '/bags/clutches' },
        ],
      },
    ],
  },
  { label: 'Shoes',         href: '/shoes' },
  { label: 'Ready-to-Wear', href: '/ready-to-wear' },
  { label: 'Home',          href: '/home' },
  { label: 'Sale',          href: '/sale' },
]

// ─── Drawer nav item with inline accordion for sub-groups ────────────────────
function DrawerItem({ item, onClose }: { item: NavConfig; onClose: () => void }) {
  const [expanded, setExpanded] = React.useState(false)

  if (!item.hasDropdown || !item.groups) {
    return (
      <li>
        <a
          href={item.href}
          onClick={onClose}
          className={cn(
            'flex w-full items-center justify-between py-4 px-6',
            'font-sans text-sm font-medium tracking-luxury uppercase text-brand-black',
            'border-b border-neutral-100 transition-colors hover:text-gold-500'
          )}
        >
          {item.label}
        </a>
      </li>
    )
  }

  return (
    <li className="border-b border-neutral-100">
      {/* Accordion trigger */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className={cn(
          'flex w-full items-center justify-between py-4 px-6',
          'font-sans text-sm font-medium tracking-luxury uppercase text-brand-black',
          'transition-colors hover:text-gold-500'
        )}
        aria-expanded={expanded}
      >
        {item.label}
        <Icon
          name="chevron-down"
          size={14}
          className={cn(
            'shrink-0 transition-transform duration-250 ease-editorial',
            expanded && 'rotate-180'
          )}
        />
      </button>

      {/* Sub-links */}
      <div
        className={cn(
          'overflow-hidden transition-all duration-250 ease-editorial',
          expanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="bg-cream-100 px-6 pb-5 pt-1">
          {item.groups.map((group) => (
            <div key={group.title} className="mb-4 last:mb-0">
              <Text variant="labelSmall" color="muted" className="mb-2 mt-3">
                {group.title}
              </Text>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={onClose}
                      className="font-sans text-sm text-neutral-600 transition-colors hover:text-gold-500"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Featured image link */}
          {item.featuredImage ? (
            <a
              href={item.featuredImage.href}
              onClick={onClose}
              className="mt-4 flex items-center gap-3 group"
            >
              <img
                src={item.featuredImage.src}
                alt={item.featuredImage.alt}
                className="h-16 w-12 shrink-0 object-cover"
              />
              <Text
                variant="labelSmall"
                className="transition-colors group-hover:text-gold-500"
              >
                {item.featuredImage.label}
              </Text>
            </a>
          ) : null}
        </div>
      </div>
    </li>
  )
}

// ─── Header ──────────────────────────────────────────────────────────────────
export const Header = React.forwardRef<HTMLElement, HeaderProps>(
  (
    {
      className,
      navItems = DEFAULT_NAV,
      bagCount = 0,
      onBagClick,
      onSearchClick,
      onAccountClick,
      onWishlistClick,
      transparent = false,
      promoText = 'Complimentary Shipping & Returns on all orders',
      ...props
    },
    ref
  ) => {
    const [scrolled,    setScrolled]    = React.useState(false)
    const [searchOpen,  setSearchOpen]  = React.useState(false)
    const [drawerOpen,  setDrawerOpen]  = React.useState(false)
    const drawerRef = React.useRef<HTMLDivElement>(null)

    // Scroll listener — collapse promo bar and switch header style
    React.useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 60)
      window.addEventListener('scroll', onScroll, { passive: true })
      return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Close drawer on Escape
    React.useEffect(() => {
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setDrawerOpen(false)
      }
      document.addEventListener('keydown', onKey)
      return () => document.removeEventListener('keydown', onKey)
    }, [])

    // Prevent body scroll while drawer is open
    React.useEffect(() => {
      document.body.style.overflow = drawerOpen ? 'hidden' : ''
      return () => { document.body.style.overflow = '' }
    }, [drawerOpen])

    const isLight = transparent && !scrolled

    return (
      <>
        <header
          ref={ref}
          className={cn(
            'fixed left-0 right-0 top-0 z-50 transition-all duration-400 ease-editorial',
            isLight
              ? 'bg-transparent'
              : 'bg-brand-white/95 backdrop-blur-sm shadow-subtle border-b border-neutral-100',
            className
          )}
          {...props}
        >
          {/* ─── Promo Bar ────────────────────────────────────────────── */}
          {promoText && !scrolled ? (
            <div className="bg-brand-black py-2 text-center">
              <p className="font-sans text-[0.6rem] tracking-luxury uppercase text-brand-white/90">
                {promoText}
              </p>
            </div>
          ) : null}

          {/* ─── Main Header Row ──────────────────────────────────────── */}
          <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">

            {/* Hamburger — always visible */}
            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
              aria-expanded={drawerOpen}
              className={cn(
                'flex h-10 w-10 items-center justify-center',
                'transition-colors hover:text-gold-500',
                isLight ? 'text-brand-white' : 'text-brand-black'
              )}
            >
              <Icon name="menu" size={22} />
            </button>

            {/* Logo — centred */}
            <a
              href="/"
              className={cn(
                'absolute left-1/2 -translate-x-1/2',
                'font-serif text-xl font-light tracking-[0.15em] uppercase',
                'transition-colors duration-250',
                isLight ? 'text-brand-white' : 'text-brand-black'
              )}
            >
              Tory Burch
            </a>

            {/* Utility icons — right side */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => { setSearchOpen((v) => !v); onSearchClick?.() }}
                aria-label="Search"
                className={cn(
                  'transition-colors hover:text-gold-500',
                  isLight ? 'text-brand-white' : 'text-brand-black'
                )}
              >
                <Icon name="search" size={20} />
              </button>

              <button
                onClick={onWishlistClick}
                aria-label="Wishlist"
                className={cn(
                  'hidden sm:flex transition-colors hover:text-gold-500',
                  isLight ? 'text-brand-white' : 'text-brand-black'
                )}
              >
                <Icon name="wishlist" size={20} />
              </button>

              <button
                onClick={onBagClick}
                aria-label={`Shopping bag, ${bagCount} items`}
                className={cn(
                  'relative transition-colors hover:text-gold-500',
                  isLight ? 'text-brand-white' : 'text-brand-black'
                )}
              >
                <Icon name="bag" size={20} />
                {bagCount > 0 ? (
                  <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-terracotta-400 font-sans text-[0.55rem] text-brand-white">
                    {bagCount}
                  </span>
                ) : null}
              </button>
            </div>
          </div>

          {/* ─── Search Overlay ───────────────────────────────────────── */}
          <div
            className={cn(
              'overflow-hidden transition-all duration-250 ease-editorial',
              searchOpen ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
            )}
          >
            <div className="border-t border-neutral-100 bg-brand-white px-8 py-5">
              <SearchBar
                className="mx-auto max-w-2xl"
                placeholder="Search for products, styles, or inspiration..."
                autoFocus={searchOpen}
                onSearch={(q) => { console.log('search:', q); setSearchOpen(false) }}
              />
            </div>
          </div>
        </header>

        {/* ─── Backdrop ─────────────────────────────────────────────────── */}
        <div
          onClick={() => setDrawerOpen(false)}
          aria-hidden="true"
          className={cn(
            'fixed inset-0 z-40 bg-brand-black/50 backdrop-blur-sm',
            'transition-opacity duration-400 ease-editorial',
            drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          )}
        />

        {/* ─── Drawer ───────────────────────────────────────────────────── */}
        <div
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className={cn(
            'fixed left-0 top-0 z-50 flex h-full w-[320px] max-w-[85vw] flex-col',
            'bg-brand-white shadow-2xl',
            'transition-transform duration-400 ease-editorial',
            drawerOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between border-b border-neutral-100 px-6 py-5">
            <a
              href="/"
              onClick={() => setDrawerOpen(false)}
              className="font-serif text-lg font-light tracking-[0.15em] uppercase text-brand-black"
            >
              Tory Burch
            </a>
            <button
              onClick={() => setDrawerOpen(false)}
              aria-label="Close menu"
              className="flex h-8 w-8 items-center justify-center text-brand-black transition-colors hover:text-gold-500"
            >
              <Icon name="close" size={18} />
            </button>
          </div>

          {/* Scrollable nav list */}
          <nav className="flex-1 overflow-y-auto">
            <ul>
              {navItems.map((item) => (
                <DrawerItem
                  key={item.href}
                  item={item}
                  onClose={() => setDrawerOpen(false)}
                />
              ))}
            </ul>
          </nav>

          {/* Drawer footer — utility links */}
          <div className="border-t border-neutral-100 px-6 py-5">
            <Divider className="mb-5" />
            <div className="flex items-center gap-6">
              <button
                onClick={() => { setDrawerOpen(false); onAccountClick?.() }}
                className="flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-neutral-600 transition-colors hover:text-gold-500"
              >
                <Icon name="account" size={16} />
                Account
              </button>
              <button
                onClick={() => { setDrawerOpen(false); onWishlistClick?.() }}
                className="flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-neutral-600 transition-colors hover:text-gold-500"
              >
                <Icon name="wishlist" size={16} />
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }
)

Header.displayName = 'Header'
