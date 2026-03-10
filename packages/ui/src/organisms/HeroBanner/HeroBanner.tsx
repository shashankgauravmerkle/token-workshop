import * as React from 'react'
import { cn } from '../../lib/utils'
import { MediaCaption } from '../../molecules/MediaCaption'

export type HeroLayout =
  | 'full-bleed'       // Image fills viewport, text overlaid
  | 'split-left'       // Image right 50%, text left 50%
  | 'split-right'      // Image left 50%, text right 50%
  | 'centered-overlay' // Centred text over full-bleed image

export interface HeroBannerProps extends React.HTMLAttributes<HTMLElement> {
  imageSrc:   string
  imageAlt:   string
  /** Optional video source (loops silently) */
  videoSrc?:  string
  eyebrow?:   string
  title:      string
  subtitle?:  string
  body?:      string
  ctaLabel?:  string
  ctaHref?:   string
  secondaryCtaLabel?: string
  secondaryCtaHref?:  string
  layout?:    HeroLayout
  /** Overlay opacity 0–1 */
  overlayOpacity?: number
  /** Minimum section height */
  minHeight?: string
}

export const HeroBanner = React.forwardRef<HTMLElement, HeroBannerProps>(
  (
    {
      className,
      imageSrc,
      imageAlt,
      videoSrc,
      eyebrow,
      title,
      subtitle,
      body,
      ctaLabel,
      ctaHref,
      secondaryCtaLabel,
      secondaryCtaHref,
      layout = 'centered-overlay',
      overlayOpacity = 0.35,
      minHeight = '100vh',
      ...props
    },
    ref
  ) => {
    const isSplit = layout === 'split-left' || layout === 'split-right'
    const onDark  = layout === 'full-bleed' || layout === 'centered-overlay'
    const textAlign: 'left' | 'center' = isSplit ? 'left' : 'center'

    return (
      <section
        ref={ref}
        className={cn(
          'relative w-full overflow-hidden',
          isSplit ? 'flex' : 'block',
          className
        )}
        style={{ minHeight }}
        {...props}
      >
        {/* ─── Media ──────────────────────────────────────────────────── */}
        <div
          className={cn(
            'relative overflow-hidden',
            isSplit ? 'w-1/2' : 'absolute inset-0',
            layout === 'split-left'  && 'order-2',
            layout === 'split-right' && 'order-1',
          )}
        >
          {videoSrc ? (
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            />
          ) : (
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-full w-full object-cover"
            />
          )}

          {/* Overlay */}
          {!isSplit ? (
            <div
              className="absolute inset-0 bg-brand-black"
              style={{ opacity: overlayOpacity }}
            />
          ) : null}
        </div>

        {/* ─── Text ───────────────────────────────────────────────────── */}
        <div
          className={cn(
            'relative z-10',
            layout === 'full-bleed' || layout === 'centered-overlay'
              ? 'absolute inset-0 flex items-center justify-center px-6'
              : 'flex w-1/2 items-center px-16 py-24',
            isSplit && layout === 'split-left'  && 'order-1 bg-cream-200',
            isSplit && layout === 'split-right' && 'order-2 bg-cream-200',
          )}
        >
          <MediaCaption
            eyebrow={eyebrow}
            title={title}
            subtitle={subtitle}
            body={body}
            ctaLabel={ctaLabel}
            ctaHref={ctaHref}
            secondaryCtaLabel={secondaryCtaLabel}
            secondaryCtaHref={secondaryCtaHref}
            align={textAlign}
            onDark={onDark}
            className="max-w-2xl"
          />
        </div>
      </section>
    )
  }
)

HeroBanner.displayName = 'HeroBanner'
