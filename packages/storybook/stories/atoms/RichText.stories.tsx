import type { Meta, StoryObj } from "@storybook/react";
import { RichText } from "@repo/ui/atoms/RichText";

const meta: Meta<typeof RichText> = {
  title: "Atoms/RichText",
  component: RichText,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof RichText>;

export const Default: Story = {
  args: {
    html: "<p>This is a <strong>rich text</strong> block with <em>emphasis</em> and a <a href='#'>link</a>.</p><p>It supports multiple paragraphs.</p>",
  },
};
