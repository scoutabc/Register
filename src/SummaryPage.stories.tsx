import type { Meta, StoryObj } from "@storybook/react-vite"; 
import SummaryPage from "./SummaryPage";

const meta: Meta<typeof SummaryPage> = {
  title: "Components/SummaryPage",
  component: SummaryPage,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SummaryPage>;

export const Default: Story = {
  args:{
    name:"Emily Johnson",
    email:"emily@emilyjohnsonstl.com",
    topics:["User Experience","Graphic Design"]
  }
};