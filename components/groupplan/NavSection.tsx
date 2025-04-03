import Link from "next/link";
import { ChevronRight } from "lucide-react";

// SVGs as React Components
import Useradmin from "../../public/user-admin.svg";
import Seats from "../../public/formkit_people.svg";
import User from "../../public/user-add.svg";

import Usage from "../../public/usage.svg";
import Graphbox from "../../public/graph-box.svg";
import Subscription from "../../public/subscription.svg";
import Settings from "../../public/setting.svg";
import Contact from "../../public/Qna.svg";

export default function NavSection() {
  const teamItems = [
    { label: "Admins", icon: <Useradmin className="w-4 h-4" />, href: "/Admin" },
    { label: "Add User", icon: <User className="w-4 h-4" />, href: "/User" },
    { label: "Seats", icon: <Seats className="w-4 h-4" />, href: "/Seats" },
    { label: "Group Statistics", icon: <Graphbox className="w-4 h-4" />, href: "/stats" },
    { label: "Usage", icon: <Usage className="w-4 h-4" />, href: "/usage" },
    { label: "Subscription", icon: <Subscription className="w-4 h-4" />, href: "/subscription" },
  ];

  return (
    <div className="w-full rounded-t-lg p-4 flex flex-col gap-8 bg-white">
      {/* Team Section */}
      <div className="flex flex-col gap-6">
        <h3 className="text-md font-medium font-primary text-gray-900">Team</h3>
        <div className="flex flex-col divide-y divide-gray-200">
          {teamItems.map((item, index) => (
           <Link
           href={item.href}
           key={index}
           className="flex items-center justify-between px-2 py-4 hover:bg-gray-100"
         >
           <div className="flex items-center gap-3">
             {item.icon}
             <span className="text-sm font-normal font-primary text-gray-700">
               {item.label}
             </span>
           </div>
           <ChevronRight className="w-6 h-6 text-gray-900" />
         </Link>
         
          ))}
        </div>
      </div>

      {/* More Section - no map */}
      <div className="flex flex-col gap-6">
  <h3 className="text-base font-medium text-gray-800">More</h3>
  <div className="flex flex-col divide-y divide-gray-200">
    <Link
      href="/settings"
      className="flex items-center justify-between px-2 py-4 hover:bg-gray-100"
    >
      <div className="flex items-center gap-3">
        <Settings className="w-5 h-5" />
        <span className="text-sm font-normal font-primary text-gray-700">
          Settings
        </span>
      </div>
      <ChevronRight className="w-6 h-6 text-gray-900" />
    </Link>

    <Link
      href="/contact"
      className="flex items-center justify-between px-2 py-4 hover:bg-gray-100"
    >
      <div className="flex items-center gap-3">
        <Contact className="w-5 h-5" />
        <span className="text-sm font-normal font-primary text-gray-900">
          Contact Us
        </span>
      </div>
      <ChevronRight className="w-6 h-6 text-gray-900" />
    </Link>
  </div>
</div>

    </div>
  );
}
