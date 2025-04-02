import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface NavItemProps {
  icon: string;
  label: string;
  href: string;
}

export default function NavItem({ icon, label, href }: NavItemProps) {
  return (
    <Link href={href}>
      <div className="flex items-center justify-between px-2 py-4 hover:bg-gray-100">
        <div className="flex items-center gap-3">
          <Image src={icon} alt={label} width={20} height={20} />
          <span className="text-sm text-gray-900">{label}</span>
        </div>
        <ChevronRight className="w-4 h-4 text-gray-400" />
      </div>
    </Link>
    
  );
}
