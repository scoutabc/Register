import { Label } from "./components/ui/label"

export default function LabelWithText( { label,text }:{ label:string, text:string } ) {
    return (
        <>
            <Label className="text-[14px] text-[#A1A1A9] mb-2 mr-1">{label}</Label>
            <p className="text-[16px] text-white inline mb-2">{text}</p>
            <br />
        </>
    )
}