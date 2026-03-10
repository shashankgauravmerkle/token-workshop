import type { Meta, StoryObj } from "@storybook/react";
import { TestimonialImage } from "@repo/ui/atoms/TestimonialImage";

const meta: Meta<typeof TestimonialImage> = {
  title: "Atoms/TestimonialImage",
  component: TestimonialImage,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: { size: { control: "select", options: ["sm", "md", "lg"] } },
};
export default meta;
type Story = StoryObj<typeof TestimonialImage>;

const src = "https://i.pravatar.cc/150";
export const Small: Story = { args: { src, alt: "User avatar", size: "sm" } };
export const Medium: Story = { args: { src, alt: "User avatar", size: "md" } };
export const Large: Story = { args: { src, alt: "User avatar", size: "lg" } };
