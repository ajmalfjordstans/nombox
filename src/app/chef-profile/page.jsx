import { StickyNavbar } from "@/components/header";
import AllDish from "./all-dishes";
import ChefAbout from "./chef-about";
import Location from "./location";
import Todays from "./todays";

export default function ChefProfile() {
  return (
    <>
      <StickyNavbar />
      <div className="bg-[#ECE7FC] w-full">
        <div className="flex justify-end items-center gap-[20px] py-[30px] container mx-auto px-[5%] md:px-0 mb-[30px]">
          <div className="max-w-[200px] w-full h-[48px] bg-[#7E5CEB] text-[white] rounded-[5px] text-[14px] md:text-[16px] font-[700] leading-[24px] flex justify-center items-center">Follow Chef</div>
          <div className="max-w-[200px] w-full h-[48px] bg-[white] text-[#7E5CEB] rounded-[5px] text-[14px] md:text-[16px] font-[700] leading-[24px] flex justify-center items-center border-[1.5px] border-[#7E5CEB]">Message Chef</div>
        </div>
      </div>
      <div
        className="container mx-auto  pb-[80px] px-[5%] md:px-0"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[15px]">
          <ChefAbout />
          <div className="col-span-2 flex flex-col gap-[15px]">
            <Todays />
            <Location />
            <AllDish />
            <div className="flex flex-col h-[205px] rounded-[10px] overflow-hidden justify-evenly pl-[30px] md:pl-[60px]"
              style={{
                backgroundImage: 'url("/images/partyorderbanner.svg")',
                background: 'linear-gradient(90deg, #7D5EE9 43.84%, rgba(126, 92, 235, 0.10) 100%), url("/images/partyorderbanner.svg")',
                backgroundSize: 'cover',
              }}
            >
              <span className="text-[18px] md:text-[28px] font-[700] leading-[150%] tracking-[-0.75px] text-white">We accept party orders!!!</span>
              <button className="bg-white rounded-[10px] border-[1.5px] border-[#7E5CEB] h-[48px] w-[200px] flex justify-center items-center text-[16px] font-[700] leading-[24px] text-[#7E5CEB]">Order Now</button>
            </div>
          </div>
        </div>

      </div>


    </>
  )
}