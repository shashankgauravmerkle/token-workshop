import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from './Footer'

const meta: Meta<typeof Footer> = {
  title: 'Organisms/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Full-width site footer with newsletter subscription, link grid, social icons, and legal links. Dark editorial treatment.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Footer>

export const Default: Story = {}
