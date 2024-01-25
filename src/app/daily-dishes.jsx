'use client'

import React, { useRef, useState } from 'react'
import 'swiper/css';
import DishesSwiper from '@/components/swiper/dishes-swiper';
import { DailyDishes } from '@/Context/constants';

export default function Dishes() {
  // console.log(DailyDishes);
  return (
    <div className=" bg-[#F8FBFF] relative">
      {/* <svg width="100%" height="100%" id="svg" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150 absolute top-0 z-[0] w-full">
        <path d="M 0,500 L 0,187 C 125.06666666666666,186.86666666666667 250.13333333333333,186.73333333333332 408,207 C 565.8666666666667,227.26666666666668 756.5333333333335,267.93333333333334 934,268 C 1111.4666666666665,268.06666666666666 1275.7333333333331,227.53333333333333 1440,187 L 1440,500 L 0,500 Z" stroke="none" stroke-width="0" fill="#fff" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(180 720 250)"></path>
      </svg> */}
      <div className="container mx-auto pt-[60px] pb-[80px] pl-[5%] pr-[2%] xl:pl-0 !z-[2]">
        {/* <svg viewBox="0 0 500 200" className="w-[100vw] h-[150px]">
        <path d="M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0" fill="#FFFFFF"></path>
      </svg> */}
        <span className="text-primary text-[24px] font-[600]">Daily Dishes</span>
        <DishesSwiper data={DailyDishes} />
      </div>
    </div>
  )
}