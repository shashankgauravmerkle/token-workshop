'use client'

import { Text, Button, Divider } from '@token-workshop/ui'

interface ArtistFeatureProps {
  imageSrc:  string
  imageAlt:  string
  name:      string
  role:      string
  quote:     string
  body:      string
  ctaLabel?: string
  ctaHref?:  string
}

/**
 * ArtistFeature — Organism (page-level composition)
 *
 * Full-width portrait section with large quote and artist biography.
 * Uses cream background to contrast with adjacent editorial sections.
 */
export function ArtistFeature({
  imageSrc, imageAlt, name, role, quote, body, ctaLabel, ctaHref
}: ArtistFeatureProps) {
  return (
    <section className="w-full bg-cream-200 py-20">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-16 px-8 lg:grid-cols-2">

        {/* Portrait */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full object-cover object-top"
          />
          {/* Gold frame accent */}
          <div className="absolute inset-4 border border-gold-500/40 pointer-events-none" />
        </div>

        {/* Bio */}
        <div className="flex flex-col gap-6">
          <Text variant="labelLuxury" color="muted">The Artist</Text>
          <Text variant="displayMedium">{name}</Text>
          <Text variant="labelSmall" color="muted">{role}</Text>

          <Divider className="w-12 border-gold-500" />

          {/* Large pull quote */}
          <blockquote className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-terracotta-400">
            <Text variant="headingMedium" as="p" className="font-serif italic font-normal leading-snug">
              &ldquo;{quote}&rdquo;
            </Text>
          </blockquote>

          <Text variant="bodyLarge" color="muted" className="max-w-prose">
            {body}
          </Text>

          {ctaLabel ? (
            <div className="pt-2">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => { if (ctaHref) window.location.href = ctaHref }}
              >
                {ctaLabel}
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
