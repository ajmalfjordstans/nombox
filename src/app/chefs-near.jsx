'use client'

import React, { useRef, useState } from 'react'
import ChefSwiper from '@/components/swiper/chef-swiper';
import { ChefsNear } from '@/Context/constants';

export default function Chef() {

  return (
    <div className=" bg-[#F8FBFF] relative overflow-hidden">
      <div className='w-[160px] h-[160px] bg-[#D8CEF9] rounded-full absolute left-[-80px] bottom-[-80px]'></div>
      <div className='w-[112px] h-[112px] bg-[#D8CEF9] rounded-full absolute right-[-76px] top-[80px]'></div>
      <div className='w-[28px] h-[28px] bg-[#7E5CEB] rounded-full absolute right-[76px] top-[180px]'></div>
      <div className="container mx-auto pt-[60px] pb-[80px] pl-[5%] pr-[2%] xl:pl-0">
        <div className='flex justify-between max-w-[450px]'>
          <span className="text-primary text-[24px] font-[600]">Chefs near you</span>
          <div className='w-[48px] h-[48px] bg-[#D8CEF9] rounded-full'></div>
        </div>
        <ChefSwiper chefs={ChefsNear} />
      </div>
    </div>
  )
}