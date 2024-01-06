'use client'

import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CardMeals from '../cards/card-meals';

export default function MealsSwiper({meals}) {
  const swiperRef = useRef(null);

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
    <div className="mt-[37px] flex relative">
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        breakpoints={{
          320: {
            slidesPerView: 1.1,
            spaceBetween: 15,
          },
          530: {
            slidesPerView: 2.1,
            spaceBetween: 15,
          },
          960: {
            slidesPerView: 3.1,
            spaceBetween: 15,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        // onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className='!w-full mr-[30px]'
      >
        {meals?.map((data) => {
          return (
            <SwiperSlide key={data.id}><CardMeals data={data}/></SwiperSlide>
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