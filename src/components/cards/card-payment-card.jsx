'use client'

import { Button } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'

export default function PaymentCard() {
  return (
    <div className='flex flex-col py-[20px] gap-[15px] w-full'>
      <div className='w-full flex flex-wrap justify-between shadow-custom p-[30px] text-[#2566AF]'>
        <div className='text-[18px] font-[600] leading-[22px]'>
          <span className=''>Royal Bank of Scotland</span>
          <div className='flex gap-10'>
            <div className='flex items-center gap-[30px] mt-[20px] flex-wrap'>
              <Image
                src="/logo/visa.svg"
                height={38}
                width={58}
                className=''
                alt='visa'
              ></Image>
              <span className='text-[14px] md:text-[18px] text-[#707070]'>4592 00** **** 0125</span>
            </div>
            <div className='flex flex-col justify-center'>
              <p>CVV</p>
              <input
                className='p-[20px] border-[1px] border-gray-300 rounded-[10px] bg-inherit w-[90px] h-[38px] mt-[7px]'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-wrap justify-between shadow-custom p-[30px] text-[#2566AF]'>
        <div className='text-[18px] font-[600] leading-[22px]'>
          <span className=''>Standard Chartered PLC</span>
          <div className='flex gap-10'>
            <div className='flex items-center gap-[30px] mt-[20px] flex-wrap'>
              <Image
                src="/logo/Mastercard.svg"
                height={38}
                width={58}
                className=''
                alt='card'
              ></Image>
              <span className='text-[14px] md:text-[18px] text-[#707070]'>6766 00** **** 7899</span>
            </div>
            <div className='flex flex-col justify-center'>
              <p>CVV</p>
              <input
                className='p-[20px] border-[1px] border-gray-300 rounded-[10px] bg-inherit w-[90px] h-[38px] mt-[7px]'
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
