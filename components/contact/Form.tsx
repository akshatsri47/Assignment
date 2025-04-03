import {FormFieldProps} from "../../types/index"
export default function FormField({
    id,
    label,
    type = "text",
    placeholder = "",
    required = false,
  }: FormFieldProps) {
    return (
      <div>
        <label htmlFor={id} className="block font-medium font-primary text-[#414651] mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
          type={type}
          id={id}
          name={id}
          required={required}
          placeholder={placeholder}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                     placeholder:text-[#717680] focus:outline-none focus:ring-1 
                     focus:ring-purple-500 focus:border-purple-500 font-medium  font-primary mb-6"
        />
      </div>
    );
  }