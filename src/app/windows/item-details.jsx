'use client'

import { Button } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'

export default function ItemDetailsOne() {
  return (
    <div className='bg-white max-w-[430px] shadow-custom flex flex-col rounded-3xl p-[30px] relative'>
      <div className='absolute h-[49px] w-[49px] bg-white rounded-full shadow-custom right-[-25px] top-[-25px] flex justify-center items-center hover:cursor-pointer'>
        <Image
          src="/logo/X.svg"
          height={14}
          width={14}
        />
      </div>
      <p className='font-[600] text-[16px] leading-[22px] text-primary'>Mexican egg noodles x 2</p>
      <div className='grid grid-cols-2 mt-2'>
        <div className='font-[400] text-[12px] leading-[18px] flex flex-col gap-2'>
          <div>
            <p className='text-[#707070]'>Order by</p>
            <p className='text-primary'>15 Jan 2021, 01:00 PM</p>
          </div>
          <div>
            <p className='text-[#707070]'>Number of portions</p>
            <p className='text-primary'>05</p>
          </div>
          <div>
            <p className='text-[#707070]'>Price details</p>
            <p className='text-primary'>Actual price : £15.00</p>
          </div>
        </div>
        <div className='font-[400] text-[12px] leading-[18px] flex flex-col gap-2'>
          <div>
            <p className='text-[#707070]'>Type</p>
            <p className='text-primary'>Group buy</p>
          </div>
          <div>
            <p className='text-[#707070]'>Pickup/delivery date & Time</p>
            <p className='text-primary'>15 Jan 2021, 05:30 PM - 07:00 PM</p>
          </div>
          <div>
            <p className='text-[#707070]'>Price details</p>
            <p className='text-primary'>Sale price : £12.00</p>
          </div>
        </div>
      </div>
      <div className='flex gap-2 mt-[20px]'>
        <Button
          variant='outlined'
          fullWidth
          className='rounded-full border-[#7E5CEB] border-[2px] text-[#7E5CEB] font-poppins capitalize leading-[24px]'
        >
          Delete
        </Button>
        <Button
          variant=''
          fullWidth
          className='rounded-full bg-[#7E5CEB] border-[1px] text-[white] font-poppins capitalize leading-[24px]'
        >
          Edit
        </Button>
      </div>
    </div>
  )
}
