import React, { useState } from 'react'
import Profile from './complete-profile';
import Delivery from './complete-delivery';
import Call from './complete-call';
import Compliance from './complete-compliance';

export default function CompleteProfile({ progress }) {
  const [open, setOpen] = useState('profile');
  return (
    <div className='px-[5%] flex flex-col gap-[20px] py-[30px]'>
      <div className='w-full flex flex-col md:flex-row justify-between gap-[20px]'>
        <p className='font-[600] text-[14px] md:text-[18px] leading-[22px] text-primary'>Complete your profile</p>
        <div className='w-full md:w-[260px]'>
          <div className='flex justify-between'>
            <p className='font-[400] text-[12px] leading-[18px] text-[#707070]'>Setup Progress</p>
            <p className='font-[600] text-[12px] leading-[18px] text-[#7E5CEB]'>{progress}%</p>
          </div>
          <div className='bg-[#ECE7FC] h-[6px] w-[full] z-[10] rounded-[10px] mt-[6px]'>
            <div className={`w-[${progress * 2.6}px] bg-[#7E5CEB] h-[6px] z-[20] rounded-[10px]`}></div>
          </div>
        </div>
      </div>
      <Profile/>
      <Delivery/>
      <Call/>
      <Compliance/>

    </div>
  )
}
