import InputDemo from "./InputDemo";
import { useRef } from "react";
import { Button } from "./components/ui/button";
import { useNavigate } from "react-router-dom";
import PageNav from "./PageNav";

type MessagePageProps = {
  setName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
};

export default function MessagePage({ setName, setEmail }: MessagePageProps) {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (nameRef.current) {
      if (nameRef.current.value === "") {
        alert("Please submit after fill your information!");
        return;
      }
      setName(nameRef.current.value);
    }
    if (emailRef.current) {
      if (emailRef.current.value === "") {
        alert("Please submit after fill your information!");
        return;
      }
      setEmail(emailRef.current.value);
    }
    navigate("/topics");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-[#212936] text-[#E5E7EB] p-8 w-[460px] rounded-xl">
        <h1 className="text-[20px] mb-7">Register</h1>
        <form onSubmit={handleSubmit}>
          <InputDemo
            label="Name"
            type="text"
            placeholder="Enter your name"
            ref={nameRef}
          />
          <InputDemo
            label="Email"
            type="email"
            placeholder="Example@gmail.com"
            ref={emailRef}
          />
          <Button
            type="submit"
            className="bg-[#845EEE] text-[12px] py-2 rounded-full px-8 mx-auto block mt-5"
          >
            Continue
          </Button>
        </form>
      </div>
      <PageNav page={1}></PageNav>
    </div>
  );
}
