export default function Footer() {
  return (
    <div className="bg-[#2E266F]">
      <div className="container-xl px-[5%] md:px-[131px] mx-auto min-h-[526px] pt-[60px] pb-[70px] text-white flex flex-col justify-between items-start">
        <div>
          <img src="/logo/logo-white.svg" alt="" className="h-[58px]" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px] text-[14px] leading-[180%] tracking-[0.14px]  mt-[46px]">
            <span>
              Nombox is a Belfast based startup working on bringing people together over their love of food. We are marketplace connecting home based cook’s with customers who are looking for home-cooked meals. We work with  licensed/registered home chefs  who hold a hygiene certificate Level 2 & above.
            </span>
            <div className="flex gap-[30px] w-full justify-evenly">
              <div className="flex flex-col gap-3">
                <span className="hover:cursor-pointer">About us</span>
                <span className="hover:cursor-pointer">Blog</span>
                <span className="hover:cursor-pointer">Careers</span>
                <span className="hover:cursor-pointer">Press</span>
              </div>
              <div className="flex flex-col gap-3">
                <span className="hover:cursor-pointer">Get help</span>
                <span className="hover:cursor-pointer">Contact</span>
                <span className="hover:cursor-pointer">FAQ</span>
              </div>
              <div className="flex flex-col gap-3">
                <span className="hover:cursor-pointer">Legal terms</span>
                <span className="hover:cursor-pointer">Privacy Policy</span>
                <span className="hover:cursor-pointer">Cookie policy</span>
                <span className="hover:cursor-pointer">Terms of service</span>
              </div>
            </div>
            <div>
              <span className="text-[16px] font-[600] pb-[18px]">Social Media</span>
              <div className="flex gap-5 mt-[25px]">
                <img src="/logo/facebook.svg" alt="" className="h-[45px] hover:cursor-pointer"/>
                <img src="/logo/twitter.svg" alt="" className="h-[45px] hover:cursor-pointer"/>
                <img src="/logo/instagram.svg" alt="" className="h-[45px] hover:cursor-pointer"/>
                <img src="/logo/linkedin.svg" alt="" className="h-[45px] hover:cursor-pointer"/>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center mt-10">
          <span>© Nombox 2020. All rights reserved.</span>
        </div>
      </div>
    </div>
  )
}