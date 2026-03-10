import type { Meta, StoryObj } from '@storybook/react'
import { SearchBar } from './SearchBar'

const meta: Meta<typeof SearchBar> = {
  title: 'Molecules/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof SearchBar>

export const Default: Story = {
  args: { placeholder: 'Search Tory Burch' },
  decorators: [(Story) => <div className="w-96 bg-brand-white p-8"><Story /></div>],
}
