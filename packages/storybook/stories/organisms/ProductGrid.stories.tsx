import type { Meta, StoryObj } from "@storybook/react";
import { ProductGrid } from "@repo/ui/organisms/ProductGrid";

const meta: Meta<typeof ProductGrid> = {
  title: "Organisms/ProductGrid",
  component: ProductGrid,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof ProductGrid>;

const items = [
  { images: [{ src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80", alt: "p1" }], title: "Classic Watch", price: 149.99 },
  { images: [{ src: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&q=80", alt: "p2" }], title: "Camera Lens", price: 299.0, variants: ["50mm", "85mm"] },
  { images: [{ src: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&q=80", alt: "p3" }], title: "Running Shoes", price: 89.99, variants: ["S", "M", "L"] },
  { images: [{ src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80", alt: "p4" }], title: "Sport Sneakers", price: 119.99 },
];

export const Default: Story = { args: { items } };
export const WithFiltersAndSort: Story = {
  args: {
    items,
    filters: ["All", "Watches", "Cameras", "Shoes"],
    activeFilters: ["All"],
    sortOptions: ["Featured", "Price: Low to High", "Price: High to Low", "Newest"],
    selectedSort: "Featured",
  },
};
