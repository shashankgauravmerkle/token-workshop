import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "@repo/ui/atoms/Title";

const meta: Meta<typeof Title> = {
  title: "Atoms/Title",
  component: Title,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: { size: { control: "select", options: ["sm", "md", "lg"] } },
};
export default meta;
type Story = StoryObj<typeof Title>;

export const Small: Story = { args: { size: "sm", children: "Small title text" } };
export const Medium: Story = { args: { size: "md", children: "Medium title text" } };
export const Large: Story = { args: { size: "lg", children: "Large title text" } };
