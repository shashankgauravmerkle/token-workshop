import * as React from 'react'
import { cn } from '../../lib/utils'
import { ProductCard, type ProductCardProps } from '../../molecules/ProductCard'
import { Text } from '../../atoms/Text'
import { Tag } from '../../atoms/Tag'
import { Button } from '../../atoms/Button'
import { Divider } from '../../atoms/Divider'
import { Icon } from '../../atoms/Icon'

export interface ProductGridProps extends React.HTMLAttributes<HTMLDivElement> {
  title?:       string
  subtitle?:    string
  products:     ProductCardProps[]
  /** Number of columns — desktop */
  columns?:     2 | 3 | 4
  /** Active filter tags */
  filters?:     string[]
  onFilterRemove?: (filter: string) => void
  /** "Load more" callback — if provided, button is shown */
  onLoadMore?:  () => void
  loadingMore?: boolean
  /** Total product count */
  totalCount?:  number
  /** Sort/filter controls visible */
  showControls?: boolean
}

const colClass: Record<NonNullable<ProductGridProps['columns']>, string> = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-4',
}

export const ProductGrid = React.forwardRef<HTMLDivElement, ProductGridProps>(
  (
    {
      className,
      title,
      subtitle,
      products,
      columns = 3,
      filters = [],
      onFilterRemove,
      onLoadMore,
      loadingMore = false,
      totalCount,
      showControls = true,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn('mx-auto max-w-content px-6 lg:px-8', className)}
      {...props}
    >
      {/* ─── Header ─────────────────────────────────────────────────── */}
      {(title || subtitle) ? (
        <div className="mb-8 text-center">
          {title   ? <Text variant="displayMedium">{title}</Text>   : null}
          {subtitle? <Text variant="bodyLarge" color="muted" className="mt-2">{subtitle}</Text> : null}
          <Divider decorative className="mt-8" />
        </div>
      ) : null}

      {/* ─── Controls Bar ───────────────────────────────────────────── */}
      {showControls ? (
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((f) => (
              <Tag key={f} onDismiss={() => onFilterRemove?.(f)}>{f}</Tag>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {totalCount !== undefined ? (
              <Text variant="caption" color="muted">{totalCount} items</Text>
            ) : null}
            <button className="flex items-center gap-1.5 font-sans text-xs tracking-wider uppercase hover:text-gold-500 transition-colors">
              <Icon name="filter" size={14} />
              Filter
            </button>
            <button className="flex items-center gap-1.5 font-sans text-xs tracking-wider uppercase hover:text-gold-500 transition-colors">
              <Icon name="sort" size={14} />
              Sort
            </button>
          </div>
        </div>
      ) : null}

      {/* ─── Grid ───────────────────────────────────────────────────── */}
      <div className={cn('grid gap-x-6 gap-y-10', colClass[columns])}>
        {products.map((product, i) => (
          <ProductCard key={product.href ?? i} {...product} />
        ))}
      </div>

      {/* ─── Load More ──────────────────────────────────────────────── */}
      {onLoadMore ? (
        <div className="mt-16 flex justify-center">
          <Button
            variant="secondary"
            size="lg"
            onClick={onLoadMore}
            loading={loadingMore}
          >
            {loadingMore ? 'Loading' : 'Load More'}
          </Button>
        </div>
      ) : null}
    </div>
  )
)

ProductGrid.displayName = 'ProductGrid'
