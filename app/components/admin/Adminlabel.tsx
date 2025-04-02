import { Lexend_Deca } from "next/font/google";

const lexendDeca = Lexend_Deca({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export default function AdminLabel() {
  return (
    <span
      className={`${lexendDeca.className} w-[59px] h-[24px] text-[16px] leading-[24px] text-[#181D27]`}
    >
      Admins
    </span>
  );
}
