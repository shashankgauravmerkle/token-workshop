import type { Meta, StoryObj } from "@storybook/react";
import { CopyrightNotice } from "@repo/ui/atoms/CopyrightNotice";

const meta: Meta<typeof CopyrightNotice> = {
  title: "Atoms/CopyrightNotice",
  component: CopyrightNotice,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof CopyrightNotice>;

export const Default: Story = { args: { company: "Acme Inc." } };
export const CustomYear: Story = { args: { company: "Acme Inc.", year: 2023 } };
