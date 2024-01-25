"use client"
import React, { useState } from 'react'
import { Button, Textarea } from "@material-tailwind/react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Image from 'next/image';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import DeliveryForm from './delivery-form';

export default function OrderDetails() {
  const [open, setOpen] = useState('pickup');
  const handleOpen = (value) => setOpen(open === value ? 0 : value)
  const [date, setDate] = useState(new Date())

  // React.useEffect(() => {
  //   console.log(date);
  // }, [date])
  return (
    <div className='flex flex-col gap-[10px]'>
      <div
        className='w-full  shadow-custom rounded-[10px] border-[1px] border-[#F2F2F2] bg-white p-[20px] md:p-[30px]'
      >
        <span className='text-[16px] font-[600] leading-[18px] text-primary'>Notes for the cook (optional)</span>
        <div className="w-full mt-[15px]">
          <Textarea label="Enter your notes here..." className='border-[#F2F2F2]' />
        </div>
      </div>

      <span className='text-[18px] font-[600] leading-[22px] text-primary mt-[30px]'>Pickup and delivery details</span>
      {/* <Accordion open={open === 1} className="shadow-custom rounded-[10px] border-[1px] border-[#F2F2F2] bg-white text-primary p-[20px] md:p-[30px]"> */}
      <div className="shadow-custom rounded-[10px] border-[1px] border-[#F2F2F2] bg-white text-primary ">
        <Accordion open={open === 'pickup'} className='p-[10px] md:p-[30px] border-b-[1px] border-[#F2F2F2]'>
          <AccordionHeader onClick={() => handleOpen('pickup')} className='border-none'>
            <div className='flex gap-[10px] items-center'>
              {open === 'pickup' ? (
                <div>
                  <Image
                    src="/logo/Tick.svg"
                    height={32}
                    width={32}
                    className=''
                    alt="Tick"
                  />
                </div>
              ) : (
                <div className='h-[32px] w-[32px] rounded-full bg-[#ECE7FC]'></div>
              )}
              <span className='text-[18px] font-[600] leading-[22px] text-primary'>
                Self Pickup
              </span>
            </div>
          </AccordionHeader>
          <AccordionBody className='md:px-[35px]'>
            <p className='text-[14px] font-[600] leading-[22px] text-[#7E5CEB]'>Select Date and Time</p>
            <div className='mt-[15px] flex justify-around gap-[10px] md:gap-[25px]'>
              <DatePicker
                label='Pickup Date'
                className='rounded-[5px] border-[#F2F2F2] w-full'
                value={dayjs(date)}
                onChange={(newValue) => setDate(newValue)}
                minDate={dayjs(new Date())}
                format='D MMMM YYYY'
              />
              <TimePicker
                label="Pickup Time"
                className='w-full'
                value={dayjs(date)}
                onChange={(newValue) => setDate(newValue)}
              />
            </div>
            <div className='mt-[20px] w-full flex justify-end '>
              <Button
                className='w-full md:max-w-[244px] bg-[#7E5CEB] rounded-[5px]'
              >Continue</Button>
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 'delivery'} className='p-[10px] md:p-[30px]'>
          <AccordionHeader onClick={() => handleOpen('delivery')} className='border-none'>
            <div className='flex gap-[10px] items-center'>
              {open === 'delivery' ? (
                <div>
                  <Image
                    src="/logo/Tick.svg"
                    height={32}
                    width={32}
                    className=''
                    alt="Tick"
                  />
                </div>
              ) : (
                <div className='h-[32px] w-[32px] rounded-full bg-[#ECE7FC]'></div>
              )}

              <span className='text-[18px] font-[600] leading-[22px] text-primary'>
                Home Delivery
              </span>
            </div>
          </AccordionHeader>
          <AccordionBody className='md:px-[35px]'>
            <DeliveryForm />
          </AccordionBody>
        </Accordion>
      </div>
    </div >
  )
}
