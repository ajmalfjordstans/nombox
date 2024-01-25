'use client'

import React, { useState } from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Image from 'next/image';
import { ProgressLight } from '@/components/progress';

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export default function Compliance({ open, setOpen }) {
  const [tab, setTab] = useState(1)
  const handleOpenTab = (value) => setTab(tab === value ? 0 : value)
  const handleOpen = (value) => setOpen(open === value ? 0 : value)
  return (
    <div className='w-full shadow-custom rounded-[16px] bg-white'>
      <Accordion open={open === 'compliance'} className=' border-b-[1px] border-[#F2F2F2]'>
        <AccordionHeader onClick={() => handleOpen('compliance')} className='border-none shadow-custom p-[10px] md:p-[30px] rounded-[16px]'>
          <div className=' flex justify-between w-full'>
            <div className='flex gap-[10px] items-center'>
              <div>
                <Image
                  src="/logo/chef/compliance-icon.svg"
                  height={38}
                  width={38}
                  className='mr-[30px]'
                  alt="Tick"
                />
              </div>
              <span className='text-[18px] font-[600] leading-[22px] text-[#7E5CEB]'>
                Compliance
              </span>
            </div>
            <div className='flex items-center justify-end gap-[15px]'>
              <p className='font-[600] text-[16px] leading-[22px] text-[#707070]'>4 Steps remaing</p>
              <ProgressLight progress="38" />
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody className='md:px-[35px] p-[10px] md:p-[30px]'>
          <Accordion open={tab === 1} icon={<Icon id={1} open={tab} />} className='border-b-[1px] border-[#F2F2F2]'>
            <AccordionHeader onClick={() => handleOpenTab(1)} className='md:px-[35px] p-[10px] md:p-[30px] border-none'>
              <div className='flex gap-[30px] items-center'>
                <div className='h-[36px] w-[36px] bg-primary rounded-full flex justify-center items-center font-[700] text-[18px] leading-[27px] text-white'>
                  1
                </div>
                <span className='font-[600] text-[16px] leading-[24px] text-primary'>Upload ID Proof</span>
              </div>
            </AccordionHeader>
            <AccordionBody className="md:px-[35px] p-[10px] md:p-[30px]">
              We&apos;re not always in the position that we want to be at. We&apos;re constantly
              growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
              ourselves and actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion open={tab === 2} icon={<Icon id={2} open={tab} />} className='border-b-[1px] border-[#F2F2F2]'>
            <AccordionHeader onClick={() => handleOpenTab(2)} className='md:px-[35px] p-[10px] md:p-[30px] border-none'>
              <div className='flex gap-[30px] items-center'>
                <div className='h-[36px] w-[36px] bg-primary rounded-full flex justify-center items-center font-[700] text-[18px] leading-[27px] text-white'>
                  2
                </div>
                <span className='font-[600] text-[16px] leading-[24px] text-primary'>Upload Address Proof</span>
              </div>
            </AccordionHeader>
            <AccordionBody className="md:px-[35px] p-[10px] md:p-[30px]">
              We&apos;re not always in the position that we want to be at. We&apos;re constantly
              growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
              ourselves and actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion open={tab === 3} icon={<Icon id={3} open={tab} />} className='border-b-[1px] border-[#F2F2F2]'>
            <AccordionHeader onClick={() => handleOpenTab(3)} className='md:px-[35px] p-[10px] md:p-[30px] border-none'>
              <div className='flex gap-[30px] items-center'>
                <div className='h-[36px] w-[36px] bg-primary rounded-full flex justify-center items-center font-[700] text-[18px] leading-[27px] text-white'>
                  3
                </div>
                <span className='font-[600] text-[16px] leading-[24px] text-primary'>FSA Hygiene Certificate</span>
              </div>
            </AccordionHeader>
            <AccordionBody className="md:px-[35px] p-[10px] md:p-[30px]">
              We&apos;re not always in the position that we want to be at. We&apos;re constantly
              growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
              ourselves and actualize our dreams.
            </AccordionBody>
          </Accordion>

          <Accordion open={tab === 4} icon={<Icon id={4} open={tab} />}>
            <AccordionHeader onClick={() => handleOpenTab(4)} className='md:px-[35px] p-[10px] md:p-[30px] border-none'>
              <div className='flex gap-[30px] items-center'>
                <div className='h-[36px] w-[36px] bg-primary rounded-full flex justify-center items-center font-[700] text-[18px] leading-[27px] text-white'>
                  4
                </div>
                <span className='font-[600] text-[16px] leading-[24px] text-primary'>Manual Audit</span>
              </div>
            </AccordionHeader>
            <AccordionBody className="md:px-[35px] p-[10px] md:p-[30px]">
              We&apos;re not always in the position that we want to be at. We&apos;re constantly
              growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
              ourselves and actualize our dreams.
            </AccordionBody>
          </Accordion>

        </AccordionBody>
      </Accordion>
    </div>
  )
}