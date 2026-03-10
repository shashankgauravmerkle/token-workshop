import type { Meta, StoryObj } from "@storybook/react";
import { FooterAbout } from "@repo/ui/molecules/FooterAbout";

const meta: Meta<typeof FooterAbout> = {
  title: "Molecules/FooterAbout",
  component: FooterAbout,
  parameters: { layout: "centered", backgrounds: { default: "dark" } },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof FooterAbout>;

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" width={24} height={24}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export const Default: Story = {
  args: { title: "Acme Store", subtitle: "Quality products for everyday life." },
};
export const WithIcon: Story = {
  args: { icon: <StarIcon />, title: "Acme Store", subtitle: "Quality products for everyday life.", href: "/" },
};
