import type { Meta, StoryObj } from "@storybook/react-vite"; 
import MultiSelect from "./MultiSelect";

const meta: Meta<typeof MultiSelect> = {
  title: "Components/MultiSelect",
  component: MultiSelect,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MultiSelect>;

export const Default: Story = {
  args:{
    choices:['Software Design','User Experience','Graphic Design']
  }
};