import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const textVariants = cva('', {
  variants: {
    variant: {
      /** Large editorial headline — Playfair Display, light */
      displayHero:   'font-serif text-7xl font-light tracking-tight leading-tight',
      /** Section headline — Playfair Display, regular */
      displayLarge:  'font-serif text-5xl font-normal tracking-tight leading-tight',
      displayMedium: 'font-serif text-4xl font-normal leading-snug',
      headingLarge:  'font-serif text-3xl font-normal leading-snug',
      headingMedium: 'font-serif text-2xl font-normal leading-snug',
      headingSmall:  'font-sans text-xl font-medium leading-normal',
      /** All-caps tracked luxury label */
      labelLuxury:   'font-sans text-xs font-medium tracking-luxury uppercase',
      labelSmall:    'font-sans text-xs font-medium tracking-wider uppercase',
      bodyLarge:     'font-sans text-lg font-normal leading-relaxed',
      body:          'font-sans text-base font-normal leading-normal',
      bodySmall:     'font-sans text-sm font-normal leading-normal',
      caption:       'font-sans text-xs font-normal tracking-wide',
      price:         'font-sans text-base font-medium',
      priceLarge:    'font-sans text-lg font-medium',
    },
    color: {
      default:     'text-brand-black',
      muted:       'text-neutral-500',
      subtle:      'text-neutral-400',
      inverse:     'text-brand-white',
      gold:        'text-gold-500',
      sage:        'text-sage-600',
      terracotta:  'text-terracotta-400',
    },
    align: {
      left:   'text-left',
      center: 'text-center',
      right:  'text-right',
    },
    truncate: {
      true:  'truncate',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'body',
    color:   'default',
    align:   'left',
  },
})

type TextElement =
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  | 'p' | 'span' | 'div' | 'label' | 'figcaption' | 'strong' | 'em'

const variantElementMap: Record<NonNullable<VariantProps<typeof textVariants>['variant']>, TextElement> = {
  displayHero:   'h1',
  displayLarge:  'h2',
  displayMedium: 'h2',
  headingLarge:  'h2',
  headingMedium: 'h3',
  headingSmall:  'h4',
  labelLuxury:   'span',
  labelSmall:    'span',
  bodyLarge:     'p',
  body:          'p',
  bodySmall:     'p',
  caption:       'figcaption',
  price:         'span',
  priceLarge:    'span',
}

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
    VariantProps<typeof textVariants> {
  as?: TextElement
}

export const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ className, variant = 'body', color, align, truncate, as, children, ...props }, ref) => {
    const Tag = (as ?? variantElementMap[variant!] ?? 'p') as React.ElementType
    return (
      <Tag
        ref={ref}
        className={cn(textVariants({ variant, color, align, truncate }), className)}
        {...props}
      >
        {children}
      </Tag>
    )
  }
)

Text.displayName = 'Text'
