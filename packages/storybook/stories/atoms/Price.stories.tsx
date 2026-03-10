import type { Meta, StoryObj } from "@storybook/react";
import { Price } from "@repo/ui/atoms/Price";

const meta: Meta<typeof Price> = {
  title: "Atoms/Price",
  component: Price,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: { currency: { control: "select", options: ["USD", "EUR", "GBP", "CAD"] } },
};
export default meta;
type Story = StoryObj<typeof Price>;

export const USD: Story = { args: { amount: 49.99, currency: "USD" } };
export const EUR: Story = { args: { amount: 44.99, currency: "EUR" } };
export const GBP: Story = { args: { amount: 39.99, currency: "GBP" } };
export const Large: Story = { args: { amount: 1299.0, currency: "USD" } };
