import * as React from 'react'
import { cn } from '../../lib/utils'
import { Text } from '../../atoms/Text'
import { Button } from '../../atoms/Button'
import { Icon } from '../../atoms/Icon'
import { Divider } from '../../atoms/Divider'
import { ProductCard, type ProductCardProps } from '../../molecules/ProductCard'

export interface CollectionCarouselProps extends React.HTMLAttributes<HTMLElement> {
  title?:       string
  eyebrow?:     string
  products:     ProductCardProps[]
  ctaLabel?:    string
  ctaHref?:     string
  /** How many cards visible at once on desktop */
  visibleCards?: 2 | 3 | 4
}

export const CollectionCarousel = React.forwardRef<HTMLElement, CollectionCarouselProps>(
  (
    {
      className,
      title,
      eyebrow,
      products,
      ctaLabel,
      ctaHref,
      visibleCards = 4,
      ...props
    },
    ref
  ) => {
    const scrollRef = React.useRef<HTMLDivElement>(null)
    const [canScrollLeft,  setCanScrollLeft]  = React.useState(false)
    const [canScrollRight, setCanScrollRight] = React.useState(true)

    const updateScrollState = () => {
      const el = scrollRef.current
      if (!el) return
      setCanScrollLeft(el.scrollLeft > 0)
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
    }

    const scroll = (dir: 'left' | 'right') => {
      const el = scrollRef.current
      if (!el) return
      const amount = el.clientWidth * 0.75
      el.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' })
    }

    const cardWidth: Record<NonNullable<CollectionCarouselProps['visibleCards']>, string> = {
      2: 'w-[calc(50%-12px)]',
      3: 'w-[calc(33.333%-16px)]',
      4: 'w-[calc(25%-18px)]',
    }

    return (
      <section
        ref={ref}
        className={cn('w-full bg-cream-200 py-16', className)}
        {...props}
      >
        <div className="mx-auto max-w-content px-6 lg:px-8">
          {/* ─── Header ───────────────────────────────────────────────── */}
          {(title || eyebrow) ? (
            <div className="mb-8 flex items-end justify-between">
              <div>
                {eyebrow ? (
                  <Text variant="labelLuxury" color="muted" className="mb-2">{eyebrow}</Text>
                ) : null}
                {title ? (
                  <Text variant="headingLarge">{title}</Text>
                ) : null}
              </div>
              {ctaLabel ? (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => { if (ctaHref) window.location.href = ctaHref }}
                  className="hidden lg:flex"
                >
                  {ctaLabel}
                  <Icon name="arrow-right" size={14} />
                </Button>
              ) : null}
            </div>
          ) : null}

          <Divider className="mb-8" />

          {/* ─── Scroll Container ─────────────────────────────────────── */}
          <div className="relative">
            {/* Left arrow */}
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={cn(
                'absolute -left-4 top-1/2 z-10 -translate-y-1/2',
                'flex h-10 w-10 items-center justify-center',
                'bg-brand-white shadow-card border border-neutral-100',
                'transition-all duration-250 hover:border-brand-black',
                !canScrollLeft && 'pointer-events-none opacity-30'
              )}
              aria-label="Scroll left"
            >
              <Icon name="chevron-left" size={18} />
            </button>

            {/* Scrollable row */}
            <div
              ref={scrollRef}
              onScroll={updateScrollState}
              className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {products.map((product, i) => (
                <div
                  key={product.href ?? i}
                  className={cn(
                    'shrink-0 snap-start',
                    'w-[calc(50%-8px)] sm:w-[calc(33.333%-16px)]',
                    `lg:${cardWidth[visibleCards]}`
                  )}
                >
                  <ProductCard {...product} />
                </div>
              ))}
            </div>

            {/* Right arrow */}
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={cn(
                'absolute -right-4 top-1/2 z-10 -translate-y-1/2',
                'flex h-10 w-10 items-center justify-center',
                'bg-brand-white shadow-card border border-neutral-100',
                'transition-all duration-250 hover:border-brand-black',
                !canScrollRight && 'pointer-events-none opacity-30'
              )}
              aria-label="Scroll right"
            >
              <Icon name="chevron-right" size={18} />
            </button>
          </div>

          {/* Mobile CTA */}
          {ctaLabel ? (
            <div className="mt-8 flex justify-center lg:hidden">
              <Button variant="secondary" size="lg">
                {ctaLabel}
              </Button>
            </div>
          ) : null}
        </div>
      </section>
    )
  }
)

CollectionCarousel.displayName = 'CollectionCarousel'
