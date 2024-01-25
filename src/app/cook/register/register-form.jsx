'use client'

import {
  Card,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

export default function ChefRegisterForm(darkTheme) {
  const [Dark, setDark] = useState(darkTheme.darkTheme);
  // console.log(darkTheme);
  return (
    <div className="mt-[10px] md:mt-[40px]">
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 ${Dark ? "text-white" : "text-primary"}`}>
        <div className="md:mb-4">
          <span className="text-[14px] md:text-[16px] font-[400] ">First Name</span>
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
          <span className="text-[14px] md:text-[16px] font-[400] ">Last Name</span>
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
          <span className="text-[14px] md:text-[16px] font-[400] ">Email</span>
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
          <span className="text-[14px] md:text-[16px] font-[400] ">Phone</span>
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
          <span className="text-[14px] md:text-[16px] font-[400] ">Password</span>
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
          <span className="text-[14px] md:text-[16px] font-[400] ">Confirm Password</span>
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
        <span className={`text-[14px] font-[400] pl-1 ${Dark ? "text-white" : "text-primary"}`}>I agree to Nombox’s<span className={`${Dark ? "text-white" : "text-[#7E5CEB]"} hover:cursor-pointer pl-1`}>Terms and services</span> and <span className={`${Dark ? "text-white" : "text-[#7E5CEB]"} hover:cursor-pointer pl-1`}>Privacy policy</span></span>
      </div>
      <div className="flex justify-end">
        <Button className="mt-3 bg-[#7E5CEB] md:max-w-[350px]" fullWidth>
          Register
        </Button>
      </div>
      {!Dark &&
        <div className="mt-10 w-full flex justify-center">
          <span className="text-[14px] md:text-[16px] font-[400] text-[#707070]">
            Already have an account?
            <span className=" font-[600] text-[#7E5CEB] pl-1 cursor-pointer" onClick={() => setLogin(true)}>
              Login here
            </span>
          </span>
        </div>
      }
    </div>
  )
}