import ChefRegisterForm from "./register/register-form";

export default function GettingStarted() {
  return (
    <div>
      <div className="bg-[#2E266F]">
        <div className="container mx-auto pt-[60px] pb-[80px] px-[5%] xl:px-0 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="mt-[10px] md:mt-[40px]">
              <span className="text-[18px] md:text-[36px] font-[500] leading-[62px] max-w-[380px] w-full">Keen on getting started?</span>
              <div className="mt-[40px] md:mt-[60px] flex flex-col gap-[32px] md:gap-[40px] ">
                <div className="flex items-center">
                  <div className="h-[48px] w-[48px] rounded-full flex justify-center items-center bg-[#7E5CEB]">
                    1
                  </div>
                  <span className="text-[14px] md:text-[16px] leading-[30px] font-[300] pl-3">Sign up by filling in the form</span>
                </div>
                <div className="flex items-center">
                  <div className="h-[48px] w-[48px] rounded-full flex justify-center items-center bg-[#7E5CEB]">
                    2
                  </div>
                  <span className="text-[14px] md:text-[16px] leading-[30px] font-[300] pl-3 w-full max-w-[390px]">A member of our team will contact you to assist with the onboarding process</span>
                </div>
                <div className="flex items-center">
                  <div className="h-[48px] w-[48px] rounded-full flex justify-center items-center bg-[#7E5CEB]">
                    3
                  </div>
                  <span className="text-[14px] md:text-[16px] leading-[30px] font-[300] pl-3">Set-up your account and start cooking!</span>
                </div>
              </div>
            </div>
            <ChefRegisterForm darkTheme={true} />
          </div>
        </div>
      </div>
      <div className="bg-[#7E5CEB]">
        <div className="container mx-auto pt-[30px] md:pt-[60px] pb-[40px] md:pb-[80px] px-[5%] xl:px-0 text-white grid grid-cols-1 md:grid-cols-2">
          <span className="text-[24px] md:text-[36px] font-[500] leading-[36px] md:leading-[60px] w-full max-w-[585px]">want to have a call to explore the nombox partnership?</span>
          <div className="flex flex-col gap-[26px] md:mx-auto mt-[26px] md:mt-0">
            <span className="text-[14px] ">Book a call with our team using the below link.</span>
            <button className="w-[221px] bg-white text-[#7E5CEB] rounded-[5px] py-[14px] font-[500]">Book A Call</button>
          </div>
        </div>
      </div>
    </div>
  )
}