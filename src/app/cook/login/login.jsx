'use client'

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";

export default function LoginForm({ setLogin }) {
  return (
    <div className="flex flex-col items-center pt-[5vh] md:pt-[5vh]">
      <div className="max-w-[354px] w-full flex flex-col justify-start">
        <span className="text-[16px] text-primary">Welcome back</span>
        <span className="text-[24px] md:text-[30px] font-[600] text-primary my-2">Login to chef&apos;s account</span>
        <Card color="transparent" shadow={false}>
          <form className="mb-2 w-full">
            <div className="mb-1 flex flex-col gap-2">
              <span className="text-[16px] font-[400] text-primary">Email</span>
              <Input
                size="lg"
                placeholder="example@gmail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <span className="text-[16px] font-[400] text-primary">Password</span>
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
                  <span className="text-[14px] font-[400] text-primary">Remember me</span>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
              <span className="text-[14px] font-[400] text-primary hover:cursor-pointer">Forgot password?</span>
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