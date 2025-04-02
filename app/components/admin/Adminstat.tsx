import Admin from "../../../../public/user-admin.svg";
import AdminLabel from "./Adminlabel";

export default function Adminstat() {
  return (
    <div className="w-[343px] flex justify-between items-center p-4 bg-white rounded-md">
      <div className="flex flex-col">
        {/* Replace the plain text with the reusable AdminLabel */}
        <AdminLabel />
        {/* Number + Active pill */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-2xl font-bold">4</span>
          <span className="flex items-center justify-center w-[69px] h-[34px] rounded-full border border-[#039855] text-[#039855] bg-white text-sm font-medium">
            Active
          </span>
        </div>
      </div>

      {/* Right side: Big icon (129×129) */}
      <Admin className="w-[129px] h-[129px] text-purple-400" />
    </div>
  );
}
