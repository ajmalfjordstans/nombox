'use client'

import { Button } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'

export default function PastOrder() {
  const pickupCard = () => {
    return (
      <div className='grid grid-cols-1 md:grid-cols-3 w-full gap-[20px]'>
        <div className='md:col-span-2'>
          <div className='flex gap-[10px] py-[10px]'>
            <Image
              src="/logo/Tick.svg"
              width={24}
              height={24}
              alt='tick'
            >
            </Image>
            <span className='text-[16px] font-[600] leading-[22px] '>Self pickup</span>
          </div>
          <div className='flex flex-col'>
            <span className='text-[12px] font-[600] leading-normal'>Pickup date & Time</span>
            <span className='text-[14px] font-[500] leading-normal'>24 January 2021, 06:00 PM</span>
          </div>
        </div>
        <div className='h-full flex flex-col items-end gap-[20px]'>
          <Button
            color='blue'
            variant='outlined'
            className='h-[40px] w-full'
          >View receipt</Button>
          <Button
            color='blue'
            className='h-[40px] w-full'
          >Repeat order</Button>
        </div>
      </div>
    )
  }

  const deliveryCard = () => {
    return (
      <div className='grid grid-cols-1 md:grid-cols-3 w-full gap-[10px]'>
        <div className=''>
          <div className='flex gap-[10px] py-[10px]'>
            <Image
              src="/logo/Tick.svg"
              width={24}
              height={24}
              alt='tick'
            >
            </Image>
            <span className='text-[16px] font-[600] leading-[22px] '>Home delivery</span>
          </div>
          <div className='flex flex-col'>
            <span className='text-[12px] font-[600] leading-normal'>Pickup date & Time</span>
            <span className='text-[14px] font-[500] leading-normal'>24 January 2021, 06:00 PM</span>
          </div>
        </div>
        <div className='flex flex-col '>
          <span className='text-[16px] font-[600] leading-[22px] py-[10px]'>Delivery address</span>
          <span className='text-[14px] font-[500] leading-normal'>John Doe, Unit 686, Moat House, 54 Bloomfield Avenue, Belfast, BT5 5 AD.</span>
        </div>
        <div className='h-full flex flex-col items-end gap-[20px]'>
          <Button
            color='blue'
            variant='outlined'
            className='h-[40px] w-full'
          >View receipt</Button>
          <Button
            color='blue'
            className='h-[40px] w-full'
          >Repeat order</Button>
        </div>
      </div>
    )
  }
  return (
    <div className='mt-[25px] flex flex-col gap-[25px]'>
      {/* Card1 */}
      <div className='w-full bg-[white] shadow-custom flex flex-col text-primary p-[10px] rounded-[10px] gap-[10px]'>
        <div className='flex gap-[10px]'>
          <Image
            src='/images/temp/dish.png'
            height={149}
            width={220}
            alt='food'
            className='rounded-[10px] max-w-[220px] md:w-[180px] w-[140px] md:h-[149px] h-[100px] object-cover'
          ></Image>
          <div className='w-full gap-[10px]'>
            <div className='flex flex-col md:flex-row justify-between w-full'>
              <div className='w-[100%]'>
                <span className='text-[12px] md:text-[18px] font-[600] leading-[16px] '>Mexican egg noodles</span>
                <div className="my-[2px] md:my-2 flex gap-1">
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
                <div className='text-[12px] flex gap-[3px] md:gap-[15px]'>
                  <span className='font-[500] '>4.2</span>
                  <span className='text-[#707070] font-[400]'>2 reviews</span>
                </div>
              </div>
              <div className='flex w-full justify-end '>
                <span className='text-[18px] md:text-[24px] font-[600]'>£15.00</span>
              </div>
            </div>
            <div className='hidden md:block'>
              {pickupCard()}
            </div>
          </div>
        </div>
        <div className='md:hidden block'>
          {pickupCard()}
        </div>
      </div>




      {/* Card2 */}
      <div className='w-full bg-[white] shadow-custom flex flex-col text-primary p-[10px] rounded-[10px] gap-[10px]'>
        <div className='flex gap-[10px]'>
          <Image
            src='/images/temp/dish2.png'
            height={149}
            width={220}
            alt='food'
            className='rounded-[10px] max-w-[220px] md:w-[180px] w-[140px] md:h-[149px] h-[100px] object-cover'
          ></Image>
          <div className='w-full gap-[10px]'>
            <div className='flex flex-col md:flex-row justify-between w-full'>
              <div className='w-[100%]'>
                <span className='text-[12px] md:text-[18px] font-[600] leading-[16px] '>Strawberry waffles</span>
                <div className="my-[2px] md:my-2 flex gap-1">
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
                <div className='text-[12px] flex gap-[3px] md:gap-[15px]'>
                  <span className='font-[500] '>4.2</span>
                  <span className='text-[#707070] font-[400]'>2 reviews</span>
                </div>
              </div>
              <div className='flex w-full justify-end '>
                <span className='text-[18px] md:text-[24px] font-[600]'>£15.00</span>
              </div>
            </div>
            <div className='hidden md:block'>
              {deliveryCard()}
            </div>
          </div>
        </div>
        <div className='md:hidden block'>
          {deliveryCard()}
        </div>
      </div>
    </div>
  )
}
