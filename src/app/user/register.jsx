import {
  Card,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";

export default function RegisterForm({ setLogin }) {
  return (
    <div className="text-primary pb-8 px-[5%] md:px-[8%] pt-[1vh] md:pt-[15vh]">
      <div className="w-full flex justify-center ">
        <span className="text-[24px] md:text-[30px] font-[700] text-center">Create your account</span>
      </div>
      <div className="mt-[10px] md:mt-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">
          <div className="md:mb-4">
            <span className="text-[14px] md:text-[16px] font-[400] text-primary">First Name</span>
            <Input
              size="lg"
              placeholder="John"
              className="!border-t-blue-gray-200 focus:!border-t-[#2E266F]"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <div className="md:mb-4">
            <span className="text-[14px] md:text-[16px] font-[400] text-primary">Last Name</span>
            <Input
              size="lg"
              placeholder="Doe"
              className="!border-t-blue-gray-200 focus:!border-t-[#2E266F]"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <div className="md:mb-4">
            <span className="text-[14px] md:text-[16px] font-[400] text-primary">Email</span>
            <Input
              size="lg"
              placeholder="example@gmail.com"
              className="!border-t-blue-gray-200 focus:!border-t-[#2E266F]"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <div className="md:mb-4">
            <span className="text-[14px] md:text-[16px] font-[400] text-primary">Phone</span>
            <Input
              size="lg"
              placeholder="123-456-7890"
              className="!border-t-blue-gray-200 focus:!border-t-[#2E266F]"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <div className="md:mb-4">
            <span className="text-[14px] md:text-[16px] font-[400] text-primary">Password</span>
            <Input
              size="lg"
              type="password"
              placeholder="********"
              className="!border-t-blue-gray-200 focus:!border-t-[#2E266F]"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <div>
            <span className="text-[14px] md:text-[16px] font-[400] text-primary">Confirm Password</span>
            <Input
              size="lg"
              type="password"
              placeholder="********"
              className="!border-t-blue-gray-200 focus:!border-t-[#2E266F]"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
        </div>
        <div className="flex items-center mt-1">
          <Checkbox
            color="blue"
            // onChange={() => {}}
          />
          <span className="text-[14px] font-[400] pl-1 text-primary">I agree to Nombox’s<span className="text-[#7E5CEB] hover:cursor-pointer pl-1">Terms and services</span> and <span className="text-[#7E5CEB] hover:cursor-pointer">Privacy policy</span></span>
        </div>
        <div className="flex justify-end">
          <Button className="mt-3 bg-[#7E5CEB] md:max-w-[350px]" fullWidth>
            Sign up
          </Button>
        </div>
        <div className="mt-10 w-full flex justify-center">
          <span className="text-[14px] md:text-[16px] font-[400] text-[#707070]">
            Already have an account?
            <span className=" font-[600] text-[#7E5CEB] pl-1 cursor-pointer" onClick={() => setLogin(true)}>
              Login here
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}