export default function DownloadApp() {
  return (
    <div className="bg-[#F8FBFF]">
      <div className="container mx-auto pt-[60px] pb-[80px] grid grid-cols-1 md:grid-cols-2 px-[5%] xl:px-0">
        <div className="text-primary flex flex-col w-full my-auto">
          <span className="text-[24px] md:text-[44px] leading-[36px] md:leading-[62px] font-[600] border-l-[5px] md:border-l-[10px] border-[#7E5CEB] pl-[23px] md:pl-[40px]">Download App For <br />
            Exciting Deals
          </span>
          <span className="pl-[28px] md:pl-[50px] pt-[25px] text-[14px] md:text-[16px] leading-[30px] max-w-[432px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus auctor eget sed phasellus senectus. Ut tellus donec vestibulum tristique leo bibendum in a, tincidunt. </span>
          <div className="flex flex-col md:flex-row gap-5 pl-[28px] md:pl-[50px] pt-[50px]">
            <img src="/logo/playstore.png" alt="" className="h-[64px] w-[193px] mx-auto md:mx-0" />
            <img src="/logo/appstore.png" alt="" className="h-[64px] w-[193px] mx-auto md:mx-0" />
          </div>
        </div>
        <div className="flex justify-center">
          <img src="/images/home/app.svg" alt="" />
        </div>
      </div>
    </div>
  )
}