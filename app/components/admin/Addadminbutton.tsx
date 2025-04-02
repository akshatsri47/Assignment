import { UserPlus } from "lucide-react";

export default function AddAdminButton() {
  return (
    <button className="flex items-center justify-center w-[343px] h-[44px] border border-purple-500 rounded-md gap-2 bg-white text-purple-600 text-sm font-medium">
      <UserPlus className="w-4 h-4" />
      Add Admin
    </button>
  );
}
