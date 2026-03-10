import type { Meta, StoryObj } from '@storybook/react'
import { Tag } from './Tag'

const meta: Meta<typeof Tag> = {
  title: 'Atoms/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Filter/category tag used in product browsing and editorial content labels.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Tag>

export const Default: Story = { args: { children: 'Botanicals' } }
export const WithDismiss: Story = {
  args: { children: 'Sage Green', onDismiss: () => alert('dismissed') },
}
export const AllTags: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 bg-cream-200 p-6">
      {['Botanicals', 'Terracotta', 'Sage', 'Blush', 'New Arrivals', 'Sale'].map((t) => (
        <Tag key={t}>{t}</Tag>
      ))}
    </div>
  ),
}
