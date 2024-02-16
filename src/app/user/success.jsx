import { Button } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'

export default function Success() {
  return (
    <div className='w-full max-w-[305px] mx-[5%] flex flex-col items-center gap-5 pt-[2vh]'>
      <Image
        src="/images/verified.png"
        alt='verified'
        height={182}
        width={178}
        className='h-[82px] w-[82px]'
      />
      <p className='text-[24px] leading-[36px] text-[#161616] font-[600] text-center'>Payment Successful</p>
      <Button
        variant='filled'
        className='font-poppins capitalize bg-[#7E5CEB] font-[500] rounded-[5px]'
        fullWidth
      >
        Explore more
      </Button>
      <Button
        variant='outlined'
        className='font-poppins capitalize border-2 border-[#7E5CEB] font-[500] rounded-[5px] text-[#7E5CEB]'
        fullWidth
      >
        View Orders
      </Button>
    </div>
  )
}
