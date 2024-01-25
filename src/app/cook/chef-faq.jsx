'use client'
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";


function Icon({ id, open }) {
  return (
    id === open ?
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="#7E5CEB" />
        <path d="M28.59 28.1599L24 23.5799L19.41 28.1599L18 26.7499L24 20.7499L30 26.7499L28.59 28.1599Z" fill="#7E5CEB" />
      </svg> :
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="#7E5CEB" />
        <path d="M19.41 20.8401L24 25.4201L28.59 20.8401L30 22.2501L24 28.2501L18 22.2501L19.41 20.8401Z" fill="#7E5CEB" />
      </svg>
  );
}

export default function ChefFAQ() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="container mx-auto pt-[60px] pb-[80px] px-[5%] xl:px-0">
      <div className='w-full flex justify-center'>
        <span className="text-primary text-[18px] md:text-[24px] font-[600] ">FAQs</span>
      </div>
      <div className="w-full max-w-[850px] mx-auto mt-[60px]  ">
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />} className="mb-[16px] md:mb-[22px] rounded-lg border border-blue-gray-100 px-[24px] md:px-[40px] py-[23px] md:py-[28px]">
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className={`border-b-0 transition-colors text-primary`}
          >
            What is Material Tailwind?
          </AccordionHeader>
          <AccordionBody className="pt-0 text-[14px] md:text-[16px] font-[400] leading-[30px]">
            Nombox platform will as a marketplace connecting you with potential customers who are interested in authentic home cooked food. You worry about the food,we will take care of (almost)everything else!

          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />} className="mb-[16px] md:mb-[22px] rounded-lg border border-blue-gray-100 px-[24px] md:px-[40px] py-[23px] md:py-[28px]">
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className={`border-b-0 transition-colors text-primary`}
          >
            What is my investment?

          </AccordionHeader>
          <AccordionBody className="pt-0 text-[14px] md:text-[16px] font-[400] leading-[30px]">
            Nombox platform will as a marketplace connecting you with potential customers who are interested in authentic home cooked food. You worry about the food,we will take care of (almost)everything else!

          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />} className="mb-[16px] md:mb-[22px] rounded-lg border border-blue-gray-100 px-[24px] md:px-[40px] py-[23px] md:py-[28px]">
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className={`border-b-0 transition-colors text-primary`}
          >
            How will I make money?
          </AccordionHeader>
          <AccordionBody className="pt-0 text-[14px] md:text-[16px] font-[400] leading-[30px]">
            Nombox platform will as a marketplace connecting you with potential customers who are interested in authentic home cooked food. You worry about the food,we will take care of (almost)everything else!

          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4} icon={<Icon id={4} open={open} />} className="mb-[16px] md:mb-[22px] rounded-lg border border-blue-gray-100 px-[24px] md:px-[40px] py-[23px] md:py-[28px]">
          <AccordionHeader
            onClick={() => handleOpen(4)}
            className={`border-b-0 transition-colors text-primary`}
          >
            What about licenses?
          </AccordionHeader>
          <AccordionBody className="pt-0 text-[14px] md:text-[16px] font-[400] leading-[30px]">
            Nombox platform will as a marketplace connecting you with potential customers who are interested in authentic home cooked food. You worry about the food,we will take care of (almost)everything else!

          </AccordionBody>
        </Accordion>
      </div>
    </div>
  )
}