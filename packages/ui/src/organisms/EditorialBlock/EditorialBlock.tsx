import * as React from 'react'
import { cn } from '../../lib/utils'
import { Text } from '../../atoms/Text'
import { Button } from '../../atoms/Button'
import { Divider } from '../../atoms/Divider'

export type EditorialLayout = 'text-left' | 'text-right' | 'text-center' | 'stacked'

export interface EditorialBlockProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?:    string
  title:       string
  body:        string
  ctaLabel?:   string
  ctaHref?:    string
  /** Primary image */
  imageSrc:    string
  imageAlt:    string
  /** Secondary/detail image — shows as inset card */
  detailImageSrc?: string
  detailImageAlt?: string
  layout?:     EditorialLayout
  /** Cream or white background */
  background?: 'cream' | 'white' | 'sage' | 'terracotta'
  /** Pull quote text */
  pullQuote?:  string
  pullQuoteAuthor?: string
}

const bgClass: Record<NonNullable<EditorialBlockProps['background']>, string> = {
  cream:      'bg-cream-200',
  white:      'bg-brand-white',
  sage:       'bg-sage-600 text-brand-white',
  terracotta: 'bg-terracotta-400 text-brand-white',
}

export const EditorialBlock = React.forwardRef<HTMLElement, EditorialBlockProps>(
  (
    {
      className,
      eyebrow,
      title,
      body,
      ctaLabel,
      ctaHref,
      imageSrc,
      imageAlt,
      detailImageSrc,
      detailImageAlt,
      layout = 'text-right',
      background = 'cream',
      pullQuote,
      pullQuoteAuthor,
      ...props
    },
    ref
  ) => {
    const isOnDark = background === 'sage' || background === 'terracotta'
    const isStacked = layout === 'stacked' || layout === 'text-center'

    return (
      <section
        ref={ref}
        className={cn(
          'w-full overflow-hidden',
          bgClass[background],
          className
        )}
        {...props}
      >
        <div
          className={cn(
            'mx-auto max-w-content',
            isStacked
              ? 'flex flex-col'
              : 'grid grid-cols-1 lg:grid-cols-2'
          )}
        >
          {/* ─── Image Side ─────────────────────────────────────────── */}
          <div
            className={cn(
              'relative overflow-hidden',
              isStacked ? 'aspect-[16/9] w-full' : 'aspect-[3/4] lg:aspect-auto',
              layout === 'text-right' && 'order-1',
              layout === 'text-left'  && 'order-2',
            )}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-full w-full object-cover"
            />

            {/* Detail image inset card */}
            {detailImageSrc ? (
              <div className="absolute bottom-6 right-6 w-1/3 border-4 border-brand-white shadow-card">
                <img
                  src={detailImageSrc}
                  alt={detailImageAlt ?? ''}
                  className="aspect-square w-full object-cover"
                />
              </div>
            ) : null}
          </div>

          {/* ─── Text Side ──────────────────────────────────────────── */}
          <div
            className={cn(
              'flex flex-col justify-center',
              isStacked ? 'px-8 py-16 text-center items-center' : 'px-12 py-16 lg:px-20',
              layout === 'text-right' && 'order-2',
              layout === 'text-left'  && 'order-1',
            )}
          >
            {eyebrow ? (
              <Text variant="labelLuxury" color={isOnDark ? 'inverse' : 'muted'} className="mb-4">
                {eyebrow}
              </Text>
            ) : null}

            <Text variant="displayMedium" color={isOnDark ? 'inverse' : 'default'} className="mb-6">
              {title}
            </Text>

            <Divider className={cn('mb-6 w-12', isOnDark ? 'border-brand-white/30' : 'border-gold-500')} />

            <Text variant="bodyLarge" color={isOnDark ? 'inverse' : 'muted'} className="mb-8 max-w-prose">
              {body}
            </Text>

            {pullQuote ? (
              <blockquote className={cn(
                'mb-8 border-l-2 pl-6',
                isOnDark ? 'border-brand-white/40' : 'border-gold-500'
              )}>
                <Text variant="headingSmall" as="p" color={isOnDark ? 'inverse' : 'default'} className="italic">
                  &ldquo;{pullQuote}&rdquo;
                </Text>
                {pullQuoteAuthor ? (
                  <Text variant="caption" color={isOnDark ? 'inverse' : 'muted'} className="mt-2">
                    — {pullQuoteAuthor}
                  </Text>
                ) : null}
              </blockquote>
            ) : null}

            {ctaLabel ? (
              <Button
                variant={isOnDark ? 'ivory' : 'primary'}
                size="lg"
                onClick={() => { if (ctaHref) window.location.href = ctaHref }}
                className="w-fit"
              >
                {ctaLabel}
              </Button>
            ) : null}
          </div>
        </div>
      </section>
    )
  }
)

EditorialBlock.displayName = 'EditorialBlock'
