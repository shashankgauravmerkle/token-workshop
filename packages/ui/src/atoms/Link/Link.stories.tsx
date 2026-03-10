import type { Meta, StoryObj } from '@storybook/react'
import { Link } from './Link'

const meta: Meta<typeof Link> = {
  title: 'Atoms/Link',
  component: Link,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Link>

export const Default: Story = { args: { children: 'Shop the Collection', href: '#' } }
export const Underline: Story = { args: { variant: 'underline', children: 'View Lookbook', href: '#' } }
export const Nav: Story = { args: { variant: 'nav', children: 'New Arrivals', href: '#' } }
export const Gold: Story = { args: { variant: 'gold', children: 'Learn About the Artist', href: '#' } }

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 bg-cream-200 p-8">
      <Link variant="default" href="#">Default — animated underline</Link>
      <Link variant="underline" href="#">Underline — persistent</Link>
      <Link variant="nav" href="#">Navigation link</Link>
      <Link variant="muted" href="#">Muted secondary link</Link>
      <Link variant="gold" href="#">Gold accent link</Link>
    </div>
  ),
}
