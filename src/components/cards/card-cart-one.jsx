'use client'

import { Button } from '@material-tailwind/react'
import Image from 'next/image'
import React, { useState } from 'react'

export default function CardCartOne() {
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
        <div className='w-[100%] flex flex-col justify-around'>
          <div className='flex gap-[10px]'>
            <div className='w-full'>
              <div className='flex md:flex-row flex-col justify-between w-full gap-[10px]'>
                <div className='flex items-center gap-[10px]'>
                  <span className='text-[12px] md:text-[18px] font-[600] leading-[16px] text-primary'>Strawberry waffles</span>
                  <div className="bg-[#FF922C] h-[20px] rounded-[4px] px-[8px] py-[4px] hover:cursor-pointer text-[10px] text-white">5 portions available</div>
                </div>
                <p className='text-[22px] leading-[33px] text-primary font-[600]'>£15.00</p>
              </div>
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
          </div>
          <div className='md:flex justify-between items-center gap-[10px] lg:gap-[30px] pt-[10px] flex-wrap hidden '>
            <div className='flex gap-[6px] items-center'>
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
            <div className='flex gap-[10px]'>
              <Button
                variant='outlined'
                color='blue'
                className=' p-3 rounded-[5px] border-[#7E5CEB]'
              >
                Remove
              </Button>
              <Button
                variant='filled'
                color='blue'
                className=' p-3 rounded-[5px] bg-[#7E5CEB]'
               
              >
                Edit Order
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center gap-[10px] lg:gap-[30px] pt-[10px] flex-wrap md:hidden px-[10px] pb-[10px]'>
        <div className='flex gap-[6px] items-center'>
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
        <div className='flex gap-[10px]'>
          <Button
            variant='outlined'
            color='blue'
            className=' p-3 rounded-[5px] border-[#7E5CEB]'
          >
            Remove
          </Button>
          <Button
            variant='filled'
            color='blue'
            className=' p-3 rounded-[5px] bg-[#7E5CEB]'
           
          >
            Edit Order
          </Button>
        </div>
      </div>

      {/* details */}
      <div className='border-t-[1px] border-[#F2F2F2] flex justify-between items-center p-[20px] lg:p-[30px]'>
        <p className='font-[600] text-[18px] leading-[22px] text-primary'>Self pickup</p>
        <div>
          <p className='font-[600] text-[12px] leading-[18px] text-[#838383]'>Pickup date & Time</p>
          <p className='font-[400] text-[16px] leading-[24px] text-primary mt-[2px]'>24 January 2021, 06:00 PM</p>
        </div>
      </div>
      <div className='border-t-[1px] border-[#F2F2F2] flex justify-between items-center p-[20px] lg:p-[30px]'>
        <p className='font-[600] text-[18px] leading-[22px] text-primary'>Add-ons</p>
        <p className='font-[400] text-[16px] leading-[24px] text-primary'>Tomato ketchup (FREE)</p>
      </div>
      <div className='border-t-[1px] border-[#F2F2F2] flex justify-between items-center p-[20px] lg:p-[30px]'>
        <p className='font-[600] text-[18px] leading-[22px] text-primary'>Notes for cook</p>
        <p className='font-[400] text-[16px] leading-[24px] text-primary'>“Please avoid using too much pepper on noodles.”</p>
      </div>
    </div>
  )
}
