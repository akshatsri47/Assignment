import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {AccessLevelDropdownProps} from "../../../types/index";
export default function AccessLevelDropdown({ selected, onSelect }: AccessLevelDropdownProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const handleSelect = (level: string) => {
    onSelect(level);
    setDropdownOpen(false);
  };

  return (
    <div className="flex justify-between items-center relative">
      <span className="text-gray-700 font-primary font-normal">
        Admin Controls
      </span>
      <div
        className="flex items-center space-x-1 px-3 py-2 border rounded-md cursor-pointer"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <span className="font-primary text-sm font-normal text-[#414651]">
          {selected}
        </span>
        <ChevronDown size={16} />
      </div>

      {dropdownOpen && (
        <div className="absolute right-0 top-full mt-1 w-40 bg-white shadow-lg rounded-md border border-gray-300 z-10">
          {["Partial Access", "Full Access"].map((level) => (
            <div
              key={level}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelect(level)}
            >
              {level}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
