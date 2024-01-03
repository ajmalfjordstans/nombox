import { AccordionCustomStyles } from "@/components/accordion";

export default function About() {
  return (
    <div className="bg-[#2E266F] px-[5%] xl:px-0"
      style={{
        backgroundImage: 'url("/images/pattern.png")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto', 
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto pt-[60px] pb-[80px] grid grid-cols-1 lg:grid-cols-2">
        <div className="text-white flex flex-col w-full">
          <span className="text-[18px] md:text-[44px] leading-[62px] font-[500] md:border-l-[10px] md:border-[#7E5CEB] md:pl-[40px]">Fresh, Homemade, and Local </span>
          <span className="md:pl-[50px] pt-[10px] md:pt-[50px] text-[16px] leading-[30px]">Nombox is a platform that connects people who love to connect with the community by means of the food they cook. Our dream is to be a place to create Joy through authentic homemade cuisines that bring people together.</span>
        </div>
        <div className="flex flex-col w-full mt-[40px] lg:mt-0">
          <AccordionCustomStyles />
        </div>
      </div>
    </div>
  )
}