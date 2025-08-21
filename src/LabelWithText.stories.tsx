import type { Meta, StoryObj } from "@storybook/react-vite"; 
import LabelWithText from "./LabelWithText";

const meta: Meta<typeof LabelWithText> = {
  title: "Components/LabelWithText",
  component: LabelWithText,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof LabelWithText>;

export const Default: Story = {
  args:{
    label:"Name",
    text:"Emily Johnson"
  }
};