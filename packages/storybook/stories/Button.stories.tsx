import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@repo/ui/button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "secondary", "destructive"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    appName: "my-app",
    variant: "default",
    children: "Click me",
  },
};

export const Primary: Story = {
  args: {
    appName: "my-app",
    variant: "primary",
    children: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    appName: "my-app",
    variant: "secondary",
    children: "Secondary",
  },
};

export const Destructive: Story = {
  args: {
    appName: "my-app",
    variant: "destructive",
    children: "Delete",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <Button appName="my-app" variant="default">Default</Button>
      <Button appName="my-app" variant="primary">Primary</Button>
      <Button appName="my-app" variant="secondary">Secondary</Button>
      <Button appName="my-app" variant="destructive">Destructive</Button>
    </div>
  ),
};
