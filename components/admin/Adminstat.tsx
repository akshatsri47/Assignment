import Admin from "../../public/icon-users.svg";
import AdminLabel from "./Adminlabel";

export default function Adminstat() {
  return (
    <div className="w-full flex justify-between items-center p-4 bg-[#FCFAFF] rounded-md mb-6 ">
      <div className="flex flex-col gap-1">
      
        <AdminLabel />
     
        <div className="flex  flex- row items-center gap-2 mt-1 text-center ">
          <span className="text-4xl  font-primary font-medium ">4</span>
          <span className="flex items-center justify-center w-[69px] h-[34px] rounded-full border border-[#039855] text-[#039855] bg-white text-sm font-primary font-medium">
            Active
          </span>
        </div>
      </div>

     
      <Admin className="w-[129px] h-[129px] text-purple-400" />
    </div>
  );
}
