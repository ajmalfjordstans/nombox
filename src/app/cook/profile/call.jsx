'use client'

import React, { useState } from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Image from 'next/image';
import { ProgressLight } from '@/components/progress';

export default function Call({open, setOpen}) {
  const handleOpen = (value) => setOpen(open === value ? 0 : value)
  return (
    <div className='w-full shadow-custom rounded-[16px] bg-white'>
      <Accordion open={open === 'call'} className=' border-b-[1px] border-[#F2F2F2]'>
        <AccordionHeader onClick={() => handleOpen('call')} className='border-none shadow-custom p-[10px] md:p-[30px] rounded-[16px]'>
          <div className=' flex justify-between w-full'>
            <div className='flex gap-[10px] items-center'>
              <div>
                <Image
                  src="/logo/chef/call-icon.svg"
                  height={38}
                  width={38}
                  className='mr-[30px]'
                  alt="Tick"
                />
              </div>
              <span className='text-[18px] font-[600] leading-[22px] text-[#7E5CEB]'>
              Schedule a call with our team
              </span>
            </div>
            <div className='flex items-center justify-end gap-[15px]'>
              <p className='font-[600] text-[16px] leading-[22px] text-[#707070]'>1 Steps remaing</p>
              <ProgressLight progress="38" />
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody className='md:px-[35px] p-[10px] md:p-[30px]'>
          <p className='text-[14px] font-[600] leading-[22px] text-[#7E5CEB]'>Select Date and Time</p>

        </AccordionBody>
      </Accordion>
    </div>
  )
}