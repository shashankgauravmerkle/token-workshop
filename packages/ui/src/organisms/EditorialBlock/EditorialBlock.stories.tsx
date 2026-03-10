import type { Meta, StoryObj } from '@storybook/react'
import { EditorialBlock } from './EditorialBlock'

const IMG  = 'https://via.placeholder.com/800x1066/8B9E7E/FAFAF7?text=Campaign'
const IMG2 = 'https://via.placeholder.com/300x300/E8C4B8/C4714A?text=Detail'

const meta: Meta<typeof EditorialBlock> = {
  title: 'Organisms/EditorialBlock',
  component: EditorialBlock,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Split editorial section for storytelling. Supports 4 layouts, 4 backgrounds, optional detail inset image, and pull quotes.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof EditorialBlock>

const commonArgs = {
  eyebrow:   'The Story',
  title:     'Hand-Crafted with Care',
  body:      'Dodie Thayer began painting her signature lettuce ware in the early 1970s from her studio in Martinez, California. Each piece is made from earthenware clay, individually hand-sculpted and painted with layers of vibrant green glaze.',
  ctaLabel:  'Read the Story',
  imageSrc:  IMG,
  imageAlt:  'Dodie Thayer in her studio',
}

export const TextRight: Story = {
  args: { ...commonArgs, layout: 'text-right' },
}

export const TextLeft: Story = {
  args: { ...commonArgs, layout: 'text-left', background: 'white' },
}

export const WithDetailImage: Story = {
  args: {
    ...commonArgs,
    detailImageSrc: IMG2,
    detailImageAlt: 'Ceramic detail',
    pullQuote: 'I wanted each piece to feel like it was grown, not made.',
    pullQuoteAuthor: 'Dodie Thayer',
  },
}

export const SageBackground: Story = {
  args: { ...commonArgs, background: 'sage', layout: 'text-left' },
}

export const Stacked: Story = {
  args: { ...commonArgs, layout: 'stacked', background: 'cream' },
}
