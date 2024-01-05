import ChefRegisterForm from "./register-form";

export default function RegisterChef() {
  return (
    <div>
      <div className="grid md:grid-cols-2">
        <img src="/images/loginbg.png" alt="" className="h-full w-full object-cover top-0 hidden md:block" />
        <div className="text-[#2E266F] pb-8 px-[5%] md:px-[8%] pt-[1vh] md:pt-[15vh]">
          <div className="w-full flex justify-center ">
            <span className="text-[24px] md:text-[30px] font-[700] text-center">Create your account</span>
          </div>
          <ChefRegisterForm darkTheme={false}/>
          
        </div>
      </div>
    </div>
  )
}