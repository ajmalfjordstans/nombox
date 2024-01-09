'use client'

import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CardChef from '../cards/card-chef';

export default function ChefSwiper({ chefs, size }) {
  const swiperRef = useRef(null);

  const breakpoints = size === 'small'
    ? {
      320: { slidesPerView: 1.1, spaceBetween: 15, },
      530: { slidesPerView: 2.1, spaceBetween: 15, },
      1440: { slidesPerView: 3.1, spaceBetween: 15, },
    }
    : {
      320: { slidesPerView: 1.1, spaceBetween: 15, },
      530: { slidesPerView: 2.1, spaceBetween: 15, },
      780: { slidesPerView: 2.1, spaceBetween: 15, },
      960: { slidesPerView: 3.1, spaceBetween: 15, },
      1440: { slidesPerView: 4.1, spaceBetween: 15, },
    }

  const handleNextClick = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.slideNext();
    }
  };
  const handlePrevClick = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.slidePrev();
    }
  };
  return (
    <div className='mt-[37px] flex relative'>
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        breakpoints={breakpoints}
        // onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className='!w-full'
      >
        {chefs?.map((chef) => {
          return (
            <SwiperSlide key={chef.id}><CardChef chef={chef} /></SwiperSlide>
          )
        })}
      </Swiper>
      <div className='absolute w-full h-full flex justify-between items-center'>
        <button onClick={handlePrevClick} className="h-[32px] w-[32px] md:h-[48px] md:w-[48px] bg-white rounded-full flex justify-center items-center transform translate-x-[-11px] md:translate-x-[-24px] border-[#EAEAEA] border-[2px] z-[2]">
          <img src="/logo/prev.svg" alt="" />
        </button>
        <button onClick={handleNextClick} className="h-[32px] w-[32px] md:h-[48px] md:w-[48px] bg-white rounded-full flex justify-center items-center transform translate-x-[-5%] md:translate-x-[24px] border-[#EAEAEA] border-[2px] z-[2]">
          <img src="/logo/next.svg" alt="" />
        </button>
      </div>
    </div>
  )
}