import {
  Button,
  Input,
} from "@material-tailwind/react";
import React from 'react'

export default function Verify() {
  return (
    <div className='flex flex-col max-w-[360px] gap-3 px-[5%]'>
      <p className="font-[700] text-[24px] md:text-[30px] leading-[36px] md:leading-[45px] text-center text-primary">Verify your account</p>
      <div className="w-full bg-[#ECE7FC] rounded-[10px] p-[25px]">
        <p className="text-[14px] md:text-[16px] leading-[21px] md:leading-[24px] text-center text-primary">A 5 digit code has been shared to your registered email and phone</p>
      </div>
      <div className="md:mb-4">
        <span className="text-[14px] md:text-[16px] font-[400] text-primary">Enter OTP</span>
        <Input
          size="lg"
          placeholder="Enter OTP"
          className="!border-t-blue-gray-200 focus:!border-t-[#2E266F] mt-[10px]"
        />
      </div>
      <Button
        fullWidth
        className="bg-[#7E5CEB] capitalize font-poppins leading-[24px] mt-[10px]"
      >
        Verify
      </Button>
      <div className="mt-10 w-full flex justify-center">
        <span className="text-[14px] md:text-[16px] font-[400] text-[#707070]">
          Haven’t got OTP?
          <span className=" font-[500] text-[#7E5CEB] pl-1 cursor-pointer" onClick={() => setLogin(true)}>
            Resend
          </span>
        </span>
      </div>
    </div>
  )
}
