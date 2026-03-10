import type { Meta, StoryObj } from '@storybook/react'
import { Icon, type IconName } from './Icon'

const allIcons: IconName[] = [
  'search', 'bag', 'wishlist', 'account', 'menu', 'close',
  'chevron-right', 'chevron-left', 'chevron-down', 'chevron-up',
  'arrow-right', 'arrow-left', 'check', 'star', 'star-filled',
  'share', 'filter', 'sort',
]

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'select', options: allIcons },
    size: { control: 'number' },
    strokeWidth: { control: 'number' },
  },
}

export default meta
type Story = StoryObj<typeof Icon>

export const Default: Story = { args: { name: 'bag', size: 24 } }

export const IconGallery: Story = {
  render: () => (
    <div className="grid grid-cols-6 gap-6 bg-cream-200 p-8">
      {allIcons.map((name) => (
        <div key={name} className="flex flex-col items-center gap-2">
          <Icon name={name} size={24} />
          <span className="font-sans text-[0.6rem] tracking-wide text-neutral-500">{name}</span>
        </div>
      ))}
    </div>
  ),
}
