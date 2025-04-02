import { ArrowLeft } from "lucide-react";
import { Lexend_Deca } from "next/font/google";

const lexendDeca = Lexend_Deca({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <div className="w-[375px] h-[64px] border-b border-gray-300 flex justify-between items-center pt-2 pr-6 pb-2 pl-4">
      <div className="flex items-center gap-2">
        <ArrowLeft className="w-5 h-5" />
        <span
          className={`${lexendDeca.className} w-[78px] h-[20px] text-[14px] leading-[20px]`}
        >
          {title}
        </span>
      </div>
    </div>
  );
}
