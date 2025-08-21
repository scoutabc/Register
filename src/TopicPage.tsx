import MultiSelect from "./MultiSelect";
import { Button } from "./components/ui/button";
import { useNavigate } from "react-router-dom";
import PageNav from "./PageNav";

type TopicPageProps = {
    topics:string[],
    setTopics:React.Dispatch<React.SetStateAction<string[]>>
}

export default function TopicPage({ topics,setTopics }: TopicPageProps) {
  const navigate = useNavigate()
  function handleSubmit(e:React.FormEvent) {
    e.preventDefault();
    navigate("/summary")
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-[#212936] text-[#E5E7EB] p-8 w-[460px] rounded-xl">
        <h1 className="text-[20px] mb-7">Which topics you are interested in?</h1>
        <form onSubmit={handleSubmit}>
          <MultiSelect
            choices={["Software Design", "User Experience", "Graphic Design"]}
            topics={topics}
            setTopics={setTopics}
          ></MultiSelect>
          <Button
            type="submit"
            className="bg-[#845EEE] text-[12px] py-2 rounded-full px-8 mt-8 mx-auto block"
          >
            Continue
          </Button>
        </form>
      </div>
      <PageNav page={2} />
    </div>
  );
}
