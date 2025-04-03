import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface HeaderProps {
  title: string;
  backLink?: string; // Optional back link
}

export default function Header({ title, backLink = "/" }: HeaderProps) {
  return (
    <div className="w-full h-[64px] border-b border-gray-300 flex justify-between items-center pt-2 pr-6 pb-2 pl-6">
      <div className="flex items-center gap-2">
        {/* Back button */}
        <Link href={backLink} passHref>
          <ArrowLeft className="w-5 h-5 cursor-pointer hover:text-gray-600 transition" />
        </Link>

        {/* Title */}
        <span className="font-primary font-medium w-[78px] h-[20px] text-[14px] leading-[20px] whitespace-nowrap">
          {title}
        </span>
      </div>
    </div>
  );
}
