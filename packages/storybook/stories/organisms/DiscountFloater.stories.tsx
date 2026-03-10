import type { Meta, StoryObj } from "@storybook/react";
import { DiscountFloater } from "@repo/ui/organisms/DiscountFloater";

const meta: Meta<typeof DiscountFloater> = {
  title: "Organisms/DiscountFloater",
  component: DiscountFloater,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
  argTypes: { position: { control: "select", options: ["top", "bottom"] } },
};
export default meta;
type Story = StoryObj<typeof DiscountFloater>;

export const Bottom: Story = {
  args: {
    message: "🎉 Use code SAVE20 for 20% off your order!",
    position: "bottom",
    visible: true,
  },
};
export const Top: Story = {
  args: {
    message: "Free shipping on orders over $50. Shop now →",
    href: "/shop",
    position: "top",
    visible: true,
  },
};
export const Dismissible: Story = {
  args: {
    message: "Limited time: Buy 2 get 1 free on all accessories.",
    position: "bottom",
    visible: true,
    onDismiss: () => {},
  },
};
