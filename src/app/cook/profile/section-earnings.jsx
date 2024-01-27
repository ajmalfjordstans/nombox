import Image from 'next/image'
import React from 'react'

export function Card() {
  return (
    <div className='p-[15px] md:p-[30px] flex flex-col md:flex-row flex-wrap md:flex-nowrap gap-[10px]'>
      <div className='flex gap-[10px]'>
        <Image
          src="/images/temp/dish.png"
          height={150}
          width={220}
          className='w-[136px] h-[93px] md:h-[150px] md:w-[220px] object-cover rounded-[10px]'
          alt=''
        />
        <div className='md:hidden block'>
          <p className='font-[600] text-[18px] leading-[22px] text-primary'>Mexican egg noodles</p>
          <div className='flex gap-[10px] items-center'>
            <p>5/5</p>
            <div className="my-2 flex gap-1">
              {Array(5).fill().map((_, index) => (
                <Image
                  key={index}
                  height={14}
                  width={14}
                  src="/logo/star-filled.svg"
                  alt={`star-${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col justify-center'>
        <div className='flex flex-col-reverse md:flex-col  gap-[10px] w-full'>
          <div className='flex w-full justify-between'>
            <div className='hidden md:block'>
              <p className='font-[600] text-[18px] leading-[22px] text-primary'>Mexican egg noodles</p>
              <div className='flex gap-[10px] items-center'>
                <p>5/5</p>
                <div className="my-2 flex gap-1">
                  {Array(5).fill().map((_, index) => (
                    <Image
                      key={index}
                      height={14}
                      width={14}
                      src="/logo/star-filled.svg"
                      alt={`star-${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className='flex w-full md:w-auto justify-between items-center md:flex-col md:text-right'>
              <p className='font-[400] text-[14px] leading-[20px] text-[#707070]'>January 17, 2021</p>
              <p className='font-[600] text-[24px] leading-[36px] text-primary'>£15.00</p>
            </div>
          </div>
          <div className='flex gap-[10px]'>
            <div className='w-[48px] h-[48px] rounded-full flex justify-center items-center bg-[#F2F5FE] font-[700] text-[14px] leading-[24px] text-[#7E5CEB]'>
              AW
            </div>
            <div className='font-[500] text-[14px] leading-[20px]'>
              <p className='text-primary'>Anna Wilson</p>
              <p className='text-[#707070]'>Great Food!! Loved the packaging too!!!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Earnings() {
  return (
    <>
      <div className='w-full rounded-[10px] p-[15px] md:p-[30px] bg-white shadow-custom flex md:justify-between flex-wrap justify-center gap-[20px]'>
        <div className='flex'>
          <div className='text-[#7E5CEB] pr-[30px] border-r-[1px] border-[#AEAEAE]'>
            <p className='font-[400] text-[12px] leading-[18px]'>Total Earning</p>
            <p className='font-[600] text-[24px] leading-[36px]'>£5899</p>
          </div>
          <div className='text-primary pl-[30px]'>
            <p className='font-[400] text-[12px] leading-[18px]'>Pending Amount</p>
            <p className='font-[600] text-[24px] leading-[36px]'>£150</p>
          </div>
        </div>
        <div className='md:text-right'>
          <p className='font-[400] text-[12px] leading-[18px] text-[#7E5CEB]'>THIS MONTH’S EARNING</p>
          <p className='font-[600] text-[24px] leading-[36px] text-primary'>£2078.90</p>
        </div>
      </div>

      <div className='w-full rounded-[10px] bg-white shadow-custom'>
        {Card()}
        <div className='w-full h-[1px] bg-[#EEF0F6]'></div>
        {Card()}
      </div>
    </>
  )
}
