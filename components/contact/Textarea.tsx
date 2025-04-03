import { TextAreaProps } from "@/types";
export default function TextArea({
    id,
    label,
    placeholder = "",
    required = false,
  }: TextAreaProps) {
    return (
      <div>
        <label htmlFor={id} className="block font-medium text-[#414651] mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <textarea
          id={id}
          name={id}
          required={required}
          placeholder={placeholder}
          rows={4}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                     placeholder:text-[#717680] focus:outline-none focus:ring-1 
                     focus:ring-purple-500 focus:border-purple-500 font-normal mb-6"
        />
      </div>
    );
  }