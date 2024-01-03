"use client"

import { Input, Button } from "@material-tailwind/react";
import React from "react";

export default function Hero() {
  const [location, setLocation] = React.useState("");
  const onChange = ({ target }) => setLocation(target.value);
  return (
    <>
      <div className="container px-8 py-10 mx-auto flex justify-between items-center flex-col md:flex-row min-h-[65vh]">
        <div className="w-full md:max-w-[50%]">
          <span className="text-[#2E266F] text-[30px] md:text-[48px] font-[700] leading-[120%]">Unbox the Joy of Home Cooked Food.</span>
          <div className="relative flex w-full mt-5">
            <Input
              type="text"
              label="Enter your location or zip code"
              value={location}
              onChange={onChange}
              className="pr-20"
              containerProps={{
                className: "min-w-0",
              }}
            />
            <Button
              size="sm"
              className="!absolute right-0 h-full rounded bg-[#7E5CEB]"
            >
              Search
            </Button>
          </div>
          <div className="flex flex-col md:flex-row text-left items-center gap-[20px] mt-5 text-[12px] md:text-[14px]">
            <span className=" text-[#707070]">Or Select from polpular locations</span>
            <div className="flex gap-[15px]">
              <div className="bg-[#7E5CEB] px-[15px] py-[7.5px] rounded-[25px] flex items-center hover:cursor-pointer">
                <img src="/logo/Location-white.svg" alt="" className="h-[11px] w-[10px] mr-2" />
                <span className="text-white">Belfast</span>
              </div>
              <div className="bg-white px-[15px] py-[7.5px] rounded-[25px] flex items-center border-[2px] border-[#7E5CEB] hover:cursor-pointer">
                <img src="/logo/Location.svg" alt="" className="h-[11px] w-[10px] mr-2" />
                <span className="text-[#7E5CEB]">Cardiff</span>
              </div>
              <div className="bg-white px-[15px] py-[7.5px] rounded-[25px] flex items-center border-[2px] border-[#7E5CEB] hover:cursor-pointer">
                <img src="/logo/Location.svg" alt="" className="h-[11px] w-[10px] mr-2" />
                <span className="text-[#7E5CEB]">Leicester</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="/images/hero.svg" alt="hero" className="h-[320px]" />
        </div>
      </div>
      
    </>
  )
}