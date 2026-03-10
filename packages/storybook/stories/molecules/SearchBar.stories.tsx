import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SearchBar } from "@repo/ui/molecules/SearchBar";

const meta: Meta<typeof SearchBar> = {
  title: "Molecules/SearchBar",
  component: SearchBar,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = { args: { placeholder: "Search products…" } };
export const WithValue: Story = { args: { value: "running shoes", placeholder: "Search products…" } };
export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <div style={{ width: "360px" }}>
        <SearchBar value={value} onChange={setValue} onSubmit={(v) => alert(`Searching: ${v}`)} />
      </div>
    );
  },
};
