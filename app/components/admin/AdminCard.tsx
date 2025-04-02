import Image from "next/image";
import { MoreVertical } from "lucide-react";

interface AdminCardProps {
  id: number;
  name: string;
  image: string;
  access: string;
  onMoreClick: () => void;
}

export default function AdminCard({ name, image, access, onMoreClick }: AdminCardProps) {
  return (
    <div className="flex justify-between items-center p-3 border border-gray-200 rounded-lg bg-white">
      <div className="flex gap-3 items-center">
        <Image src={image} alt={name} width={40} height={40} className="rounded-full object-cover" />
        <div className="flex flex-col">
          <span className="font-medium text-sm">{name}</span>
          <span className={`text-xs ${access === "Full Access" ? "text-purple-600" : "text-gray-500"}`}>
            {access}
          </span>
        </div>
      </div>
      <button onClick={onMoreClick}>
        <MoreVertical className="w-5 h-5 text-gray-400" />
      </button>
    </div>
  );
}
