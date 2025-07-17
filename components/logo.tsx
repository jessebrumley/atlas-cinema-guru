import { Film } from "lucide-react";
export default function Logo() {
    return (
        <div className="flex mx-3 content-center text-sl text-[#00003c] font-semibold">
            <div className="flex items-center"><Film /></div>
            <div className="flex"><p className="text-2xl ms-2 align-text-top inline">Cinema Guru</p></div>
        </div>
    )
}