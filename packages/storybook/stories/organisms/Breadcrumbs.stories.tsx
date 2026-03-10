import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs } from "@repo/ui/organisms/Breadcrumbs";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Organisms/Breadcrumbs",
  component: Breadcrumbs,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Men", href: "/men" },
      { label: "Shoes", href: "/men/shoes" },
      { label: "Running Shoes" },
    ],
  },
};
export const Short: Story = {
  args: {
    items: [{ label: "Home", href: "/" }, { label: "Sale" }],
  },
};
