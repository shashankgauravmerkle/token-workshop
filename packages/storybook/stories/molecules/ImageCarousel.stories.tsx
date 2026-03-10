import type { Meta, StoryObj } from "@storybook/react";
import { ImageCarousel } from "@repo/ui/molecules/ImageCarousel";

const meta: Meta<typeof ImageCarousel> = {
  title: "Molecules/ImageCarousel",
  component: ImageCarousel,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof ImageCarousel>;

const images = [
  { src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80", alt: "Product 1" },
  { src: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&q=80", alt: "Product 2" },
  { src: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&q=80", alt: "Product 3" },
];

export const SingleImage: Story = {
  render: () => <div style={{ width: "300px" }}><ImageCarousel images={[images[0]!]} /></div>,
};
export const MultipleImages: Story = {
  render: () => <div style={{ width: "300px" }}><ImageCarousel images={images} /></div>,
};
