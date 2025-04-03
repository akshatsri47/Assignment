
import Image from "next/image"
import ProfileInfo from "./Profileinfo"
import NavSection from "./NavSection"
export default function ProfileCard(){
    return(
        <div className="  w-full 
     
      
      bg-gradient-to-r 
      from-[#EEAAFD] 
      via-[#8F65F8] 
      to-[#483185]">
            <ProfileInfo />
            <NavSection />
            



        </div>
    )
}