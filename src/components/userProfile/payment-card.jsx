'use client'

import { Button } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'

export default function PaymentCard() {
  return (
    <div className='flex flex-col py-[20px] gap-[15px]'>
      <div className='w-full flex flex-wrap justify-between shadow-custom p-[30px] text-[#2566AF]'>
        <div className='text-[18px] font-[600] leading-[22px]'>
          <span className=''>Royal Bank of Scotland</span>
          <div className='flex items-center gap-[30px] mt-[20px]'>
            <Image
              src="/logo/visa.svg"
              height={38}
              width={58}
              className=''
              alt='visa'
            ></Image>
            <span className='text-[14px] md:text-[18px] text-[#707070]'>4592 00** **** 0125</span>
          </div>
        </div>
        <div className='flex gap-[10px] items-center mt-[10px]'>
          <Button
            color='blue'
            className='h-[40px] bg-[#7E5CEB] w-[130px]'
          >Edit</Button>
          <Button
            color='blue'
            variant='outlined'
            className='h-[40px] border-[#7E5CEB] text-[#7E5CEB] w-[130px]'
          >Delete</Button>
        </div>
      </div>
      <div className='w-full flex flex-wrap justify-between shadow-custom p-[30px] text-[#2566AF]'>
        <div className='text-[18px] font-[600] leading-[22px]'>
          <span className=''>Standard Chartered PLC</span>
          <div className='flex items-center gap-[30px] mt-[20px]'>
            <Image
              src="/logo/Mastercard.svg"
              height={38}
              width={58}
              className=''
              alt='card'
            ></Image>
            <span className='text-[14px] md:text-[18px] text-[#707070]'>6766 00** **** 7899</span>
          </div>
        </div>
        <div className='flex gap-[10px] items-center mt-[10px]'>
          <Button
            color='blue'
            className='h-[40px] bg-[#7E5CEB] w-[130px]'
          >Edit</Button>
          <Button
            color='blue'
            variant='outlined'
            className='h-[40px] border-[#7E5CEB] text-[#7E5CEB] w-[130px]'
          >Delete</Button>
        </div>
      </div>
    </div>
  )
}
