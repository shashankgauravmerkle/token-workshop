import type { Meta, StoryObj } from "@storybook/react";
import { CartButton } from "@repo/ui/atoms/CartButton";

const meta: Meta<typeof CartButton> = {
  title: "Atoms/CartButton",
  component: CartButton,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof CartButton>;

export const Empty: Story = { args: {} };
export const WithItems: Story = { args: { count: 3 } };
export const ManyItems: Story = { args: { count: 12 } };
