'use client'

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export default function LoginForm({ setLogin }) {
  return (
    <div className="flex flex-col items-center pt-[5vh] md:pt-[15vh]">
      <div className="max-w-[347px] w-full flex flex-col justify-start">
        <span className="text-[16px] text-[#2E266F]">Welcome back</span>
        <span className="text-[24px] md:text-[30px] font-[600] text-[#2E266F] mt-2">Login to your account</span>
        <button className="bg-[#2959AC] rounded-[5px] flex items-center justify-center gap-2 mt-2">
          <img src="/logo/facebook.svg" alt="" className="h-[44px] md:h-[47px]" />
          <span className="text-[14px] md:text-[16px] text-white font-[500] leading-[128.9%]">Continue with Facebook</span>
        </button>
        <div className="flex justify-between items-center bg-gray h-[40px] md:h-[60px]">
          <div className="h-[2px] bg-[#E8E8E8] w-[45%]"></div>
          <span className="text-[13px] font-[600] leading-[42.6] text-[#2E266F]">OR</span>
          <div className="h-[2px] bg-[#E8E8E8] w-[45%]"></div>
        </div>
        <Card color="transparent" shadow={false}>
          <form className="mb-2 w-full">
            <div className="mb-1 flex flex-col gap-2">
              <span className="text-[16px] font-[400] text-[#2E266F]">Email</span>
              <Input
                size="lg"
                placeholder="example@gmail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <span className="text-[16px] font-[400] text-[#2E266F]">Password</span>
              <Input
                type="password"
                size="lg"
                placeholder="Password"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="flex justify-between items-center">
              <Checkbox
                label={
                  <span className="text-[14px] font-[400] text-[#2E266F]">Remember me</span>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
              <span className="text-[14px] font-[400] text-[#2E266F] hover:cursor-pointer">Forgot password?</span>
            </div>
            <Button className="mt-3 bg-[#7E5CEB]" fullWidth>
              Login
            </Button>
          </form>
        </Card>
      </div>
      <div className="mt-4">
        <span className="text-[14px] md:text-[16px] font-[400] text-[#707070]">
          New to Nombox?
          <span className=" font-[600] text-[#7E5CEB] pl-1 cursor-pointer" onClick={() => setLogin(false)}>
            Create account
          </span>
        </span>
      </div>
    </div>
  )
}