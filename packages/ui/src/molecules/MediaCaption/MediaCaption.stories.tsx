import type { Meta, StoryObj } from '@storybook/react'
import { MediaCaption } from './MediaCaption'

const meta: Meta<typeof MediaCaption> = {
  title: 'Molecules/MediaCaption',
  component: MediaCaption,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Editorial text block used inside Hero, Editorial, and Carousel sections. Composable with eyebrow labels, serif headlines, body text, and CTA buttons.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof MediaCaption>

export const Default: Story = {
  args: {
    eyebrow:    'Introducing',
    title:      'Dodie Thayer for Tory Burch',
    subtitle:   'Spring — Summer 2024',
    body:       'Discover the collaboration between Tory Burch and ceramic artist Dodie Thayer — a collection rooted in coastal American craft and hand-painted botanical beauty.',
    ctaLabel:   'Shop the Collection',
    secondaryCtaLabel: 'View Lookbook',
    align:      'center',
  },
  decorators: [(Story) => <div className="bg-cream-200 p-16 max-w-2xl mx-auto"><Story /></div>],
}

export const OnDark: Story = {
  args: {
    ...Default.args,
    onDark: true,
    align:  'left',
  },
  parameters: { backgrounds: { default: 'dark' } },
  decorators: [(Story) => <div className="bg-brand-black p-16 max-w-2xl"><Story /></div>],
}

export const LeftAligned: Story = {
  args: {
    ...Default.args,
    align: 'left',
    subtitle: undefined,
    body: undefined,
  },
  decorators: [(Story) => <div className="bg-cream-200 p-16 max-w-2xl"><Story /></div>],
}
