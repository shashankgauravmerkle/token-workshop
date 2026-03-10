'use client'

import { Text } from '@token-workshop/ui'

interface MoodImage {
  src:      string
  alt:      string
  caption?: string
}

interface BotanicalMoodBoardProps {
  images: MoodImage[]
}

/**
 * BotanicalMoodBoard — Organism (page-level composition)
 *
 * Masonry-style editorial image grid.
 * First and fourth images span 2 rows for visual rhythm.
 */
export function BotanicalMoodBoard({ images }: BotanicalMoodBoardProps) {
  return (
    <section className="w-full bg-brand-white py-16">
      <div className="mx-auto max-w-content px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <Text variant="labelLuxury" color="muted" as="p" className="mb-3">
            The World of Dodie Thayer
          </Text>
          <Text variant="displayMedium">Inspired by Nature</Text>
        </div>

        {/* Masonry grid */}
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'auto' }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden"
              style={{
                gridRow: i === 0 || i === 3 ? 'span 2' : 'span 1',
                gridColumn: i === 3 ? '3' : undefined,
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-400 ease-editorial group-hover:scale-[1.03]"
              />
              {img.caption ? (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-black/60 to-transparent px-4 pb-4 pt-12 opacity-0 transition-opacity duration-250 group-hover:opacity-100">
                  <Text variant="caption" color="inverse">{img.caption}</Text>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
