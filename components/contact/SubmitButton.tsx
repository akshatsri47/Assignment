interface SubmitButtonProps {
    label: string;
  }
  
  export default function SubmitButton({ label }: SubmitButtonProps) {
    return (
      <button
        type="submit"
        className="w-full bg-[#8A3FFC] text-white font-medium py-3 rounded-md 
                   shadow-sm hover:bg-[#7B38E3] focus:outline-none 
                   focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 mt-2"
      >
        {label}
      </button>
    );
  }
  