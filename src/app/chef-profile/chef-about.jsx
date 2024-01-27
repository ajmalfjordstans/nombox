import Image from "next/image";

export default function ChefAbout() {
  return (

    <div className="flex flex-col">
      <div className="p-[27px] md:p-[36px] bg-white rounded-[8px] shadow-custom transform translate-y-[-50px]">
        <div>
          <div className="grid grid-cols-3">
            <Image src='/images/temp/profile.png' height={96} width={96} alt="" className=" h-[78px] md:h-[96px] w-[78px] md:w-[96px] rounded-full border-white border-[3px]" />
            <div className="col-span-2 h-full flex flex-col justify-center">
              <span className="text-primary text-[16px] leading-[22px] font-[600]">Mathew Willa</span>
              <div className="my-2 flex gap-1">
                {Array(5).fill().map((_, index) => (
                  <Image
                    key={index}
                    height={14}
                    width={14}
                    src="/logo/star-filled.svg"
                    alt={`star-${index + 1}`}
                  />
                ))}
              </div>
              <div className="mt-[10px] text-[14px] flex gap-[7px]">
                <div className="bg-[#FFB200] w-[36px] h-[24px] rounded-[3.14px] flex justify-center items-center font-[700] text-white">4.8</div>
                <span className="text-[#AEAEAE] font-[500]">23 reviews</span>
              </div>
            </div>
          </div>
          <div className="w-[full] h-[1px] bg-[#E6E6E6] my-[30px]"></div>
          <span>Cuisines</span>
          <div className="flex flex-wrap gap-[9px] mt-2">
            {/* {chef?.cuisines?.map((cuisine, id) => {
            return (
              <button className="bg-[#2E266F] px-[8px] rounded-[4px] text-white" key={id}>{cuisine}</button>
              )
            })} */}
            <button className="bg-[#2E266F] px-[8px] rounded-[4px] text-white">American</button>
            <button className="bg-[#2E266F] px-[8px] rounded-[4px] text-white">Indian</button>
            <button className="bg-[#2E266F] px-[8px] rounded-[4px] text-white">African</button>
          </div>
          <div className="text-[#707070] flex flex-col mt-[30px]">
            <span className="text-[13px] font-[500] ">About</span>
            <span className="text-[13px] font-[400] leading-[160%] text-justify mt-[17px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
          </div>
        </div>
      </div>
      <div className="p-[27px] md:p-[36px] bg-white rounded-[8px] shadow-custom">
        <span className="text-primary text-[18px] font-[600] leading-[22px]">Hygiene rating</span>
        <Image
          height={164}
          width={351}
          alt="hygiene"
          src="/images/temp/foodhygiene.png"
          className="mt-[16px]"
        />
      </div>
    </div>
  )
}