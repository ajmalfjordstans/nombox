"use client"
export default function CardDish() {
  return (
    <div className="h-[275px] w-[292px] rounded-[10px] bg-white overflow-hidden"
      style={{
        boxShadow: '0px 3px 8px -1px rgba(50, 50, 71, 0.05), 0px 0px 1px 0px rgba(12, 26, 75, 0.24)',
      }}
    >
      <div
        className="h-[182px] w-full rounded-[10px] relative overflow-hidden"
        style={{
          backgroundImage: 'url("/images/temp/dish.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-[#7E5CEB] px-[8px] py-[2px] flex justify-center items-center text-[10px] font-[600] text-white rounded-[4px] top-[14px] left-[14px] absolute">Order by 6:00 PM</div>
        <div className="bg-[#2E266F] px-[8px] py-[4px] flex flex-col justify-center  text-[10px] font-[600] text-white rounded-tl-[10px] bottom-[0px] right-[0px] absolute">
          <span className="text-[7px] font-[400]">PICKUP OR DELIVERY</span>
          <span>5:30 PM - 7:00 PM</span>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <img src="/images/temp/profile.png" alt="" className="h-[50px] w-[50px] rounded-full border-white border-[3px] transform translate-y-[-25px] translate-x-[21px]" />
          <div className="transform translate-x-[35px] mt-[10px] text-[10px] flex gap-[7px]">
            <div className="bg-[#FFB200] w-[22px] h-[16px] rounded-[3.14px] flex justify-center items-center font-[600] text-white">4.6</div>
            <span className="text-[#AEAEAE]">23 reviews</span>
          </div>
        </div>
        <div className="pl-[23px] pr-[16px] transform translate-y-[-20px]">
          <span className="text-[14px] text-[#2E266F]">Mexican egg noodles</span>
          <div className="w-full flex justify-between mt-2">
            <span className="text-[16px] font-[600] text-[#7E5CEB]">£15.00</span>
            <div className="bg-[#FF922C] rounded-[4px] px-[8px] py-[4px] hover:cursor-pointer text-[10px] text-white">5 portions available</div>
          </div>
        </div>
      </div>


    </div>
  )
}