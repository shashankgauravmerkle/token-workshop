import type { Meta, StoryObj } from '@storybook/react'
import { HeroBanner } from './HeroBanner'

const HERO_IMG = 'https://via.placeholder.com/1440x900/4A6741/F5F0E8?text=Dodie+Thayer+for+Tory+Burch'

const meta: Meta<typeof HeroBanner> = {
  title: 'Organisms/HeroBanner',
  component: HeroBanner,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Full-width hero section with four layout modes: centered overlay, full bleed, split-left, and split-right. Supports image and video media.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof HeroBanner>

const commonArgs = {
  imageSrc:  HERO_IMG,
  imageAlt:  'Dodie Thayer for Tory Burch — Campaign',
  eyebrow:   'Now Available',
  title:     'Dodie Thayer for Tory Burch',
  subtitle:  'A Botanical Collaboration',
  body:      'Hand-crafted ceramics and accessories inspired by the coastal gardens of East Hampton.',
  ctaLabel:  'Shop the Collection',
  secondaryCtaLabel: 'View Lookbook',
}

export const CenteredOverlay: Story = {
  args: { ...commonArgs, layout: 'centered-overlay', minHeight: '80vh' },
}

export const FullBleed: Story = {
  args: { ...commonArgs, layout: 'full-bleed', minHeight: '80vh', overlayOpacity: 0.45 },
}

export const SplitLeft: Story = {
  args: { ...commonArgs, layout: 'split-left', minHeight: '70vh' },
}

export const SplitRight: Story = {
  args: { ...commonArgs, layout: 'split-right', minHeight: '70vh' },
}
