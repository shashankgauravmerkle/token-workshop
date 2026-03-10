import type { Meta, StoryObj } from "@storybook/react";
import { UserButton } from "@repo/ui/atoms/UserButton";

const meta: Meta<typeof UserButton> = {
  title: "Atoms/UserButton",
  component: UserButton,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof UserButton>;

export const Default: Story = { args: {} };
export const WithName: Story = { args: { name: "Jane Doe" } };
export const WithAvatar: Story = {
  args: { avatarSrc: "https://i.pravatar.cc/40", name: "Jane Doe" },
};
