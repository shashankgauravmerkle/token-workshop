import type { Meta, StoryObj } from "@storybook/react";
import { HeroImage } from "@repo/ui/atoms/HeroImage";

const meta: Meta<typeof HeroImage> = {
  title: "Atoms/HeroImage",
  component: HeroImage,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
    alt: "Store hero image",
  },
};
