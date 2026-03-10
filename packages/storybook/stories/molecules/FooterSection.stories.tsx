import type { Meta, StoryObj } from "@storybook/react";
import { FooterSection } from "@repo/ui/molecules/FooterSection";

const meta: Meta<typeof FooterSection> = {
  title: "Molecules/FooterSection",
  component: FooterSection,
  parameters: { layout: "centered", backgrounds: { default: "dark" } },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof FooterSection>;

export const Default: Story = {
  args: {
    title: "Shop",
    links: [
      { label: "New Arrivals", href: "/new" },
      { label: "Sale", href: "/sale" },
      { label: "Men", href: "/men" },
      { label: "Women", href: "/women" },
    ],
  },
};
