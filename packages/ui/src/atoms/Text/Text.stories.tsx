import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './Text'

const meta: Meta<typeof Text> = {
  title: 'Atoms/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Polymorphic text atom. Covers the full typographic scale from hero displays to captions. Uses Playfair Display for editorial headings and Inter for body/UI text.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Text>

export const TypographicScale: Story = {
  render: () => (
    <div className="space-y-6 bg-cream-200 p-10">
      <Text variant="displayHero">Dodie Thayer</Text>
      <Text variant="displayLarge">For Tory Burch</Text>
      <Text variant="displayMedium">The Botanical Collection</Text>
      <Text variant="headingLarge">Hand-Painted Lacquerware</Text>
      <Text variant="headingMedium">Spring — Summer 2024</Text>
      <Text variant="headingSmall">Inspired by the Sea</Text>
      <Text variant="labelLuxury">New Arrivals</Text>
      <Text variant="bodyLarge">
        Dodie Thayer's signature lettuce-leaf pottery meets Tory Burch's refined luxury
        aesthetic in a collection of hand-painted pieces rooted in coastal American craft.
      </Text>
      <Text variant="body">
        Each piece is handmade and unique. Slight variations in colour and form are
        the hallmark of authentic hand-crafted artistry.
      </Text>
      <Text variant="bodySmall">Free shipping on orders over $200</Text>
      <Text variant="caption">Photography by Jamie Hawkesworth</Text>
      <Text variant="price">$285.00</Text>
    </div>
  ),
}

export const ColourVariants: Story = {
  render: () => (
    <div className="space-y-3 bg-cream-200 p-8">
      <Text variant="headingMedium" color="default">Warm Black (Default)</Text>
      <Text variant="headingMedium" color="muted">Muted Grey</Text>
      <Text variant="headingMedium" color="gold">Burnished Gold</Text>
      <Text variant="headingMedium" color="sage">Botanical Sage</Text>
      <Text variant="headingMedium" color="terracotta">Terracotta</Text>
      <div className="bg-brand-black p-4">
        <Text variant="headingMedium" color="inverse">Ivory on Black</Text>
      </div>
    </div>
  ),
}
