import LabelWithText from "./LabelWithText";
import { Label } from "./components/ui/label";
import { Button } from "./components/ui/button";
import PageNav from "./PageNav";

type SummaryPageProps = {
  name: string;
  email: string;
  topics: string[];
};

export default function SummaryPage({ name, email, topics }: SummaryPageProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-[#212936] text-[#E5E7EB] p-8 w-[460px] rounded-xl">
        <h1 className="text-[20px] mb-7">Summary</h1>
        <LabelWithText label="Name:" text={name}></LabelWithText>
        <LabelWithText label="Email:" text={email}></LabelWithText>
        <Label className="text-[14px] text-[#A1A1A9] mt-5 block">Topics</Label>
        <ul className="mb-7 pl-5 list-disc">
          {topics.map((topic) => (
            <li>{topic}</li>
          ))}
        </ul>
        <Button
          type="submit"
          className="bg-[#845EEE] text-[12px] py-2 rounded-full px-8 mx-auto block"
        >
          Continue
        </Button>
      </div>
      <PageNav page={3} />
    </div>
  );
}
