import Image from "next/image"


export default function ProfileInfo(){
    return(
        <div className="w-[375px] h-[136px] p-6  flex flex-row gap-16">
        <div className="relative w-[84px] h-[84px] gap-[10px]">
    <Image src="/Image.png" fill alt="image" />
    </div>
    <div className="flex flex-col gap-1 w-[223px]">
  <h2 className="text-lg font-bold">AB Med School</h2>
  <p className="text-sm font-bold">university@abgrad.com</p>
  <div className="flex items-center w-[160px] h-[22px] rounded px-2 py-[2px] gap-1 bg-white">
   
    <span className="w-[8px] h-[8px] bg-green-500 rounded-full" />
    
    <span className="text-[10px] text-green-800 font-medium">
      Group Comprehensive Plan
    </span>
  </div>
</div>
</div>
    )
}