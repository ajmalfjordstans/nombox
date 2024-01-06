'use client'

import React, { useRef, useState } from 'react'
import 'swiper/css';
import MealsSwiper from '@/components/swiper/meals-swiper';
import { SubscriptionMeals } from '@/Context/constants';
export default function Meals() {

  return (
    <div className=" bg-[#F8FBFF]">
      <div className="container mx-auto pt-[60px] pb-[80px] pl-[5%] pr-[2%] xl:pl-0">
        <span className="text-[#2E266F] text-[24px] font-[600]">Subscription Meals</span>
        <MealsSwiper meals={SubscriptionMeals}/>
      </div>
    </div>
  )
}