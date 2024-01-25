import Link from "next/link";

export default function CookHero() {
  return (
    <>
      <div className="container px-8 py-10 mx-auto flex justify-between items-center flex-col md:flex-row min-h-[65vh]">
        <div className="w-full md:max-w-[50%] ">
          <div className="flex flex-col max-w-[520px] gap-3">
            <span className="text-primary text-[30px] md:text-[48px] font-[700] leading-[120%]">Are you a passionate about cooking ?</span>
            <span className="text-[#707070] text-[14px] md:text-[16px] leading-[170%]">Leverage the Nombox benefits for your home cooking business</span>
            <div className="flex justify-between md:items-center flex-col md:flex-row gap-2">
              <button className="bg-[#7E5CEB] w-[133px] h-[48px] text-white flex justify-center items-center gap-[5px] rounded-[5px] ">
                <span className="text-[12px] leading-[20px] font-[500]">Register as a cook</span>
              </button>
              <span className="text-[#707070] text-[14px] md:text-[16px] leading-[170%]">Already have an account?
                <Link
                  href='/cook/login'
                >
                  <span className="text-[7E5CEB] pl-1 hover:cursor-pointer">Login here</span>
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div>
          <img src="/images/cookhero.svg" alt="hero" className="h-[320px]" />
        </div>
      </div>
      <div className="bg-[#F8FBFF]">
        <div className="container mx-auto pt-[60px] pb-[80px] px-[5%] xl:px-0 flex flex-col items-center">
          <span className="text-[18px] md:text-[24px] font-[600] text-primary">Earn money doing what you love </span>
          <div className="grid grid-cols-1 md:grid-cols-3 w-full mt-[40px] md:mt-[67px] gap-[34px]">
            <div className="flex flex-col items-center gap-3 mx-auto w-full max-w-[235px] text-center">
              <img src="/logo/cookwhatyoulove1.svg" alt="" className="h-[80px] md:h-[120px]"/>
              <span className="text-[16px] md:text-[18px] font-[500] leading-[30px] text-primary">Your business, Your rules & prices</span>
              <span className="text-[14px] md:text-[16px] leading-[24px] md:leading-[30px] text-[#707070]">Total flexibility and control over your menu.</span>
            </div>
            <div className="flex flex-col items-center gap-3 mx-auto w-full max-w-[235px] text-center">
              <img src="/logo/cookwhatyoulove2.svg" alt="" className="h-[80px] md:h-[120px]"/>
              <span className="text-[16px] md:text-[18px] font-[500] leading-[30px] text-primary">Set your own schedule</span>
              <span className="text-[14px] md:text-[16px] leading-[24px] md:leading-[30px] text-[#707070]">You choose which days and times your menu is active.</span>
            </div>
            <div className="flex flex-col items-center gap-3 mx-auto w-full max-w-[235px] text-center">
              <img src="/logo/cookwhatyoulove3.svg" alt="" className="h-[80px] md:h-[120px]"/>
              <span className="text-[16px] md:text-[18px] font-[500] leading-[30px] text-primary">Build loyal customers</span>
              <span className="text-[14px] md:text-[16px] leading-[24px] md:leading-[30px] text-[#707070]">Interact with your customers using our App.</span>
            </div>
          </div>
        </div >
      </div >
    </>
  )
}