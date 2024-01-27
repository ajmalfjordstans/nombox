import Image from "next/image";

export default function PaymentFeatures() {
  return (
    <div className="bg-[#F8FBFF]">
      <div className="container mx-auto pt-[60px] pb-[80px] px-[5%] xl:px-0 flex flex-col items-center">
        <span className="text-[18px] md:text-[24px] font-[600] text-primary">Transparent fees, Direct payment</span>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full mt-[40px] md:mt-[67px] gap-[34px]">
          <div className="flex flex-col items-center gap-3 mx-auto w-full max-w-[235px] text-center">
            <Image height={120} width={120} src="/logo/paymentfeatures1.svg" alt="" className="h-[80px] md:h-[120px]" />
            <span className="text-[16px] md:text-[18px] font-[500] leading-[30px] text-primary">Easy direct deposit setup</span>
            <span className="text-[14px] md:text-[16px] leading-[24px] md:leading-[30px] text-[#707070]">Easily connect your bank account to your  cook account, to get direct payments for every dish that you sell. </span>
          </div>
          <div className="flex flex-col items-center gap-3 mx-auto w-full max-w-[235px] text-center">
            <Image height={120} width={120} src="/logo/paymentfeatures2.svg" alt="" className="h-[80px] md:h-[120px]" />
            <span className="text-[16px] md:text-[18px] font-[500] leading-[30px] text-primary">No joining fee or hosting fee </span>
            <span className="text-[14px] md:text-[16px] leading-[24px] md:leading-[30px] text-[#707070]">There is absolutely no fees to join Nombox. In fact, our team will guide you through the onboarding process and help you build your menu, at no charge.</span>
          </div>
          <div className="flex flex-col items-center gap-3 mx-auto w-full max-w-[235px] text-center">
            <Image height={120} width={120} src="/logo/paymentfeatures3.svg" alt="" className="h-[80px] md:h-[120px]" />
            <span className="text-[16px] md:text-[18px] font-[500] leading-[30px] text-primary">We only make money if you make money</span>
            <span className="text-[14px] md:text-[16px] leading-[24px] md:leading-[30px] text-[#707070]">Nombox takes a 15% marketing fee on every transaction, which includes credit card transaction fees.</span>
          </div>
          <div className="flex flex-col items-center gap-3 mx-auto w-full max-w-[235px] text-center">
            <Image height={120} width={120} src="/logo/paymentfeatures4.svg" alt="" className="h-[80px] md:h-[120px]" />
            <span className="text-[16px] md:text-[18px] font-[500] leading-[30px] text-primary">Get paid on every week</span>
            <span className="text-[14px] md:text-[16px] leading-[24px] md:leading-[30px] text-[#707070]">A direct deposit payment is sent your way for every week. </span>
          </div>
        </div>
      </div >
    </div >
  )
}