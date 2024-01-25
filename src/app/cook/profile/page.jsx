'use client'

import { ProgressDark } from '@/components/progress'
import React, { useState } from 'react'
import Profile from './profile'
import Delivery from './delivery'
import Call from './call'
import Compliance from './compliance'
import Image from 'next/image'

export default function page() {
  const [progress, setProgress] = useState(50)
  const [open, setOpen] = useState('profile');
  return (
    <div className='flex'>
      <div className='w-[88px] h-[full] bg-white relative'>
        <div className='h-[120px] w[88px]-full bg-[#7E5CEB] flex justify-center items-center'>
          <ProgressDark progress={progress} />
        </div>
        <div className='flex flex-col items-center w-full gap-[30px] py-[30px]'>
          <Image src="/logo/chef/sidebar/dish.svg" height="24" width="24" className='hover:cursor-pointer' />
          <Image src="/logo/chef/sidebar/calendar.svg" height="24" width="24" className='hover:cursor-pointer' />
          <Image src="/logo/chef/sidebar/dish2.svg" height="24" width="24" className='hover:cursor-pointer' />
          <Image src="/logo/chef/sidebar/chat.svg" height="24" width="24" className='hover:cursor-pointer' />
          <Image src="/logo/chef/sidebar/star.svg" height="24" width="24" className='hover:cursor-pointer' />
          <Image src="/logo/chef/sidebar/wallet.svg" height="24" width="24" className='hover:cursor-pointer' />
          <Image src="/logo/chef/sidebar/setting.svg" height="24" width="24" className='hover:cursor-pointer' />
        </div>
        <Image src="/logo/chef/sidebar/exit.svg" height="36" width="36" className='hover:cursor-pointer mx-auto mt-[40px]' />
      </div>
      <div className='w-full px-[5%] flex flex-col gap-[20px] py-[30px]'>
        <div className='w-full flex justify-between '>
          <p className='font-[600] text-[18px] leading-[22px] text-primary'>Complete your profile</p>
          <div className='w-[260px]'>
            <div className='flex justify-between'>
              <p className=''>Setup Progress</p>
              <p className=''>{progress}%</p>
            </div>
            <div className='bg-[#ECE7FC] h-[6px] w-[full] z-[10] rounded-[10px] mt-[6px]'>
              <div className={`w-[${progress * 2.6}px] bg-[#7E5CEB] h-[6px] z-[20] rounded-[10px]`}></div>
            </div>
          </div>
        </div>
        <Profile open={open} setOpen={setOpen} />
        <Delivery open={open} setOpen={setOpen} />
        <Call open={open} setOpen={setOpen} />
        <Compliance open={open} setOpen={setOpen} />
      </div>

    </div>
  )
}
