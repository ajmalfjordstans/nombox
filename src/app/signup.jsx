export default function SignUp() {
  return (
    <div className="bg-white">
      <div className="container mx-auto pt-[60px] pb-[80px] grid grid-cols-1 md:grid-cols-2 px-[5%] xl:px-0">
        <img src="/images/home/signupchef.svg" alt="" className="mx-auto" />
        <div className="text-primary flex flex-col justify-center h-full w-full my-auto mt-[40px] md:mt-0">
          <span className="text-[24px] md:text-[44px] leading-[36px] md:leading-[62px] font-[600] border-l-[5px] md:border-l-[10px] border-[#7E5CEB] pl-[23px] md:pl-[40px]">Sign Up As A<br /> Home Chef</span>
          <span className="pl-[28px] md:pl-[50px] pt-[25px] text-[14px] md:text-[16px] leading-[30px] max-w-[432px]">How does earning money doing what you love sounds?  Signup as a home chef now.</span>
          <button className="bg-[#7E5CEB] w-[133px] h-[48px] text-white flex justify-center items-center gap-[5px] rounded-[5px] ml-[28px] md:ml-[50px] mt-[30px]">
            <span className="text-[12px] leading-[20px] font-[500]">Register as a cook</span>
          </button>
        </div>
      </div>
    </div>
  )
}