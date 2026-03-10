import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Small status label for product cards. Variants align with Tory Burch editorial colour coding.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const New: Story       = { args: { variant: 'new',       children: 'New' } }
export const Sale: Story      = { args: { variant: 'sale',      children: 'Sale' } }
export const Exclusive: Story = { args: { variant: 'exclusive', children: 'Exclusive' } }
export const SoldOut: Story   = { args: { variant: 'soldOut',   children: 'Sold Out' } }
export const Outline: Story   = { args: { variant: 'outline',   children: 'Limited' } }

export const AllBadges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 bg-cream-200 p-6">
      <Badge variant="new">New</Badge>
      <Badge variant="sale">Sale</Badge>
      <Badge variant="exclusive">Exclusive</Badge>
      <Badge variant="soldOut">Sold Out</Badge>
      <Badge variant="outline">Limited</Badge>
    </div>
  ),
}
