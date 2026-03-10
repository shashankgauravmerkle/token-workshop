import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "@repo/ui/organisms/Footer";

const meta: Meta<typeof Footer> = {
  title: "Organisms/Footer",
  component: Footer,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    company: "Acme Inc.",
    about: {
      title: "Acme Store",
      subtitle: "Quality products for everyday life, delivered to your door.",
    },
    sections: [
      {
        title: "Shop",
        links: [
          { label: "New Arrivals", href: "/new" },
          { label: "Sale", href: "/sale" },
          { label: "Men", href: "/men" },
          { label: "Women", href: "/women" },
        ],
      },
      {
        title: "Help",
        links: [
          { label: "FAQ", href: "/faq" },
          { label: "Shipping", href: "/shipping" },
          { label: "Returns", href: "/returns" },
          { label: "Contact Us", href: "/contact" },
        ],
      },
    ],
    privacyLinks: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
};
