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

export default function Profile() {
  const [tab, setTab] = useState(1)
  const [open, setOpen] = useState(1)
  const handleOpenTab = (value) => setTab(tab === value ? 0 : value)
  const handleOpen = (value) => setOpen(open === value ? 0 : value)
  return (
    <div className='w-full shadow-custom rounded-[16px] bg-white'>
      <Accordion open={open === 'profile'} className=' border-b-[1px] border-[#F2F2F2]'>
        <AccordionHeader onClick={() => handleOpen('profile')} className='border-none shadow-custom p-[20px] md:p-[30px] rounded-[16px]'>
          <div className=' flex justify-between w-full'>
            <div className='flex gap-[10px] items-center'>
              <div>
                <Image
                  src="/logo/chef/profile-icon.svg"
                  height={38}
                  width={38}
                  className='mr-[15px] md:mr-[30px] h-[24px] w-[24px] md:h-[38px] md:w-[38px]'
                  alt="Tick"
                />
              </div>
              <span className='text-[14px] md:text-[18px] font-[600] leading-[22px] text-[#7E5CEB]'>
                Profile
              </span>
            </div>
            <div className='flex items-center justify-end gap-[15px]'>
              <p className='font-[600] text-[16px] leading-[22px] text-[#707070] hidden md:block'>2 Steps remaing</p>
              <ProgressLight progress="38" />
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody className=''>
          <Accordion open={tab === 1} icon={<Icon id={1} open={tab} />} className='border-b-[1px] border-[#F2F2F2]'>
            <AccordionHeader onClick={() => handleOpenTab(1)} className='md:px-[35px] p-[20px] md:p-[30px] border-none'>
              <div className='flex gap-[30px] items-center'>
                <div className='h-[24px] w-[24px] md:h-[36px] md:w-[36px] bg-primary rounded-full flex justify-center items-center font-[700] text-[14px] md:text-[18px] leading-[27px] text-white'>
                  1
                </div>
                <span className='font-[600] text-[16px] leading-[24px] text-primary'>Name of your kitchen</span>
              </div>
            </AccordionHeader>
            <AccordionBody className="md:px-[100px] px-[60px] py-0 pb-[30px]">
              <input
                // value={values.stateOrCountry}
                // onChange={handleChange}
                // onBlur={handleBlur}
                placeholder='Kitchen Name'
                id="kitchenName" type="text"
                className={`bg-inherit w-full text-black border-[1px] border-[#F2F2F2] rounded-[5px] p-3 max-w-[350px]`}
              />
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
            </AccordionBody>
          </Accordion>

          <Accordion open={tab === 2} icon={<Icon id={2} open={tab} />}>
            <AccordionHeader onClick={() => handleOpenTab(2)} className='md:px-[35px] p-[20px] md:p-[30px] border-none'>
              <div className='flex gap-[30px] items-center'>
                <div className='h-[24px] w-[24px] md:h-[36px] md:w-[36px] bg-primary rounded-full flex justify-center items-center font-[700] text-[14px] md:text-[18px] leading-[27px] text-white'>
                  2
                </div>
                <span className='font-[600] text-[16px] leading-[24px] text-primary'>Upload profile image</span>
              </div>
            </AccordionHeader>
            <AccordionBody className="md:px-[100px] px-[60px] py-0 pb-[30px]">
              <div className='flex flex-col md:flex-row items-center gap-[10px]'>
                <div className='flex gap-[15px]'>
                  <Image src="/logo/chef/upload-image.svg" height="36" width="36" className='h-[36px] w-[36px] md:h-[72px] md:w-[72px]' alt=''/>
                  <div className='flex flex-col justify-evenly'>
                    <div className='flex justify-between items-center'>
                      <span className='font-[400] text-[12px] md:text-[16px] leading-[24px] text-[#2E266F]'>Kitchen_logo.jpg</span>
                      <span className='font-[400] text-[12px] leading-[18px] text-[#7E5CEB] hover:cursor-pointer'>Remove</span>
                    </div>
                    <p className='font-[400] text-[10px] md:text-[14px] leading-[15px] md:leading-[21px] text-[#707070]'>(Allowed JPG, GIF or PNG. Max size of 2MB)</p>
                  </div>
                </div>
                <Button
                  variant='outlined'
                  color='blue'
                  className='p-3 rounded-[5px] border-[#7E5CEB] h-[44px]'
                >
                  Upload Logo
                </Button>
              </div>
              <div className='flex gap-[10px] mt-[30px]'>
                <Button
                  variant='filled'
                  color='blue'
                  className=' p-3 rounded-[5px] bg-[#7E5CEB]'
                               >
                  Next
                </Button>
                <Button
                  variant='outlined'
                  color='blue'
                  className=' p-3 rounded-[5px] border-[#7E5CEB]'
                >
                  Skip this step
                </Button>
              </div>
            </AccordionBody>
          </Accordion>
        </AccordionBody>
      </Accordion>

    </div>
  )
}
