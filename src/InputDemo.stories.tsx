import type { Meta, StoryObj } from "@storybook/react-vite"; 
import InputDemo from "./InputDemo";

const meta: Meta<typeof InputDemo> = {
  title: "Components/InputDemo",
  component: InputDemo,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof InputDemo>;

export const Default: Story = {
  args: {
    label: "Username",
    type: "text",
    placeholder: "Enter your username",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
};
