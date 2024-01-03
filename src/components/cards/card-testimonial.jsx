export default function CardTestimonial() {
  return (
    <div className="w-[300px] md:w-[388px] h-[230px] rounded-[10px] px-[30px] py-[20px] flex flex-col justify-between"
      style={{ boxShadow: '0px 3px 8px -1px rgba(50, 50, 71, 0.05), 0px 0px 1px 0px rgba(12, 26, 75, 0.24)' }}
    >
      <div className="w-full flex justify-between">
        <div className="flex gap-[20px]">
          <img src="/images/temp/profile.png" alt="" className="h-[50px] w-[50px]" />
          <div className="flex flex-col">
            <span className="text-[18px] text-[#0B132A] leading-[30px]">Viezh Robert</span>
            <span className="text-[14px] text-[#4F5665] leading-[30px]">Belfast</span>
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          <span className="text-[16px] font-[400] leading-[30px] ">4.5</span>
          <img src="/logo/star-filled.svg" alt="" className="h-[16px] w-[16px]"/>
        </div>
      </div>
      <span className="text-[14px] text-[#0B132A] leading-[28px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
    </div>
  )
}