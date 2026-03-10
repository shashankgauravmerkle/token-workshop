import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from './Divider'

const meta: Meta<typeof Divider> = {
  title: 'Atoms/Divider',
  component: Divider,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Divider>

export const Horizontal: Story = {}
export const Decorative: Story = { args: { decorative: true } }
export const GoldAccent: Story = {
  render: () => <Divider className="border-gold-500" />,
}
