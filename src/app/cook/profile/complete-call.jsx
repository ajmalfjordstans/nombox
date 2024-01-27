'use client'

import React, { useState } from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
} from "@material-tailwind/react";
import Image from 'next/image';
import { ProgressLight } from '@/components/progress';

import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { date } from 'yup';
import { StaticTimePicker, TimeClock } from '@mui/x-date-pickers';

const slotProps = {
  actionBar: {
    actions: [''],
  },
  toolbar: {
    // toolbarFormat: 'YYYY',
    // toolbarPlaceholder: 'Select Day',
    hidden: true
  },
  leftArrowIcon: {
    fontSize: 'large',
    color: '#2E266F',
  },
  rightArrowIcon: {
    fontSize: 'large',
    color: '#2E266F',
  },
  nextIconButton: {
    size: 'medium',
    color: '#2E266F',
  }
}

export default function Call() {
  const [open, setOpen] = useState(0)
  const handleOpen = (value) => setOpen(open === value ? 0 : value)
  return (
    <div className='w-full shadow-custom rounded-[16px] bg-white'>
      <Accordion open={open === 'call'} className=' border-b-[1px] border-[#F2F2F2]'>
        <AccordionHeader onClick={() => handleOpen('call')} className='border-none shadow-custom p-[20px] md:p-[30px] rounded-[16px]'>
          <div className=' flex justify-between w-full'>
            <div className='flex gap-[10px] items-center'>
              <div>
                <Image
                  src="/logo/chef/call-icon.svg"
                  height={38}
                  width={38}
                  className='mr-[15px] md:mr-[30px] h-[24px] w-[24px] md:h-[38px] md:w-[38px]'
                  alt="Tick"
                />
              </div>
              <span className='text-[14px] md:text-[18px] font-[600] leading-[22px] text-[#7E5CEB]'>
                Schedule a call with our team
              </span>
            </div>
            <div className='flex items-center justify-end gap-[15px]'>
              <p className='font-[600] text-[16px] leading-[22px] text-[#707070] hidden md:block'>1 Steps remaing</p>
              <ProgressLight progress="38" />
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody className='md:px-[35px] p-[10px] md:p-[30px]'>
          <div className='flex gap-[15px] md:gap-[30px] items-center flex-wrap'>
            <div className='flex gap-[10px] md:gap-[30px] items-center'>
              <div className='min-h-[24px] min-w-[24px] md:h-[36px] md:w-[36px] bg-primary rounded-full flex justify-center items-center font-[700] text-[14px] md:text-[18px] leading-[27px] text-white '>
                1
              </div>
              <span className='font-[600] text-[16px] leading-[24px] text-primary'>Handshake Meeting: Cook with Nombox</span>
            </div>
          </div>

          <div className='mt-[30px] md:px-[100px] px-[60px] py-0 pb-[30px]'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <div className='grid grid-cols-2'>
                <div>
                  <p className='font-[400] text-[14px] leading-[21px] text-[#2E266F]'>Select day</p>
                  <StaticDatePicker
                    showDaysOutsideCurrentMonth
                    defaultValue={dayjs(new date())}
                    disablePast={true}
                    slotProps={slotProps}
                  />
                </div>
                <div>
                  <p className='font-[400] text-[14px] leading-[21px] text-[#2E266F]'>Select Time</p>
                  {/* <TimeClock value={dayjs(new date())} onChange={(newValue) => setValue(newValue)} /> */}
                </div>
              </div>
            </LocalizationProvider>
          </div>




          <div className='flex gap-[10px] mt-[30px]'>
            <Button
              variant='filled'
              color='blue'
              className='p-3 px-5 rounded-[5px] bg-[#7E5CEB]'
            >
              Next
            </Button>
            <Button
              variant='outlined'
              color='blue'
              className='p-3 px-5 rounded-[5px] border-[#7E5CEB]'
            >
              Skip this step
            </Button>
          </div>
        </AccordionBody >
      </Accordion >
    </div >
  )
}