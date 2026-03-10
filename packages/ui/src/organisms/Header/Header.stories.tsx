import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './Header'

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Full-width site header with hamburger menu. Click ☰ to open a slide-in drawer with accordion sub-menus, search overlay, and utility icons. Transparent mode activates on hero pages.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {
  args: { bagCount: 2 },
  decorators: [
    (Story) => (
      <div style={{ height: '200px', background: '#F5F0E8' }}>
        <Story />
      </div>
    ),
  ],
}

export const Transparent: Story = {
  args: { transparent: true, bagCount: 0 },
  parameters: { backgrounds: { default: 'dark' } },
  decorators: [
    (Story) => (
      <div style={{ height: '200px', background: '#4A6741' }}>
        <Story />
      </div>
    ),
  ],
}

export const WithBagCount: Story = {
  args: { bagCount: 5 },
  decorators: Default.decorators,
}
