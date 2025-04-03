"use client";

import React, { FC, ChangeEventHandler } from "react";

interface ToggleProps {
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Toggle: FC<ToggleProps> = ({ checked, onChange }) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={onChange}
      />
      <div
        className={`
          relative
          w-12 h-6
          bg-gray-200
          rounded-full
          peer-focus:outline-none
          /* Darker gradient when checked */
          peer-checked:bg-gradient-to-r
          peer-checked:from-[#D28CFB]
          peer-checked:via-[#6E47F2]
          peer-checked:to-[#2F1F5F]
          
          /* Knob styles */
          after:content-['']
          after:absolute
          after:top-0
          after:left-0
          after:w-6
          after:h-6
          after:bg-white
          after:border
          after:border-gray-300
          after:rounded-full
          after:transition-transform
          after:duration-200
          
          /* Move knob right when checked */
          peer-checked:after:translate-x-6
        `}
      />
    </label>
  );
};

export default Toggle;
