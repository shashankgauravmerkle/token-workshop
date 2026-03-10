import type { Meta, StoryObj } from "@storybook/react";
import { Testimonial } from "@repo/ui/organisms/Testimonial";

const meta: Meta<typeof Testimonial> = {
  title: "Organisms/Testimonial",
  component: Testimonial,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Testimonial>;

export const Default: Story = {
  args: {
    quote: "This is hands-down the best purchase I've made this year. The quality is outstanding.",
    name: "Sarah Johnson",
    role: "Verified Buyer",
  },
};
export const WithImage: Story = {
  args: {
    imageSrc: "https://i.pravatar.cc/150?img=5",
    imageAlt: "Sarah Johnson",
    quote: "This is hands-down the best purchase I've made this year. The quality is outstanding.",
    name: "Sarah Johnson",
    role: "Verified Buyer",
  },
};
export const Grid: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", maxWidth: "800px" }}>
      <Testimonial imageSrc="https://i.pravatar.cc/150?img=5" quote="Absolutely love it!" name="Sarah J." role="Customer" />
      <Testimonial imageSrc="https://i.pravatar.cc/150?img=8" quote="Fast shipping, great quality." name="Mark T." role="Customer" />
    </div>
  ),
};
