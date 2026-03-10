import type { Meta, StoryObj } from '@storybook/react'
import { ProductCard } from './ProductCard'

const PLACEHOLDER = 'https://via.placeholder.com/400x533/F5F0E8/8B9E7E?text=Product'
const PLACEHOLDER_2 = 'https://via.placeholder.com/400x533/E8C4B8/C4714A?text=Hover'

const meta: Meta<typeof ProductCard> = {
  title: 'Molecules/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Core product browsing unit. Features hover image swap, animated quick-add drawer, wishlist toggle, and badge support. Used in all product grids and carousels.',
      },
    },
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof ProductCard>

export const Default: Story = {
  args: {
    imageSrc:  PLACEHOLDER,
    imageAlt:  'Dodie Thayer Ceramic Vase',
    name:      'Dodie Thayer Lettuce Leaf Ceramic Vase',
    category:  'Home',
    price:     '$285.00',
    href:      '#',
  },
  decorators: [(Story) => <div className="w-[280px]"><Story /></div>],
}

export const WithHoverImage: Story = {
  args: {
    ...Default.args,
    hoverImageSrc: PLACEHOLDER_2,
    badge: 'new',
    colourCount: 3,
  },
  decorators: [(Story) => <div className="w-[280px]"><Story /></div>],
}

export const OnSale: Story = {
  args: {
    ...Default.args,
    price: '$199.00',
    originalPrice: '$285.00',
    badge: 'sale',
  },
  decorators: [(Story) => <div className="w-[280px]"><Story /></div>],
}

export const SoldOut: Story = {
  args: {
    ...Default.args,
    soldOut: true,
    badge: 'soldOut',
  },
  decorators: [(Story) => <div className="w-[280px]"><Story /></div>],
}

export const ProductGrid: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-6 bg-cream-200 p-8" style={{ width: 900 }}>
      {[
        { name: 'Lettuce Leaf Ceramic Vase', price: '$285.00', badge: 'new' as const },
        { name: 'Hand-Painted Salad Bowl', price: '$320.00', badge: 'exclusive' as const, colourCount: 2 },
        { name: 'Botanical Ceramic Planter', price: '$199.00', originalPrice: '$265.00', badge: 'sale' as const },
        { name: 'Dodie Thayer Tote', price: '$350.00' },
        { name: 'Garden Party Clutch', price: '$285.00', badge: 'new' as const, colourCount: 4 },
        { name: 'Ceramic Dinner Plate Set', price: '$485.00', soldOut: true, badge: 'soldOut' as const },
      ].map((p, i) => (
        <ProductCard
          key={i}
          imageSrc={PLACEHOLDER}
          hoverImageSrc={PLACEHOLDER_2}
          imageAlt={p.name}
          category="Dodie Thayer"
          href="#"
          {...p}
        />
      ))}
    </div>
  ),
}
