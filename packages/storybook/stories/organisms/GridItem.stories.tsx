import type { Meta, StoryObj } from "@storybook/react";
import { GridItem } from "@repo/ui/organisms/GridItem";

const meta: Meta<typeof GridItem> = {
  title: "Organisms/GridItem",
  component: GridItem,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof GridItem>;

const images = [
  { src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80", alt: "Watch front" },
  { src: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&q=80", alt: "Watch side" },
];

export const Default: Story = {
  render: () => (
    <div style={{ width: "280px" }}>
      <GridItem images={images} title="Classic Timepiece" price={149.99} />
    </div>
  ),
};
export const WithVariants: Story = {
  render: () => (
    <div style={{ width: "280px" }}>
      <GridItem
        images={images}
        title="Classic Timepiece"
        price={149.99}
        variants={["Silver", "Gold", "Black"]}
        selectedVariant="Silver"
      />
    </div>
  ),
};
