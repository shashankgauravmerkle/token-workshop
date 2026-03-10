import type { Meta, StoryObj } from "@storybook/react";
import { ActionSort } from "@repo/ui/molecules/ActionSort";

const meta: Meta<typeof ActionSort> = {
  title: "Molecules/ActionSort",
  component: ActionSort,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof ActionSort>;

const options = ["Featured", "Price: Low to High", "Price: High to Low", "Newest", "Best Sellers"];

export const Default: Story = { args: { options, selected: "Featured" } };
