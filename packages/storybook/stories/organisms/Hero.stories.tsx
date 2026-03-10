import type { Meta, StoryObj } from "@storybook/react";
import { Hero } from "@repo/ui/organisms/Hero";

const meta: Meta<typeof Hero> = {
  title: "Organisms/Hero",
  component: Hero,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    imageSrc: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
    imageAlt: "Fashion store",
    title: "New Summer Collection",
    subtitle: "Discover styles made for the season.",
  },
};
export const WithCTA: Story = {
  args: {
    imageSrc: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
    imageAlt: "Fashion store",
    title: "New Summer Collection",
    subtitle: "Discover styles made for the season.",
    children: (
      <button style={{ background: "#fff", color: "#1a1a2e", border: "none", padding: "12px 28px", borderRadius: "8px", fontWeight: 600, fontSize: "1rem", cursor: "pointer" }}>
        Shop Now
      </button>
    ),
  },
};
