'use client'

import React, { useRef, useState } from 'react'
import CardDish from "../components/cards/card-dishes";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Dishes() {
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
    <div className=" bg-[#F8FBFF]">
      <div className="container mx-auto pt-[60px] pb-[80px] pl-[5%] xl:pl-0">
        {/* <svg viewBox="0 0 500 200" className="w-[100vw] h-[150px]">
        <path d="M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0" fill="#FFFFFF"></path>
      </svg> */}
        <span className="text-[#2E266F] text-[24px] font-[600]">Daily Dishes</span>
        <div className="mt-[37px] flex relative py-[10px]">
          <Swiper
            // spaceBetween={50}
            slidesPerView={4}
            scrollbar={{ draggable: true }}
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
            className=''
            // onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            <SwiperSlide><CardDish /></SwiperSlide>
            <SwiperSlide><CardDish /></SwiperSlide>
            <SwiperSlide><CardDish /></SwiperSlide>
            <SwiperSlide><CardDish /></SwiperSlide>
            <SwiperSlide><CardDish /></SwiperSlide>
            <SwiperSlide><CardDish /></SwiperSlide>
            <SwiperSlide><CardDish /></SwiperSlide>
            <SwiperSlide><CardDish /></SwiperSlide>
            <SwiperSlide><CardDish /></SwiperSlide>
            <SwiperSlide><CardDish /></SwiperSlide>
            <SwiperSlide><CardDish /></SwiperSlide>
            <SwiperSlide><CardDish /></SwiperSlide>
            <SwiperSlide><CardDish /></SwiperSlide>
            <SwiperSlide><CardDish /></SwiperSlide>
            <SwiperSlide><CardDish /></SwiperSlide>
            <SwiperSlide><CardDish /></SwiperSlide>
            <SwiperSlide><CardDish /></SwiperSlide>

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
    </div>
  )
}