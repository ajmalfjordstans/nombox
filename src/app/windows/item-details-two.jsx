'use client'

import { Button } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'

export default function ItemDetailsTwo() {
  return (
    <div className='bg-white max-w-[430px] shadow-custom flex flex-col rounded-3xl p-[30px] relative'>
      <div className='absolute h-[49px] w-[49px] bg-white rounded-full shadow-custom right-[-25px] top-[-25px] flex justify-center items-center hover:cursor-pointer'>
        <Image
          src="/logo/X.svg"
          height={14}
          width={14}
        />
      </div>
      <p className='font-[600] text-[16px] leading-[22px] text-primary'>Strawberry waffles x 1</p>
      <p className='font-[600] text-[14px] leading-[22px] text-primary mt-[15px]'>Home delivery</p>

      <div className='grid grid-cols-2 mt-2'>
        <div className='font-[400] text-[12px] leading-[18px] flex flex-col gap-2'>
          <div>
            <p className='text-[#707070]'>Delivery date & Time</p>
            <p className='text-primary'>24 January 2021, 06:00 PM</p>
          </div>
          <div>
            <p className='text-[#707070]'>Payment status</p>
            <div>
              <p className='text-primary'>Completed</p>
            </div>
          </div>
          <div>
            <p className='text-[#707070]'>Notes for cook</p>
            <p className='text-primary italic'>“Please avoid using too much pepper on noodles.”</p>
          </div>
        </div>
        <div className='font-[400] text-[12px] leading-[18px] flex flex-col gap-2'>
          <div>
            <p className='text-[#707070]'>Delivery address</p>
            <p className='text-primary'>John Doe, Unit 686, Moat House, 54 Bloomfield Avenue, Belfast, BT5 5 AD.</p>
          </div>
          <div>
            <p className='text-[#707070]'>Add-ons</p>
            <p className='text-primary'>Tomato ketchup (FREE)</p>
          </div>
        </div>
      </div>
      <div className='flex gap-2 mt-[20px]'>
        <Button
          variant='outlined'
          fullWidth
          className='rounded-full border-[#7E5CEB] border-[2px] text-[#7E5CEB] font-poppins capitalize leading-[24px]'
        >
          Message Customer
        </Button>
        <Button
          variant=''
          fullWidth
          className='rounded-full bg-[#7E5CEB] border-[1px] text-[white] font-poppins capitalize leading-[24px]'
        >
          Confirm handoff
        </Button>
      </div>
    </div>
  )
}
