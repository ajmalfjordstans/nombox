import Image from 'next/image'
import React from 'react'

export function Received() {
  return (
    <div className='w-full flex'>
      <div className='max-w-[75%] md:max-w-[55%] h-auto w-auto flex flex-col font-[400] '>
        <p className='w-[100%] h-auto p-[15px] bg-[#7E5CEB] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] text-white text-[16px] leading-[26px]'>Where is your homekitchen located?</p>
        <p className='text-[#707c9798] text-[12px] leading-[26px] text-right'>9:52 AM</p>
      </div>
    </div>
  )
}

export function Sent() {
  return (
    <div className='w-full flex justify-end'>
      <div className='max-w-[75%] md:max-w-[55%] h-auto w-auto flex flex-col font-[400] '>
        <p className='w-[100%] h-auto p-[15px] bg-white rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] text-[#7E5CEB] text-[16px] leading-[26px] border-[1px] border-[#7690A840]'>We are based in Cardiff.</p>
        <p className='text-[#707c9798] text-[12px] leading-[26px] text-left'>9:52 AM</p>
      </div>
    </div>
  )
}

export default function MessagesChat({ showList }) {
  return (
    <div className='w-full min-h-[88vh] bg-white shadow-custom'>
      <div className='flex gap-[10px] items-center px-[20px] md:px-[50px] py-[15px] border-b-[2px] border-[#707C971A]'>
        <div className='hover:cursor-pointer md:hidden' onClick={() => showList(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </div>
        <div className='bg-[#F2F5FE] h-[48px] w-[48px] rounded-full flex justify-center items-center text-[14px] font-[700] leading-[24px] text-[#7E5CEB]'>VR</div>
        <p className='font-[600] text-[18px] leading-[14px] text-primary'>Victor Roberts</p>
      </div>
      <div className='p-[10px] md:p-[30px] h-[80vh] flex flex-col justify-between'>
        <div className='overflow-y-scroll h-full'>
          {Received()}
          {Sent()}
          {Received()}
          {Sent()}
          {Received()}
          {Sent()}
          {Received()}
          {Sent()}
          {Received()}
          {Sent()}
          {Received()}
          {Sent()}
          {Received()}
          {Sent()}
        </div>
        <div className='border-t-[2px] border-[#707C9726] flex py-[20px]'>
          <div className='min-h-[40px] min-w-[40px] bg-[#7E5CEB] rounded-full flex justify-center items-center hover:cursor-pointer'>
            <Image src="/logo/plus.svg" height={24} width={24} alt="plus" />
          </div>
          <div className='flex px-[10px] w-full'>
            <input
              type='text'
              placeholder='Type a message here'
              className='border-none focus:outline-none w-full'
            />
            <Image src="/logo/emoji-icon.svg" height={24} width={24} alt="plus" className='hover:cursor-pointer' />
          </div>
          <div className='min-h-[40px] min-w-[40px] bg-[#7E5CEB] rounded-full flex justify-center items-center hover:cursor-pointer'>
            <Image src="/logo/send.svg" height={24} width={24} alt="plus" />
          </div>
        </div>
      </div>
    </div>
  )
}
