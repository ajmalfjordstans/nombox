import { ProgressDark } from '@/components/progress'
import Image from 'next/image'
import React from 'react'

export default function SideMenu({ progress, showSection, setShowSection }) {
  return (
    <div className={`${showSection == 'complete' ? "w-[88px]" : "w-[344px]"} h-[full] bg-white relative hidden md:block transition-width duration-300 ease-in-out`}>
      <div className='h-[120px] w[88px]-full bg-[#7E5CEB] flex justify-center items-center'>
        {showSection == "complete" ? (
          <ProgressDark progress={progress} />
        ) : (
          <div className='w-full maxw-[260px] px-[30px] transition-opacity duration-1000 ease-in-out'>
            <div className='flex justify-between'>
              <p className='font-[400] text-[12px] leading-[18px] text-[#ECE7FC]'>Setup Progress</p>
              <p className='font-[600] text-[12px] leading-[18px] text-[#FFFFFF]'>{progress}%</p>
            </div>
            <div className='bg-primary h-[6px] w-[full] z-[10] rounded-[10px] mt-[6px]'>
              <div className={`w-[${progress * 2.6}px] bg-[#FFFFFF] h-[6px] z-[20] rounded-[10px]`}></div>
            </div>
            <p className='text-[14px] leading-[24px] text-white font-[600] mt-[20px] hover:cursor-pointer' onClick={() => setShowSection('complete')}>Complete Profile</p>
          </div>
        )}
      </div>
      <div className='flex flex-col items-center w-full overflow-x-hidden'>
        <div className={`${showSection == "dishes" ? "bg-[#ECE7FC]" : "bg-white"} w-full`}>
          <div className='flex gap-[20px] hover:cursor-pointer pl-[30px] py-[20px]' onClick={() => setShowSection('dishes')}>
            <Image src="/logo/chef/sidebar/dish.svg" height="24" width="24" className='hover:cursor-pointer' alt=''/>
            {showSection == "complete" ? "" : (
              <p className={`text-[16px] leading-[24px] text-primary`}>My dishes</p>
            )}
          </div>
        </div>
        <div className={`${showSection == "calendar" ? "bg-[#ECE7FC]" : "bg-white"} w-full`}>
          <div className='flex gap-[20px] hover:cursor-pointer pl-[30px] py-[20px]' onClick={() => setShowSection('calendar')}>
            <Image src="/logo/chef/sidebar/calendar.svg" height="24" width="24" className='hover:cursor-pointer' alt=''/>
            {showSection == "complete" ? "" : (
              <p className='text-[16px] leading-[24px] text-primary'>Calendar</p>
            )}
          </div>
        </div>
        <div className={`${showSection == "orders" ? "bg-[#ECE7FC]" : "bg-white"} w-full`}>
          <div className='flex gap-[20px] hover:cursor-pointer pl-[30px] py-[20px]' onClick={() => setShowSection('orders')}>
            <Image src="/logo/chef/sidebar/dish2.svg" height="24" width="24" className='hover:cursor-pointer' alt=''/>
            {showSection == "complete" ? "" : (
              <p className='text-[16px] leading-[24px] text-primary'>Orders</p>
            )}
          </div>
        </div>
        <div className={`${showSection == "messages" ? "bg-[#ECE7FC]" : "bg-white"} w-full`}>
          <div className='flex gap-[20px] hover:cursor-pointer pl-[30px] py-[20px]' onClick={() => setShowSection('messages')}>
            <Image src="/logo/chef/sidebar/chat.svg" height="24" width="24" className='hover:cursor-pointer' alt=''/>
            {showSection == "complete" ? "" : (
              <p className='text-[16px] leading-[24px] text-primary'>Messages</p>
            )}
          </div>
        </div>
        <div className={`${showSection == "rating" ? "bg-[#ECE7FC]" : "bg-white"} w-full`}>
          <div className='flex gap-[20px] hover:cursor-pointer pl-[30px] py-[20px]' onClick={() => setShowSection('rating')}>
            <Image src="/logo/chef/sidebar/star.svg" height="24" width="24" className='hover:cursor-pointer' alt=''/>
            {showSection == "complete" ? "" : (
              <p className='text-[16px] leading-[24px] text-primary'>Rating</p>
            )}
          </div>
        </div>
        <div className={`${showSection == "earnings" ? "bg-[#ECE7FC]" : "bg-white"} w-full`}>
          <div className='flex gap-[20px] hover:cursor-pointer pl-[30px] py-[20px]' onClick={() => setShowSection('earnings')}>
            <Image src="/logo/chef/sidebar/wallet.svg" height="24" width="24" className='hover:cursor-pointer' alt=''/>
            {showSection == "complete" ? "" : (
              <p className='text-[16px] leading-[24px] text-primary'>Earnings</p>
            )}
          </div>
        </div>
        <div className={`${showSection == "settings" ? "bg-[#ECE7FC]" : "bg-white"} w-full`}>
          <div className='flex gap-[20px] hover:cursor-pointer pl-[30px] py-[20px]' onClick={() => setShowSection('settings')}>
            <Image src="/logo/chef/sidebar/setting.svg" height="24" width="24" className='hover:cursor-pointer' alt=''/>
            {showSection == "complete" ? "" : (
              <p className='text-[16px] leading-[24px] text-primary'>Profile Settings</p>
            )}
          </div>
        </div>
      </div>
      <Image src="/logo/chef/sidebar/exit.svg" height="36" width="36" className='hover:cursor-pointer mx-auto my-[40px] ' alt=''/>
    </div >
  )
}
