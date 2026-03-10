import type { Meta, StoryObj } from "@storybook/react";
import { WishlistButton } from "@repo/ui/atoms/WishlistButton";

const meta: Meta<typeof WishlistButton> = {
  title: "Atoms/WishlistButton",
  component: WishlistButton,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof WishlistButton>;

export const Default: Story = { args: {} };
export const Active: Story = { args: { active: true } };
export const WithCount: Story = { args: { count: 5 } };
export const ActiveWithCount: Story = { args: { active: true, count: 3 } };
