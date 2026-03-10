import type { Meta, StoryObj } from '@storybook/react'
import { colors } from '@token-workshop/tokens'

const meta: Meta = {
  title: 'Design System / Design Tokens',
  parameters: {
    docs: {
      description: {
        component: 'All design tokens for the Dodie Thayer × Tory Burch collaboration. Reference these values when extending the system.',
      },
    },
  },
}

export default meta
type Story = StoryObj

function Swatch({ name, value }: { name: string; value: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="h-16 w-full border border-neutral-200"
        style={{ backgroundColor: value }}
      />
      <div>
        <p className="font-sans text-xs font-medium text-brand-black">{name}</p>
        <p className="font-mono text-[0.6rem] text-neutral-400 uppercase">{value}</p>
      </div>
    </div>
  )
}

function PaletteSection({ title, swatches }: { title: string; swatches: Record<string, string> }) {
  return (
    <div className="mb-12">
      <h3 className="mb-4 font-sans text-xs font-medium tracking-[0.2em] uppercase text-neutral-500">{title}</h3>
      <div className="grid grid-cols-4 gap-4 sm:grid-cols-6 lg:grid-cols-8">
        {Object.entries(swatches).map(([key, value]) => (
          <Swatch key={key} name={key} value={value} />
        ))}
      </div>
    </div>
  )
}

export const ColourPalette: Story = {
  render: () => (
    <div className="bg-brand-white p-10">
      <h2 className="mb-2 font-serif text-3xl font-light">Colour Palette</h2>
      <p className="mb-10 font-sans text-sm text-neutral-500">Dodie Thayer × Tory Burch botanical palette</p>

      <PaletteSection title="Brand" swatches={{ black: colors.brand.black, white: colors.brand.white, gold: colors.brand.gold }} />
      <PaletteSection title="Cream" swatches={colors.cream as unknown as Record<string, string>} />
      <PaletteSection title="Sage" swatches={colors.sage as unknown as Record<string, string>} />
      <PaletteSection title="Terracotta" swatches={colors.terracotta as unknown as Record<string, string>} />
      <PaletteSection title="Blush" swatches={colors.blush as unknown as Record<string, string>} />
      <PaletteSection title="Neutral" swatches={colors.neutral as unknown as Record<string, string>} />
    </div>
  ),
}

export const TypographyScale: Story = {
  render: () => (
    <div className="bg-cream-200 p-10 space-y-8">
      <h2 className="font-sans text-xs tracking-[0.2em] uppercase text-neutral-500 mb-8">Typography Scale</h2>

      {[
        { label: 'Display Hero — Playfair Display Light',    className: 'font-serif text-7xl font-light tracking-tight', text: 'Dodie Thayer' },
        { label: 'Display Large — Playfair Display Regular', className: 'font-serif text-5xl font-normal tracking-tight', text: 'For Tory Burch' },
        { label: 'Display Medium — Playfair Display Regular',className: 'font-serif text-4xl font-normal', text: 'The Botanical Collection' },
        { label: 'Heading Large',  className: 'font-serif text-3xl', text: 'Hand-Painted Lacquerware' },
        { label: 'Heading Medium', className: 'font-serif text-2xl', text: 'Spring — Summer 2024' },
        { label: 'Luxury Label — Inter Medium 0.25em', className: 'font-sans text-xs font-medium tracking-[0.25em] uppercase', text: 'New Arrivals' },
        { label: 'Body Large — Inter Regular', className: 'font-sans text-lg font-normal leading-relaxed', text: 'Each piece is handmade and unique. Slight variations in colour are the hallmark of authentic craft.' },
        { label: 'Body — Inter Regular',  className: 'font-sans text-base', text: 'Free shipping on orders over $200' },
        { label: 'Caption — Inter Regular wide', className: 'font-sans text-xs tracking-wide', text: 'Photography by Jamie Hawkesworth' },
        { label: 'Price — Inter Medium',  className: 'font-sans text-base font-medium', text: '$285.00' },
      ].map(({ label, className, text }) => (
        <div key={label} className="border-b border-neutral-200 pb-6">
          <p className="mb-2 font-mono text-[0.6rem] text-neutral-400 uppercase">{label}</p>
          <p className={className}>{text}</p>
        </div>
      ))}
    </div>
  ),
}
