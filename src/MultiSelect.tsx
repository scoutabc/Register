import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "./components/ui/toggle-group";

type MultiSelectProps = {
  choices: string[];
  topics: string[];
  setTopics: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function MultiSelect({
  choices,
  topics,
  setTopics,
}: MultiSelectProps) {
  const [selected, setSelected] = useState<string[]>([]);
  const handleClick = (choice: string) => {
    setSelected((prev) =>
      prev.includes(choice)
        ? prev.filter((c) => c !== choice)
        : [...prev, choice],
    );
    setTopics([...topics, choice]);
  };

  return (
    <ToggleGroup type="multiple">
      {choices.map((choice) => (
        <ToggleGroupItem
          value={choice}
          id={choice}
          onClick={() => handleClick(choice)}
          className={`block text-[14px] w-[400px] rounded-lg text-left px-3 py-3 mb-3
          ${
            selected.includes(choice)
              ? "bg-[#5425AF] border border-[#4D5562]"
              : "bg-[#4D5562]" 
          }`}
        >
          {choice}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
