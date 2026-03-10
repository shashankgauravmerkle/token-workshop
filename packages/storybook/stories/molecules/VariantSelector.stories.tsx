import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { VariantSelector } from "@repo/ui/molecules/VariantSelector";

const meta: Meta<typeof VariantSelector> = {
  title: "Molecules/VariantSelector",
  component: VariantSelector,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof VariantSelector>;

export const Sizes: Story = {
  args: { label: "Size", variants: ["XS", "S", "M", "L", "XL"], selected: "M" },
};
export const Colors: Story = {
  args: { label: "Color", variants: ["Black", "White", "Navy", "Red"] },
};
export const Interactive: Story = {
  render: () => {
    const [selected, setSelected] = useState("M");
    return (
      <VariantSelector
        label="Size"
        variants={["XS", "S", "M", "L", "XL"]}
        selected={selected}
        onChange={setSelected}
      />
    );
  },
};
