'use client'

import { Button } from '@material-tailwind/react'
import Image from 'next/image'
import React, { useState } from 'react'

export default function CardCartTwo() {
  const [count, setCount] = useState(1)
  return (
    <div className='shadow-custom rounded-[10px] border-[1px] border-[#F2F2F2] bg-white overflow-hidden'>
      <div className='w-full h-auto  p-[10px] flex gap-[10px] md:gap-[25px]'>
        <Image
          src='/images/temp/dish2.png'
          height={149}
          width={220}
          alt='food'
          className='rounded-[10px] max-w-[220px] md:w-[180px] w-[140px] md:h-[149px] h-[100px] object-cover'
        ></Image>
        <div className='flex justify-between items-center w-full'>
          <div className='max-w-[400px] flex flex-col justify-around'>
            <div className='flex gap-[10px]'>
              <div className='flex flex-col justify-evenly w-full'>
                <div className='flex md:flex-row flex-col justify-between w-full gap-[10px]'>
                  <div className='flex items-center gap-[10px]'>
                    <span className='text-[12px] md:text-[18px] font-[600] leading-[16px] text-primary'>Strawberry waffles</span>
                    <div className="bg-[#FF922C] h-[20px] rounded-[4px] px-[8px] py-[4px] hover:cursor-pointer text-[10px] text-white">5 portions available</div>
                  </div>
                </div>
                <div className='flex items-center gap-[10px]'>
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
                <div className='flex items-center gap-[10px]'>
                  <Image
                    src="/logo/Tick.svg"
                    height={24}
                    width={24}
                    className=''
                    alt="Tick"
                  />
                  <p className='font-[400] text-[14px] leading-[22px] text-[#838383]'>Add more of this item</p>
                </div>
              </div>
            </div>
            <div className='flex justify-between items-center gap-[10px] lg:gap-[30px] pt-[10px] flex-wrap'>
              <div className='flex gap-[6px] items-center'>
                <p className='font-[400] text-[14px] leading-[22px] text-[#7E5CEB]'>Add more of this item</p>
                <div className='h-[21px] md:h-[36px] w-[21px] md:w-[36px] bg-[#ECE7FC] rounded-full hover:cursor-pointer text-[#7E5CEB] flex justify-center items-center text-[20px] md:text-[30px] select-none'
                  onClick={() => (count === 1 ? setCount(count) : setCount(count - 1))}
                >
                  -
                </div>
                <div className='h-[27px] md:h-[36px] w-[27px] md:w-[36px] bg-[#F8F8FA] rounded-[5px]] hover:cursor-pointer text-[black] flex justify-center items-center text-[14px] font-[400]'>
                  {count}
                </div>
                <div className='h-[21px] md:h-[36px] w-[21px] md:w-[36px] text-[#ECE7FC] rounded-full hover:cursor-pointer bg-[#7E5CEB] flex justify-center items-center text-[20px] md:text-[30px] select-none'
                  onClick={() => setCount(count + 1)}
                >
                  +
                </div>
              </div>
            </div>
          </div>
          <div className='hidden md:block'>
            <Button
              variant='filled'
              color='blue'
              className='h-[48px] p-3 rounded-[5px] bg-[#7E5CEB]'
              startIcon="/images/logo/editOrder.svg "
            >
              View Cart
            </Button>
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center gap-[10px] lg:gap-[30px] pt-[10px] flex-wrap md:hidden px-[10px] pb-[10px]'>
        <Button
          variant='filled'
          color='blue'
          className='h-[48px] w-full p-3 rounded-[5px] bg-[#7E5CEB]'
          startIcon="/images/logo/editOrder.svg"
        >
          View Cart
        </Button>
      </div>
    </div>
  )
}
