import type { Meta, StoryObj } from "@storybook/react";
import { AccordionHeader } from "@repo/ui/atoms/AccordionHeader";

const meta: Meta<typeof AccordionHeader> = {
  title: "Atoms/AccordionHeader",
  component: AccordionHeader,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof AccordionHeader>;

export const Collapsed: Story = { args: { children: "What is your return policy?", expanded: false } };
export const Expanded: Story = { args: { children: "What is your return policy?", expanded: true } };
