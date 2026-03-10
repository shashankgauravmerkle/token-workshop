import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { HamburgerButton } from "@repo/ui/atoms/HamburgerButton";

const meta: Meta<typeof HamburgerButton> = {
  title: "Atoms/HamburgerButton",
  component: HamburgerButton,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof HamburgerButton>;

export const Closed: Story = { args: { open: false } };
export const Open: Story = { args: { open: true } };
export const Interactive: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return <HamburgerButton open={open} onClick={() => setOpen((o) => !o)} />;
  },
};
