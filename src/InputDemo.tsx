import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type InputDemoProps = {
  label: string;
  type: string;
  placeholder: string;
  ref:React.RefObject<HTMLInputElement | null>;
};

export default function InputDemo({
  label,
  type,
  placeholder,
  ref
}: InputDemoProps) {
  return (
    <>
      <Label htmlFor="input" className="text-[12px]">
        {label}
      </Label>
      <br />
      <Input
        id="input"
        type={type}
        placeholder={placeholder}
        ref={ref}
        className="placeholder:text-[12px] border-1 border-[#4D5562] py-1 px-2 rounded-lg w-[400px] h-[40px] mb-4"
      ></Input>
      <br />
    </>
  );
}
