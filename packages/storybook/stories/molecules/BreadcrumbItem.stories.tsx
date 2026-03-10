import type { Meta, StoryObj } from "@storybook/react";
import { BreadcrumbItem } from "@repo/ui/molecules/BreadcrumbItem";

const meta: Meta<typeof BreadcrumbItem> = {
  title: "Molecules/BreadcrumbItem",
  component: BreadcrumbItem,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof BreadcrumbItem>;

export const WithLink: Story = { args: { label: "Home", href: "/", isLast: false } };
export const Last: Story = { args: { label: "Running Shoes", isLast: true } };
export const Chain: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <BreadcrumbItem label="Home" href="/" />
      <BreadcrumbItem label="Men" href="/men" />
      <BreadcrumbItem label="Shoes" href="/men/shoes" />
      <BreadcrumbItem label="Running Shoes" isLast />
    </div>
  ),
};
