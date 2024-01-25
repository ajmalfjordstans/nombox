'use client'

import React, { useRef, useState } from 'react'
import 'swiper/css';
import ChefSwiper from '@/components/swiper/chef-swiper';
import { ChefsNear } from '@/Context/constants';
ChefsNear

export default function RegisteredChef() {

  return (
    <div className="container mx-auto pt-[60px] pb-[80px] pl-[5%] pr-[2%] xl:pl-0">
      <div className='w-full flex justify-center'>
        <span className="text-primary text-[18px] md:text-[24px] font-[600] ">Chefs registered on our platform</span>
      </div>
      <ChefSwiper chefs={ChefsNear}/>
    </div>
  )
}