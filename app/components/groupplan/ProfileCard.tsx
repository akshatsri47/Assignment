
import Image from "next/image"
import ProfileInfo from "./Profileinfo"
import NavSection from "./NavSection"
export default function ProfileCard(){
    return(
        <div className="w-[375px]  h-[627px]mt-[92px] bg-[#6548B6]">
            <ProfileInfo />
            <NavSection />
            



        </div>
    )
}