import Image from "next/image";
import { MoreVertical } from "lucide-react";
import {AdminCardProps} from "../../types/index";


export default function AdminCard({
  id,
  name,
  image,
  access,
  onMoreClick,
}: AdminCardProps) {
  return (
    <div className="flex justify-between items-center w-[343px] h-[80px] py-4 px-3 border border-[#D5D7DA] rounded-lg bg-[#FDFDFD] mb-2">
      <div className="flex gap-4 items-center">
        <Image
          src={image}
          alt={name}
          width={48}
          height={48}
          className="rounded-full object-cover"
        />
        <div className="flex flex-col h-[48px] gap-2">
          <span className="font-primary leading-5 text-sm font-light text-gray-900">
            {name}
          </span>
          <span
            className={`text-xs font-medium font-primary ${
              access === "Full Access"
                ? "text-purple-600 font-medium"
                : "text-gray-700 font-medium"
            }`}
          >
            {access}
          </span>
        </div>
      </div>
      <button onClick={() => onMoreClick(id)} className="p-2">
        <MoreVertical className="w-6 h-6 text-gray-900" />
      </button>
    </div>
  );
}
