import type { Meta, StoryObj } from '@storybook/react'
import { CollectionCarousel } from './CollectionCarousel'
import type { ProductCardProps } from '../../molecules/ProductCard'

const P = 'https://via.placeholder.com/400x533/F5F0E8/8B9E7E?text=+'

const PRODUCTS: ProductCardProps[] = Array.from({ length: 8 }, (_, i) => ({
  imageSrc: P,
  imageAlt: `Product ${i + 1}`,
  name: ['Lettuce Leaf Vase', 'Hand-Painted Bowl', 'Garden Tote', 'Ceramic Planter', 'Woven Clutch', 'Botanical Scarf', 'Enamel Bracelet', 'Embroidered Flat'][i],
  category: ['Home', 'Home', 'Bags', 'Home', 'Bags', 'Ready-to-Wear', 'Accessories', 'Shoes'][i],
  price: `$${[285, 320, 350, 199, 285, 210, 165, 395][i]}.00`,
  badge: i === 0 ? 'new' : i === 2 ? 'exclusive' : undefined,
  href: '#',
}))

const meta: Meta<typeof CollectionCarousel> = {
  title: 'Organisms/CollectionCarousel',
  component: CollectionCarousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Horizontally scrollable product carousel with arrow controls, snapping, and editorial header.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof CollectionCarousel>

export const Default: Story = {
  args: {
    eyebrow:    'The Collection',
    title:      'Shop Dodie Thayer',
    products:   PRODUCTS,
    ctaLabel:   'View All',
    ctaHref:    '#',
    visibleCards: 4,
  },
}

export const ThreeUp: Story = {
  args: { ...Default.args, visibleCards: 3 },
}
