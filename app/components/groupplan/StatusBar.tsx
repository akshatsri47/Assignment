import { Roboto } from "next/font/google";
import BatteryIcon from "../../../public/battery.svg";
import CombinedShapeIcon from "../../../public/combinedShape.svg";
import WifiIcon from "../../../public/wifi.svg";

const roboto = Roboto({
  weight: "400",          
  subsets: ["latin"],
  display: "swap",        
});

export default function StatusBar() {
  return (
    <div className="w-[375px] h-[28px] flex justify-between items-center pt-2 pr-6 pb-2 pl-6 ">
      <span className={`${roboto.className} text-sm`}>11:27 PM</span>
      <div className="flex space-x-2 items-center">
      <CombinedShapeIcon className="w-4 h-4 fill-current text-blue-500" />
      <WifiIcon className="w-4 h-4 fill-current text-red-500" />
        <BatteryIcon className="w-4 h-4 fill-current text-green-500" />
       
        
      </div>
    </div>
  );
}
