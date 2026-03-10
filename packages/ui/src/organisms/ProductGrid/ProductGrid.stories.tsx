import type { Meta, StoryObj } from '@storybook/react'
import { ProductGrid } from './ProductGrid'
import type { ProductCardProps } from '../../molecules/ProductCard'

const P = 'https://via.placeholder.com/400x533/F5F0E8/8B9E7E?text=+'
const P2 = 'https://via.placeholder.com/400x533/E8C4B8/C4714A?text=+'

const PRODUCTS: ProductCardProps[] = [
  { imageSrc: P, hoverImageSrc: P2, imageAlt: 'Lettuce Leaf Vase', name: 'Dodie Thayer Lettuce Leaf Ceramic Vase', category: 'Home', price: '$285.00', badge: 'new', href: '#' },
  { imageSrc: P, hoverImageSrc: P2, imageAlt: 'Salad Bowl',         name: 'Hand-Painted Salad Bowl Set',            category: 'Home', price: '$320.00', badge: 'exclusive', colourCount: 2, href: '#' },
  { imageSrc: P, hoverImageSrc: P2, imageAlt: 'Ceramic Planter',    name: 'Botanical Ceramic Planter',              category: 'Home', price: '$199.00', originalPrice: '$265.00', badge: 'sale', href: '#' },
  { imageSrc: P, hoverImageSrc: P2, imageAlt: 'Garden Tote',        name: 'Garden Party Canvas Tote',               category: 'Bags', price: '$350.00', href: '#' },
  { imageSrc: P, hoverImageSrc: P2, imageAlt: 'Clutch',             name: 'Dodie Thayer Embroidered Clutch',        category: 'Bags', price: '$285.00', badge: 'new', colourCount: 3, href: '#' },
  { imageSrc: P, hoverImageSrc: P2, imageAlt: 'Dinner Plates',      name: 'Ceramic Dinner Plate Set of 4',          category: 'Home', price: '$485.00', soldOut: true, badge: 'soldOut', href: '#' },
]

const meta: Meta<typeof ProductGrid> = {
  title: 'Organisms/ProductGrid',
  component: ProductGrid,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Responsive product grid with filter tags, sort/filter controls, and paginated load-more. Supports 2, 3, or 4 column layouts.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof ProductGrid>

export const ThreeColumns: Story = {
  args: {
    title:      'Shop the Collaboration',
    subtitle:   'Dodie Thayer for Tory Burch — Spring / Summer 2024',
    products:   PRODUCTS,
    columns:    3,
    totalCount: 24,
    filters:    ['Home', 'New'],
    onLoadMore: () => {},
  },
}

export const FourColumns: Story = {
  args: { products: PRODUCTS, columns: 4, showControls: false },
}

export const TwoColumns: Story = {
  args: { products: PRODUCTS.slice(0, 4), columns: 2, showControls: false },
}
