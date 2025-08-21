import type { Meta, StoryObj } from "@storybook/react-vite"; 
import TopicPage from "./TopicPage";

const meta: Meta<typeof TopicPage> = {
  title: "Components/TopicPage",
  component: TopicPage,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TopicPage>;

export const Default: Story = {
  args:{
  }
};