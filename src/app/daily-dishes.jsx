'use client'

import React, { useRef, useState } from 'react'
import 'swiper/css';
import DishesSwiper from '@/components/swiper/dishes-swiper';
import { DailyDishes } from '@/Context/constants';

export default function Dishes() {
  // console.log(DailyDishes);
  return (
    <div className=" bg-[#F8FBFF]">
      <div className="container mx-auto pt-[60px] pb-[80px] pl-[5%] pr-[2%] xl:pl-0">
        {/* <svg viewBox="0 0 500 200" className="w-[100vw] h-[150px]">
        <path d="M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0" fill="#FFFFFF"></path>
      </svg> */}
        <span className="text-[#2E266F] text-[24px] font-[600]">Daily Dishes</span>
        <DishesSwiper data={DailyDishes}/>
      </div>
    </div>
  )
}