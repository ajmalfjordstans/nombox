"use client"

export default function CardChef({ chef }) {
  return (
    <div className="h-[329px] rounded-[10px] overflow-hidden"
      style={{ boxShadow: '0px 3px 8px -1px rgba(50, 50, 71, 0.05), 0px 0px 1px 0px rgba(12, 26, 75, 0.24)' }}
    >
      <img src={chef?.image} alt="chef" className="w-full h-[87px] object-cover" />
      <div className="w-full flex justify-center">
        <img src={chef?.avatar} alt="" className="h-[50px] w-[50px] rounded-full border-white border-[3px] transform translate-y-[-25px]" />
      </div>
      <div className="flex flex-col items-center gap-[10px] px-[15px]">
        <span className="text-[#2E266F] text-[16px] leading-[22px] font-[600]">{chef?.name}</span>
        <div className="mt-[10px] text-[10px] flex gap-[7px]">
          <div className="bg-[#FFB200] w-[22px] h-[16px] rounded-[3.14px] flex justify-center items-center font-[600] text-white">{chef?.rating}</div>
          <span className="text-[#AEAEAE]">{chef?.reviews} reviews</span>
        </div>
        <div>
          <span>Cuisines</span>
          <div className="flex gap-[9px] mt-2">
            {chef?.cuisines?.map((cuisine, id) => {
              return (
                <button className="bg-[#2E266F] px-[8px] rounded-[4px] text-white" key={id}>{cuisine}</button>
              )
            })}
          </div>
        </div>
        <div className="flex w-full justify-between ">
          <div className="flex items-center gap-[5px]">
            <img src="/logo/Location.svg" alt="" className="h-[14px] w-[14px]" />
            <span className="text-[10px] text-[#707070]">{chef?.distance} mile(s)</span>
          </div>
          <button className="bg-[#7E5CEB] w-[133px] h-[40px] text-white flex justify-center items-center gap-[5px] rounded-[5px]">
            <img src="/logo/dish.svg" alt="" className="" />
            <span className="text-[12px] leading-[20px] font-[600]">View Dishes</span>
          </button>
        </div>
      </div>
    </div>
  )
}