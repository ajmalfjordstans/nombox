'use client'

import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CardChef from '../../components/cards/card-chef';

export default function RegisteredChef() {

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
    <div className="container mx-auto pt-[60px] pb-[80px] pl-[5%] xl:pl-0">
      <div className='w-full flex justify-center'>
        <span className="text-[#2E266F] text-[18px] md:text-[24px] font-[600] ">Chefs registered on our platform</span>
      </div>
      <div className="mt-[37px] md:mt-[60px] flex relative">
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 270,
            },
            530: {
              slidesPerView: 2,
              spaceBetween: 90,
            },
            780: {
              slidesPerView: 2,
              spaceBetween: 35,
            },
            960: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          // onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          <SwiperSlide><CardChef /></SwiperSlide>
          <SwiperSlide><CardChef /></SwiperSlide>
          <SwiperSlide><CardChef /></SwiperSlide>
          <SwiperSlide><CardChef /></SwiperSlide>
          <SwiperSlide><CardChef /></SwiperSlide>
          <SwiperSlide><CardChef /></SwiperSlide>
          <SwiperSlide><CardChef /></SwiperSlide>
          <SwiperSlide><CardChef /></SwiperSlide>
          <SwiperSlide><CardChef /></SwiperSlide>
          <SwiperSlide><CardChef /></SwiperSlide>
          <SwiperSlide><CardChef /></SwiperSlide>
          <SwiperSlide><CardChef /></SwiperSlide>
          <SwiperSlide><CardChef /></SwiperSlide>
          <SwiperSlide><CardChef /></SwiperSlide>
          <SwiperSlide><CardChef /></SwiperSlide>
          <SwiperSlide><CardChef /></SwiperSlide>
          <SwiperSlide><CardChef /></SwiperSlide>
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
    </div>
  )
}