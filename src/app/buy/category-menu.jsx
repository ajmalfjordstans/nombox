'use client'

import Image from "next/image"

export default function CategoryMenu({ category, setCategory }) {

  return (
    <div className=" mt-[11px] md:mt-0 py-[11px]">
      <div className="grid grid-cols-2 md:grid-cols-4 max-w-[830px] mx-auto text-center gap-[5px] md:gap-0">
        <div
          className={`h-full leading-[136%] flex flex-col items-center p-[11px] md:p-[22px] rounded-[5px] md:rounded-0 hover:cursor-pointer ${category == 'meals' ? "bg-[#7E5CEB] bg-opacity-[0.15] border-[#7E5CEB] border-b-[5px]" : ""}`}
          onClick={() => setCategory('meals')}
        >
          <div className="flex items-center gap-[12px]">
            <Image
              src={'/logo/meals.svg'}
              height={18}
              width={18}
              alt="meals"
            />
            <span className="text-[12px] md:text-[14px] font-[600]  text-[#7E5CEB]">Meal subscription</span>
          </div>
          <span className="text-[10px] md:text-[12px] font-[500] text-[#7E5CEBBF] opacity-[75%] mt-[8px]">Weekly meal plan</span>
        </div>
        <div
          className={`h-full leading-[136%] flex flex-col items-center p-[11px] md:p-[22px] rounded-[5px] md:rounded-0 hover:cursor-pointer ${category == 'live' ? "bg-[#7E5CEB] bg-opacity-[0.15] border-[#7E5CEB] border-b-[5px]" : ""}`}
          onClick={() => setCategory('live')}
        >
          <div className="flex items-center gap-[12px]">
            <Image
              src={'/logo/livekitchen.svg'}
              height={18}
              width={18}
              alt="live kitchen"
            />
            <span className="text-[12px] md:text-[14px] font-[600]  text-[#7E5CEB]">Live Kitchen</span>
          </div>
          <span className="text-[10px] md:text-[12px] font-[500] text-[#7E5CEBBF] opacity-[75%] mt-[8px]">Today’s scheduled dishes</span>
        </div>
        <div
          className={`h-full leading-[136%] flex flex-col items-center p-[11px] md:p-[22px] rounded-[5px] md:rounded-0 hover:cursor-pointer ${category == 'chef' ? "bg-[#7E5CEB] bg-opacity-[0.15] border-[#7E5CEB] border-b-[5px]" : ""}`}
          onClick={() => setCategory('chef')}
        >
          <div className="flex items-center gap-[12px]">
            <Image
              src={'/logo/chefnear.svg'}
              height={18}
              width={18}
              alt="chef"
            />
            <span className="text-[12px] md:text-[14px] font-[600]  text-[#7E5CEB]">Chef’s near you</span>
          </div>
          <span className="text-[10px] md:text-[12px] font-[500] text-[#7E5CEBBF] opacity-[75%] mt-[8px]">Find homecooks in your area</span>
        </div>
        <div
          className={`h-full leading-[136%] flex flex-col items-center p-[11px] md:p-[22px] rounded-[5px] md:rounded-0 hover:cursor-pointer ${category == 'event' ? "bg-[#7E5CEB] bg-opacity-[0.15] border-[#7E5CEB] border-b-[5px]" : ""}`}
          onClick={() => setCategory('event')}
        >
          <div className="flex items-center gap-[12px]">
            <Image
              src={'/logo/events.svg'}
              height={18}
              width={18}
              alt="event"
            />
            <span className="text-[12px] md:text-[14px] font-[600]  text-[#7E5CEB]">Events</span>
          </div>
          <span className="text-[10px] md:text-[12px] font-[500] text-[#7E5CEBBF] opacity-[75%] mt-[8px]">Experiential food event for small groups</span>
        </div>
      </div>
    </div>
  )
}