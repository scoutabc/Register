import type { Meta, StoryObj } from "@storybook/react-vite"; 
import MessagePage from "./MessagePage";

const meta: Meta<typeof MessagePage> = {
  title: "Components/MessagePage",
  component: MessagePage,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MessagePage>;

export const Default: Story = {}
