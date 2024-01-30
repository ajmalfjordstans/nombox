import Image from 'next/image'
import React, { useState } from 'react'

export function chatHead(showList) {
  return (
    <div className='w-full bg-white h-[88px] flex rounded-[10px] items-center p-[10px] md:p-[20px] justify-between shadow-custom hover:cursor-pointer' onClick={()=>showList(false) }>
      <div className='flex gap-[10px]'>
        <div className='bg-[#F2F5FE] h-[48px] w-[48px] rounded-full flex justify-center items-center text-[14px] font-[700] leading-[24px] text-[#7E5CEB]'>VR</div>
        <div>
          <p className='font-[600] text-[16px] leading-[20px] text-primary'>Victor Roberts</p>
          <p className='font-[400] text-[12px] leading-[16px] text-[#707070]'>01 May 2020</p>
        </div>
      </div>
      <div className='h-full'>
        <div className='h-[20px] w-[20px] rounded-full bg-[#7E5CEB] font-[700] text-[12px] leading-[15px] text-white flex justify-center items-center'>2</div>
      </div>
    </div>
  )
}

export default function MessagesList({ showList }) {
  const [answered, setAnswered] = useState(false)
  return (
    <div className='w-full md:max-w-[400px] p-[10px] md:p-[30px] h-[70vh]'>
      <div className='w-full flex h-[40px] bg-[#ECE7FC] rounded-full font-[600] text-[10px] leading-[18px] '>
        <div className={`w-[50%] h-full rounded-full flex gap-[3px] items-center p-[10px] hover:cursor-pointer transition-colors duration-300
        ${answered === false ? "bg-primary text-white" : " bg-inherit text-primary"}`}
          onClick={() => setAnswered(false)}
        >
          <Image src="/logo/chef/unanswered.svg" height={18} width={18} alt='unanswered' />
          <p>Unanswered Messages</p>
        </div>
        <div className={`w-[50%] h-full rounded-full flex gap-[3px] items-center p-[10px] hover:cursor-pointer transition-colors duration-300
        ${answered === true ? "bg-primary text-white" : " bg-inherit text-primary"}`}
          onClick={() => setAnswered(true)}
        >
          <Image src="/logo/chef/answered.svg" height={18} width={18} alt='unanswered' />
          <p>Answered Messages</p>
        </div>
      </div>
      {/* Search and Filter */}
      <div className='flex justify-between gap-[10px] mt-[20px]'>
        <div className='bg-white shadow-custom rounded-[10px] flex items-center gap-[10px] w-full px-[15px]'>
          <Image src="/logo/search.svg" height={20} width={20} alt='filter' />
          <input
            type='text'
            placeholder='Search'
            className='border-none focus:outline-none w-full'
          />
        </div>
        <div className='flex justify-center items-center h-[44px] w-[44px] bg-white shadow-custom rounded-[10px] '>
          <Image src="/logo/filter.svg" height={20} width={20} alt='filter' />
        </div>
      </div>
      <div className='flex flex-col gap-[10px] mt-[20px] overflow-y-scroll h-[52vh] md:h-[70vh]'>
        {chatHead(showList)}
        {chatHead(showList)}
        {chatHead(showList)}
        {chatHead(showList)}
        {chatHead(showList)}
        {chatHead(showList)}
        {chatHead(showList)}
        {chatHead(showList)}
        {chatHead(showList)}
      </div>
    </div>
  )
}
