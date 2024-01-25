'use client'

import React, { useState } from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import CardOrder from '@/components/cards/card-order';

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

export default function CartProductDetails() {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value)

  return (
    <div className='flex flex-col gap-[10px] mb-[10px]'>
      <CardOrder />
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />} className="shadow-custom rounded-[10px] border-[1px] border-[#F2F2F2] bg-white text-primary p-[20px] md:p-[30px]">
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="text-[16px] font-[600] leading-[18px] text-primary border-none "
        >
          Description
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
    </div>
  )
}
