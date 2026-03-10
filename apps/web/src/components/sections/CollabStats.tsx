'use client'

import { Text, Divider } from '@token-workshop/ui'

interface Stat {
  value: string
  label: string
}

interface CollabStatsProps {
  stats: Stat[]
}

/**
 * CollabStats — Organism (page-level composition)
 *
 * Full-width dark bar with key collaboration statistics.
 * Brand numbers in gold serif numerals.
 */
export function CollabStats({ stats }: CollabStatsProps) {
  return (
    <section className="w-full bg-brand-black py-16">
      <div className="mx-auto max-w-content px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-2 text-center">
              {i > 0 ? null : null /* vertical dividers on desktop */}
              <Text
                variant="displayLarge"
                as="p"
                className="font-serif text-4xl font-light text-gold-500"
              >
                {stat.value}
              </Text>
              <Divider className="w-8 border-gold-500/40" />
              <Text variant="labelLuxury" color="muted" as="p">
                {stat.label}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
