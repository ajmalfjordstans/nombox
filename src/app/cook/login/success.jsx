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
      <p className='text-[24px] leading-[36px] text-[#161616] font-[600] text-center'>Account has been verified!</p>
      <p className='text-center text-[#707070]'>An email activation link is sent to your registered email address. Please click on the link to setup your profile.</p>
      <Button
        variant='filled'
        className='font-poppins capitalize bg-[#7E5CEB] font-[500] rounded-[5px]'
        fullWidth
      >
        Setup Profile
      </Button>
    </div>
  )
}
