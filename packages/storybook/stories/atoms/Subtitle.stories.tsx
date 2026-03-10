import type { Meta, StoryObj } from "@storybook/react";
import { Subtitle } from "@repo/ui/atoms/Subtitle";

const meta: Meta<typeof Subtitle> = {
  title: "Atoms/Subtitle",
  component: Subtitle,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Subtitle>;

export const Default: Story = {
  args: { children: "This is a subtitle — secondary descriptive text beneath a title." },
};
