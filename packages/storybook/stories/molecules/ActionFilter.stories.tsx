import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ActionFilter } from "@repo/ui/molecules/ActionFilter";

const meta: Meta<typeof ActionFilter> = {
  title: "Molecules/ActionFilter",
  component: ActionFilter,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof ActionFilter>;

const filters = ["All", "Tops", "Bottoms", "Shoes", "Accessories"];

export const Default: Story = { args: { filters, active: [] } };
export const WithActive: Story = { args: { filters, active: ["Tops", "Shoes"] } };
export const Interactive: Story = {
  render: () => {
    const [active, setActive] = useState<string[]>(["All"]);
    const toggle = (f: string) =>
      setActive((prev) => prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]);
    return <ActionFilter filters={filters} active={active} onChange={toggle} />;
  },
};
