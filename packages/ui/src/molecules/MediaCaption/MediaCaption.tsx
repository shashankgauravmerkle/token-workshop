import * as React from 'react'
import { cn } from '../../lib/utils'
import { Text } from '../../atoms/Text'
import { Button } from '../../atoms/Button'

export interface MediaCaptionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Eyebrow / luxury label above title */
  eyebrow?: string
  title: string
  subtitle?: string
  body?: string
  /** CTA button label */
  ctaLabel?: string
  ctaHref?:  string
  /** Second CTA */
  secondaryCtaLabel?: string
  secondaryCtaHref?:  string
  /** Text alignment */
  align?: 'left' | 'center' | 'right'
  /** Light text — for use on image overlays */
  onDark?: boolean
}

export const MediaCaption = React.forwardRef<HTMLDivElement, MediaCaptionProps>(
  (
    {
      className,
      eyebrow,
      title,
      subtitle,
      body,
      ctaLabel,
      ctaHref,
      secondaryCtaLabel,
      secondaryCtaHref,
      align = 'center',
      onDark = false,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        align === 'right'  && 'items-end text-right',
        align === 'left'   && 'items-start text-left',
        className
      )}
      {...props}
    >
      {eyebrow ? (
        <Text
          variant="labelLuxury"
          color={onDark ? 'inverse' : 'muted'}
        >
          {eyebrow}
        </Text>
      ) : null}

      <Text
        variant="displayMedium"
        color={onDark ? 'inverse' : 'default'}
      >
        {title}
      </Text>

      {subtitle ? (
        <Text
          variant="headingSmall"
          color={onDark ? 'inverse' : 'muted'}
        >
          {subtitle}
        </Text>
      ) : null}

      {body ? (
        <Text
          variant="bodyLarge"
          color={onDark ? 'inverse' : 'muted'}
          className="max-w-prose"
        >
          {body}
        </Text>
      ) : null}

      {(ctaLabel || secondaryCtaLabel) ? (
        <div className={cn(
          'flex flex-wrap gap-3 pt-2',
          align === 'center' && 'justify-center',
          align === 'right'  && 'justify-end',
        )}>
          {ctaLabel ? (
            <Button
              variant={onDark ? 'ivory' : 'primary'}
              size="lg"
              onClick={() => { if (ctaHref) window.location.href = ctaHref }}
            >
              {ctaLabel}
            </Button>
          ) : null}
          {secondaryCtaLabel ? (
            <Button
              variant={onDark ? 'ghost' : 'secondary'}
              size="lg"
              onClick={() => { if (secondaryCtaHref) window.location.href = secondaryCtaHref }}
            >
              {secondaryCtaLabel}
            </Button>
          ) : null}
        </div>
      ) : null}
    </div>
  )
)

MediaCaption.displayName = 'MediaCaption'
