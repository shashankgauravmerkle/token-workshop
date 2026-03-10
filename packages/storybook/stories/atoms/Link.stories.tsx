import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "@repo/ui/atoms/Link";

const meta: Meta<typeof Link> = {
  title: "Atoms/Link",
  component: Link,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = { args: { href: "#", children: "Internal link" } };
export const External: Story = { args: { href: "https://example.com", children: "External link", external: true } };
