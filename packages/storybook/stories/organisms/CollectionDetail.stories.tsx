import type { Meta, StoryObj } from "@storybook/react";
import { CollectionDetail } from "@repo/ui/organisms/CollectionDetail";

const meta: Meta<typeof CollectionDetail> = {
  title: "Organisms/CollectionDetail",
  component: CollectionDetail,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof CollectionDetail>;

export const Default: Story = {
  args: {
    items: [
      { header: "Material", value: "100% organic cotton, GOTS certified. Soft, breathable, and durable." },
      { header: "Care Instructions", value: "Machine wash cold on gentle cycle. Tumble dry low. Do not bleach." },
      { header: "Shipping", value: "Ships in 1–3 business days. Free standard shipping on orders over $50." },
      { header: "Returns", value: "30-day returns on unworn items with original tags attached." },
    ],
  },
};
