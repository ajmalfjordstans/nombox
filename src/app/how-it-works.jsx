export default function HowItWorks() {
  return (
    <div className="container mx-auto pt-[60px] pb-[80px] px-[5%] xl:px-0">
      <span className="text-[#2E266F] text-[18px] md:text-[24px] font-[600]">How it works</span>
      <div className="mt-[60px] grid grid-cols-1 md:grid-cols-5">
        <div className="max-w-[179px] text-center flex flex-col items-center mx-auto">
          <img src="/images/home/howitworks1.svg" alt="" className="h-[211px]" />
          <span className="text-[18px] text-[#2E266F] leading-[30px] font-[600] mt-[32px]">Explore Chefs in your area</span>
        </div>
        <div className="w-full flex justify-end transform ">
          <img src="/logo/dottedarrow1.svg" alt="" className="my-auto transform rotate-90 md:rotate-0 translate-x-14 md:translate-x-0" />
        </div>
        <div className="max-w-[179px] text-center flex flex-col items-center mx-auto">
          <img src="/images/home/howitworks2.svg" alt="" className="h-[211px]" />
          <span className="text-[18px] text-[#2E266F] leading-[30px] font-[600] mt-[32px]">Select meals & pay online</span>
        </div>
        <div className="w-full flex justify-start transform translate-x-[-3.5rem] md:translate-x-0">
          <img src="/logo/dottedarrow2.svg" alt="" className="my-auto transform rotate-90 md:rotate-0 " />
        </div>
        <div className="max-w-[179px] text-center flex flex-col items-center mx-auto">
          <img src="/images/home/howitworks3.svg" alt="" className="h-[211px]" />
          <span className="text-[18px] text-[#2E266F] leading-[30px] font-[600] mt-[32px]">Collect or get deilvered</span>
        </div>
      </div>
    </div>
  )
}