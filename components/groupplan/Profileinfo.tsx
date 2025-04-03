import Image from "next/image"


export default function ProfileInfo(){
    return(
        <div className=" p-6  flex flex-row gap-6">
        <div className="relative w-[84px] h-[84px] gap-[4px] rounded-full border border-white/40 p-1.5 
bg-white/24 backdrop-blur-lg ml-3
">
    <Image src="/Image.png" fill alt="image" />
    </div>
    <div className="flex flex-col gap-2 w-[223px]">
  <h2 className="text-md font-medium font-primary text-[#FFFFFF]">AB Med School</h2>
  <p className="text-xs font-normal text-white">university@abgrad.com</p>
  <div className="flex items-center w-[160px] h-[22px] rounded px-2 py-[2px] gap-1 bg-white">
   
    <span className="w-[8px] h-[8px] bg-green-600 rounded-full" />
    
    <span className="text-[10px] text-green-600  font-primary font-normal whitespace-nowrap ">
      Group Comprehensive Plan
    </span>
  </div>
</div>
</div>
    )
}