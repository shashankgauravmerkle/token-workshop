import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "@repo/ui/organisms/Header";

const meta: Meta<typeof Header> = {
  title: "Organisms/Header",
  component: Header,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: { logo: "Acme Store" },
};
export const WithCounts: Story = {
  args: { logo: "Acme Store", cartCount: 3, wishlistCount: 7 },
};
export const Interactive: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    return (
      <Header
        logo="Acme Store"
        menuOpen={open}
        onMenuToggle={() => setOpen((o) => !o)}
        searchValue={search}
        onSearchChange={setSearch}
        cartCount={3}
        wishlistCount={2}
      />
    );
  },
};
