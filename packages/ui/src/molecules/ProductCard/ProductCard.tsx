import * as React from 'react'
import { cn } from '../../lib/utils'
import { Badge } from '../../atoms/Badge'
import { Button } from '../../atoms/Button'
import { Text } from '../../atoms/Text'
import { Icon } from '../../atoms/Icon'

export interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Product image URL */
  imageSrc: string
  /** Alt text for the product image */
  imageAlt: string
  /** Hover image (second colourway or detail shot) */
  hoverImageSrc?: string
  /** Product name */
  name: string
  /** Designer / category */
  category?: string
  /** Current selling price */
  price: string
  /** Original price (if on sale) */
  originalPrice?: string
  /** Badge label — e.g. "New", "Sale", "Exclusive" */
  badge?: 'new' | 'sale' | 'exclusive' | 'soldOut'
  /** Available colours */
  colourCount?: number
  /** Is wishlisted */
  wishlisted?: boolean
  /** Wishlist toggle callback */
  onWishlist?: () => void
  /** Add to bag callback */
  onAddToBag?: () => void
  /** Card link href */
  href?: string
  /** Sold-out state */
  soldOut?: boolean
}

export const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  (
    {
      className,
      imageSrc,
      imageAlt,
      hoverImageSrc,
      name,
      category,
      price,
      originalPrice,
      badge,
      colourCount,
      wishlisted = false,
      onWishlist,
      onAddToBag,
      href,
      soldOut = false,
      ...props
    },
    ref
  ) => {
    const [hovered, setHovered] = React.useState(false)
    const Wrapper = href ? 'a' : 'div'

    return (
      <div
        ref={ref}
        className={cn('group relative flex flex-col', className)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        {...props}
      >
        {/* ─── Image Container ─────────────────────────────────────────── */}
        <Wrapper
          href={href}
          className="relative block overflow-hidden bg-cream-100 aspect-[3/4] w-full"
        >
          {/* Main image */}
          <img
            src={imageSrc}
            alt={imageAlt}
            className={cn(
              'absolute inset-0 h-full w-full object-cover transition-all duration-400 ease-editorial',
              hoverImageSrc && hovered ? 'opacity-0' : 'opacity-100'
            )}
          />
          {/* Hover image */}
          {hoverImageSrc ? (
            <img
              src={hoverImageSrc}
              alt={`${imageAlt} — alternate view`}
              className={cn(
                'absolute inset-0 h-full w-full object-cover transition-all duration-400 ease-editorial',
                hovered ? 'opacity-100' : 'opacity-0'
              )}
            />
          ) : null}

          {/* Badge */}
          {badge ? (
            <div className="absolute left-3 top-3">
              <Badge variant={badge}>
                {badge === 'new' ? 'New' : badge === 'sale' ? 'Sale' : badge === 'exclusive' ? 'Exclusive' : 'Sold Out'}
              </Badge>
            </div>
          ) : null}

          {/* Wishlist */}
          <button
            onClick={(e) => { e.preventDefault(); onWishlist?.() }}
            className={cn(
              'absolute right-3 top-3 flex h-8 w-8 items-center justify-center',
              'bg-brand-white/80 backdrop-blur-sm',
              'transition-all duration-250 ease-editorial',
              'opacity-0 group-hover:opacity-100',
              wishlisted && 'opacity-100'
            )}
            aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Icon
              name="wishlist"
              size={16}
              className={wishlisted ? 'text-terracotta-400 fill-terracotta-400' : 'text-brand-black'}
            />
          </button>

          {/* Quick Add to Bag — appears on hover */}
          {!soldOut ? (
            <div
              className={cn(
                'absolute bottom-0 left-0 right-0 p-3',
                'translate-y-full transition-transform duration-250 ease-editorial',
                'group-hover:translate-y-0'
              )}
            >
              <Button
                variant="primary"
                size="sm"
                className="w-full"
                onClick={(e) => { e.preventDefault(); onAddToBag?.() }}
              >
                Quick Add
              </Button>
            </div>
          ) : null}
        </Wrapper>

        {/* ─── Product Info ─────────────────────────────────────────────── */}
        <div className="mt-3 space-y-1 px-0.5">
          {category ? (
            <Text variant="labelSmall" color="muted">{category}</Text>
          ) : null}

          <Wrapper href={href} className="block">
            <Text variant="bodySmall" className="font-medium line-clamp-2">{name}</Text>
          </Wrapper>

          <div className="flex items-baseline gap-2">
            <Text variant="price">{price}</Text>
            {originalPrice ? (
              <Text variant="price" color="muted" className="line-through">{originalPrice}</Text>
            ) : null}
          </div>

          {colourCount && colourCount > 1 ? (
            <Text variant="caption" color="muted">{colourCount} Colours</Text>
          ) : null}

          {soldOut ? (
            <Text variant="caption" color="muted" className="italic">Sold Out</Text>
          ) : null}
        </div>
      </div>
    )
  }
)

ProductCard.displayName = 'ProductCard'
