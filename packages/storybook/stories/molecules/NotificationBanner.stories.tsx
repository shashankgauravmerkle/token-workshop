import type { Meta, StoryObj } from "@storybook/react";
import { NotificationBanner } from "@repo/ui/molecules/NotificationBanner";

const meta: Meta<typeof NotificationBanner> = {
  title: "Molecules/NotificationBanner",
  component: NotificationBanner,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof NotificationBanner>;

export const Default: Story = {
  args: { message: "Free shipping on all orders over $50!" },
};
export const WithLink: Story = {
  args: { message: "Summer sale — up to 50% off. Shop now →", href: "/sale" },
};
export const Dismissible: Story = {
  args: { message: "Use code WELCOME10 for 10% off your first order.", onDismiss: () => {} },
};
