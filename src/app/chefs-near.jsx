'use client'

import React, { useRef, useState } from 'react'
import ChefSwiper from '@/components/swiper/chef-swiper';
import { ChefsNear } from '@/Context/constants';

export default function Chef() {

  return (
    <div className=" bg-[#F8FBFF]">
      <div className="container mx-auto pt-[60px] pb-[80px] pl-[5%] pr-[2%] xl:pl-0">
        <span className="text-[#2E266F] text-[24px] font-[600]">Chefs near you</span>
        <ChefSwiper chefs={ChefsNear} />
      </div>
    </div>
  )
}