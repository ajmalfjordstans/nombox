'use client'

import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CardTestimonial from '@/components/cards/card-testimonial';
import Image from 'next/image';

export default function TestimonialSection() {
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
    <div className='bg-[#F8FBFF]'>
      <div className="container mx-auto pt-[60px] pb-[80px] pl-[5%] pr-[2%] xl:pl-0">
        <span className="text-primary text-[24px] font-[600]">What our customers saying</span>
        <div className="mt-[70px] flex relative">
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            scrollbar={{ draggable: true }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 280,
              },
              530: {
                slidesPerView: 2,
                spaceBetween: 220,
              },
              960: {
                slidesPerView: 3,
                spaceBetween: 260,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: -10,
              },
            }}
            // onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            <SwiperSlide><CardTestimonial /></SwiperSlide>
            <SwiperSlide><CardTestimonial /></SwiperSlide>
            <SwiperSlide><CardTestimonial /></SwiperSlide>
            <SwiperSlide><CardTestimonial /></SwiperSlide>
            <SwiperSlide><CardTestimonial /></SwiperSlide>
            <SwiperSlide><CardTestimonial /></SwiperSlide>
            <SwiperSlide><CardTestimonial /></SwiperSlide>
            <SwiperSlide><CardTestimonial /></SwiperSlide>
            <SwiperSlide><CardTestimonial /></SwiperSlide>
            <SwiperSlide><CardTestimonial /></SwiperSlide>
            <SwiperSlide><CardTestimonial /></SwiperSlide>
            <SwiperSlide><CardTestimonial /></SwiperSlide>
            <SwiperSlide><CardTestimonial /></SwiperSlide>
            <SwiperSlide><CardTestimonial /></SwiperSlide>
            <SwiperSlide><CardTestimonial /></SwiperSlide>
            <SwiperSlide><CardTestimonial /></SwiperSlide>
            <SwiperSlide><CardTestimonial /></SwiperSlide>

          </Swiper>
        </div>
        <div className='flex w-full justify-end mt-[50px]'>
          <div className='flex'>
            {/* <button onClick={handlePrevClick} className="h-[48px] w-[48px] bg-white rounded-full flex justify-center items-center transform translate-x-[-24px] border-[#EAEAEA] border-[2px] z-[2]">
          </button> */}
            <Image height={48} width={48} src="/logo/prev-arrow.svg" alt="" className='h-[48px] w-[48px]' onClick={handlePrevClick} />
            {/* <button onClick={handleNextClick} className="h-[48px] w-[48px] bg-white rounded-full flex justify-center items-center transform translate-x-[24px] border-[#EAEAEA] border-[2px] z-[2]">
          </button> */}
            <Image height={48} width={48} src="/logo/next-arrow.svg" alt="" className='h-[48px] w-[48px]' onClick={handleNextClick} />
          </div>
        </div>
      </div>
    </div>
  )
}