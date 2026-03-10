import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Core CTA element. Follows Tory Burch editorial aesthetics — all-caps, tracked luxury label typography. Six variants cover every surface context.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'ivory', 'gold', 'link'],
      description: 'Visual style of the button',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'icon'],
    },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: { variant: 'primary', size: 'md', children: 'Shop the Collection' },
}

export const Secondary: Story = {
  args: { variant: 'secondary', size: 'md', children: 'Explore More' },
}

export const Ghost: Story = {
  args: { variant: 'ghost', size: 'md', children: 'Learn More' },
}

export const Ivory: Story = {
  args: { variant: 'ivory', size: 'md', children: 'View Lookbook' },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export const Gold: Story = {
  args: { variant: 'gold', size: 'md', children: 'Add to Bag' },
}

export const Loading: Story = {
  args: { variant: 'primary', size: 'md', children: 'Adding to Bag', loading: true },
}

export const Disabled: Story = {
  args: { variant: 'primary', size: 'md', children: 'Sold Out', disabled: true },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4 bg-cream-200 p-8">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="gold">Gold</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}
