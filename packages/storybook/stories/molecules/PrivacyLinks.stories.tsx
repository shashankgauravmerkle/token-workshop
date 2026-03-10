import type { Meta, StoryObj } from "@storybook/react";
import { PrivacyLinks } from "@repo/ui/molecules/PrivacyLinks";

const meta: Meta<typeof PrivacyLinks> = {
  title: "Molecules/PrivacyLinks",
  component: PrivacyLinks,
  parameters: { layout: "centered", backgrounds: { default: "dark" } },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof PrivacyLinks>;

export const Default: Story = {
  args: {
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
};
