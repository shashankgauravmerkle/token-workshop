import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "@repo/ui/atoms/Icon";

const meta: Meta<typeof Icon> = {
  title: "Atoms/Icon",
  component: Icon,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: { size: { control: "select", options: ["sm", "md", "lg"] } },
};
export default meta;
type Story = StoryObj<typeof Icon>;

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

export const Small: Story = { render: () => <Icon size="sm" label="heart"><HeartIcon /></Icon> };
export const Medium: Story = { render: () => <Icon size="md" label="heart"><HeartIcon /></Icon> };
export const Large: Story = { render: () => <Icon size="lg" label="heart"><HeartIcon /></Icon> };
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Icon size="sm" label="heart"><HeartIcon /></Icon>
      <Icon size="md" label="heart"><HeartIcon /></Icon>
      <Icon size="lg" label="heart"><HeartIcon /></Icon>
    </div>
  ),
};
