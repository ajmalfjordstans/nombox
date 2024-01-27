import Image from "next/image";

export default function Benefits() {
  return (
    <div className="container mx-auto pt-[50px] md:pt-[70px] pb-[80px] px-[5%] xl:px-0 flex flex-col items-center text-primary">
      <span className="text-[18px] md:text-[24px] font-[700] md:pb-[30px]">Nombox benefits</span>
      <span className="text-[14px] md:text-[18px] font-[600] leading-[30px] py-[30px] md:py-[7px] ">Take your HomeCook business to the next level with  powerful business tools.</span>
      <span className="text-[14px] md:text-[16px] font-[400] leading-[30px] text-[#707070]">We’ll take of everything, while you do what love the most - Cooking!</span>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-[50px]">
        <div className="flex h-full items-center">
          <Image src="/images/benefits.svg" alt="" height={520} width={428}/>
        </div>
        <div className="flex flex-col gap-[30px] md:gap-[40px] ">
          <div className="flex flex-col">
            <span className="text-[14px] md:text-[18px] font-[600] leading-[30px] py-[30px] md:py-[7px]">Dedicated Webpage</span>
            <span className="text-[14px] md:text-[16px] font-[400] leading-[30px] text-[#707070] mt-[16px]">Have a professional webpage to showcase & sell your food. Showcase your profile, your story, and of course, your delicious menu and share this unique webpage with your network to drive sales and traffic to your kitchen!
              <span className="text-[#7E5CEB] font-[500] pl-2 hover:cursor-pointer">
                SEE EXAMPLE BY CLICKING HERE.
              </span>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[14px] md:text-[18px] font-[600] leading-[30px] py-[30px] md:py-[7px]">Cooking Scheduler</span>
            <span className="text-[14px] md:text-[16px] font-[400] leading-[30px] text-[#707070] mt-[16px]">Organise your cooking schedule. We take away the impromptu or impulse buying patterns you might be currently facing with your customers. With our cooking scheduler calendar all your orders & your dishes can be planned around your personal schedule.
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[14px] md:text-[18px] font-[600] leading-[30px] py-[30px] md:py-[7px]">Platform effect - More Customers & Customer loyalty</span>
            <span className="text-[14px] md:text-[16px] font-[400] leading-[30px] text-[#707070] mt-[16px]">Customers always want more choices & there is a limit to which your personal network can bring sales. When you are part of a platform where customers have more choices & are constantly looking out to try new Cuisines, a.k.a the ‘Platform’ effect brings more sales & help retaining loyal customers.
            </span>
            <span className="text-[14px] md:text-[16px] font-[400] leading-[30px] text-[#707070] mt-[16px]">Still not convinced?
              <span className="text-[#7E5CEB] font-[500] pl-2 hover:cursor-pointer">
                Read 5 reasons why Joining a platform is better for your homecook business here.
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}