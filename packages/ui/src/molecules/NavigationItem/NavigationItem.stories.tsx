import type { Meta, StoryObj } from '@storybook/react'
import { NavigationItem } from './NavigationItem'

const meta: Meta<typeof NavigationItem> = {
  title: 'Molecules/NavigationItem',
  component: NavigationItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Navigation item with optional mega-menu dropdown. Hover to reveal links and featured imagery.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof NavigationItem>

export const Simple: Story = {
  render: () => (
    <ul className="flex">
      <NavigationItem label="New Arrivals" href="#" />
    </ul>
  ),
}

export const WithMegaMenu: Story = {
  render: () => (
    <ul className="flex bg-brand-white px-8 py-4">
      <NavigationItem
        label="Collections"
        href="#"
        hasDropdown
        groups={[
          {
            title: 'Shop By',
            links: [
              { label: 'New Arrivals', href: '#' },
              { label: 'Dodie Thayer Collaboration', href: '#' },
              { label: 'Best Sellers', href: '#' },
              { label: 'Sale', href: '#' },
            ],
          },
          {
            title: 'Category',
            links: [
              { label: 'Bags', href: '#' },
              { label: 'Shoes', href: '#' },
              { label: 'Ready-to-Wear', href: '#' },
              { label: 'Home', href: '#' },
              { label: 'Accessories', href: '#' },
            ],
          },
        ]}
        featuredImage={{
          src: 'https://via.placeholder.com/200x267/F5F0E8/8B9E7E?text=Dodie',
          alt: 'Dodie Thayer Collection',
          label: 'Shop the Collaboration',
          href: '#',
        }}
      />
    </ul>
  ),
}
