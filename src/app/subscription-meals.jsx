'use client'

import React, { useRef, useState } from 'react'
import 'swiper/css';
import MealsSwiper from '@/components/swiper/meals-swiper';
import { SubscriptionMeals } from '@/Context/constants';
export default function Meals() {

  return (
    <div className=" bg-[#ffffff] relative overflow-x-hidden">
      <div className='w-[118px] h-[118px] bg-[#D8CEF9] rounded-full absolute left-[-56px] top-[-35px]'></div>
      <div className="container mx-auto pt-[60px] pb-[80px] pl-[5%] pr-[2%] xl:pl-0 relative">
        <div className='flex justify-between lg:max-w-[77%]'>
          <span className="text-primary text-[24px] font-[600]">Subscription Meals</span>
          <div className='w-[30px] h-[30px] bg-[#7E5CEB] rounded-full '></div>
        </div>
        <div className='w-[48px] h-[48px] bg-[#D8CEF9] rounded-full absolute left-[50%]'></div>
        <MealsSwiper meals={SubscriptionMeals} />
      </div>
    </div>
  )
}