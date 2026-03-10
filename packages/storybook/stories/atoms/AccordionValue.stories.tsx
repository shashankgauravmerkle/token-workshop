import type { Meta, StoryObj } from "@storybook/react";
import { AccordionValue } from "@repo/ui/atoms/AccordionValue";

const meta: Meta<typeof AccordionValue> = {
  title: "Atoms/AccordionValue",
  component: AccordionValue,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof AccordionValue>;

export const Collapsed: Story = {
  args: { expanded: false, children: "We offer 30-day returns on all items in original condition." },
};
export const Expanded: Story = {
  args: { expanded: true, children: "We offer 30-day returns on all items in original condition." },
};
