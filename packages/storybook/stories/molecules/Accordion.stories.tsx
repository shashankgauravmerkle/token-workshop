import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "@repo/ui/molecules/Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Molecules/Accordion",
  component: Accordion,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Accordion>;

export const Collapsed: Story = {
  args: {
    header: "What is your return policy?",
    children: "We offer 30-day returns on all items in their original condition with tags attached.",
    defaultExpanded: false,
  },
};
export const DefaultExpanded: Story = {
  args: {
    header: "What is your return policy?",
    children: "We offer 30-day returns on all items in their original condition with tags attached.",
    defaultExpanded: true,
  },
};
export const Multiple: Story = {
  render: () => (
    <div style={{ maxWidth: "560px" }}>
      <Accordion header="What is your return policy?">
        We offer 30-day returns on all items in their original condition.
      </Accordion>
      <Accordion header="How long does shipping take?">
        Standard shipping takes 3–5 business days. Express is 1–2 days.
      </Accordion>
      <Accordion header="Do you ship internationally?">
        Yes, we ship to over 50 countries worldwide.
      </Accordion>
    </div>
  ),
};
