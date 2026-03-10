import type { Meta, StoryObj } from "@storybook/react";
import { AddToCartCTA } from "@repo/ui/molecules/AddToCartCTA";

const meta: Meta<typeof AddToCartCTA> = {
  title: "Molecules/AddToCartCTA",
  component: AddToCartCTA,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof AddToCartCTA>;

export const Default: Story = { args: {} };
export const Loading: Story = { args: { loading: true } };
export const Disabled: Story = { args: { disabled: true } };
export const CustomLabel: Story = { args: { label: "Buy Now" } };
