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

export default function Delivery() {
  const [open, setOpen] = useState(0)
  const handleOpen = (value) => setOpen(open === value ? 0 : value)
  return (
    <div className='w-full shadow-custom rounded-[16px] bg-white'>
      <Accordion open={open === 'delivery'} className=' border-b-[1px] border-[#F2F2F2]'>
        <AccordionHeader onClick={() => handleOpen('delivery')} className='border-none shadow-custom p-[20px] md:p-[30px] rounded-[16px]'>
          <div className=' flex justify-between w-full'>
            <div className='flex gap-[10px] items-center'>
              <div>
                <Image
                  src="/logo/chef/delivery-icon.svg"
                  height={38}
                  width={38}
                  className='mr-[15px] md:mr-[30px] h-[24px] w-[24px] md:h-[38px] md:w-[38px]'
                  alt="Tick"
                />
              </div>
              <span className='text-[14px] md:text-[18px] font-[600] leading-[22px] text-[#7E5CEB]'>
                Delivery preference
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
              <span className='font-[600] text-[16px] leading-[24px] text-primary'>Does Kitchen partner intend to do own delivery in select post codes ?</span>
            </div>
            <div className='flex gap-[10px] '>
              <Button
                variant='outlined'
                color='blue'
                className=' p-3 px-10 rounded-[5px] border-[#7E5CEB]'
              >
                No
              </Button>
              <Button
                variant='filled'
                color='blue'
                className=' p-3 px-10 rounded-[5px] bg-[#7E5CEB]'
                             >
                Yes
              </Button>
            </div>
          </div>
          <div className='mt-[15px]'>
            <div className="grid grid-cols-12 mt-[15px] items-center gap-[15px] md:gap-[30px]">
              <span className='col-span-5 font-[400] text-[10px] md:text-[16px] leading-[24px] text-[#2E266F]'>
                Partner delivery postcodes
              </span>
              <span className='col-span-5 font-[400] text-[10px] md:text-[16px] leading-[24px] text-[#2E266F]'>
                Partner delivery charges
              </span>
              <div className='bg-[#7E5CEB] text-white flex justify-center items-center rounded-[5px] w-full h-[40px] col-span-2'>
                Add
              </div>
            </div>
            <div className="grid grid-cols-12 mt-[15px] gap-[15px] md:gap-[30px]">
              <input
                // value={values.stateOrCountry}
                // onChange={handleChange}
                // onBlur={handleBlur}
                placeholder='BT11AA'
                id="postcode" type="text"
                className={`bg-inherit w-full text-black border-[1px] border-[#E8E8E8] rounded-[5px] p-3 max-w-[350px] col-span-5`}
              />
              <input
                // value={values.stateOrCountry}
                // onChange={handleChange}
                // onBlur={handleBlur}
                placeholder='£1.00'
                id="charges" type="text"
                className={`bg-inherit w-full text-black border-[1px] border-[#E8E8E8] rounded-[5px] p-3 max-w-[350px] col-span-5`}
              />
              <div className='bg-[#7E5CEB] text-white flex justify-center items-center rounded-[5px] w-[40px] h-[40px] md:w-[50px] md:h-[50px] col-span-2 mx-auto'>
                <Image src="/logo/delete.svg" height="24" width="24" alt='delete'/>
              </div>
            </div>
            <div className="grid grid-cols-12 mt-[15px] gap-[15px] md:gap-[30px]">
              <input
                // value={values.stateOrCountry}
                // onChange={handleChange}
                // onBlur={handleBlur}
                placeholder='BT11AA'
                id="postcode" type="text"
                className={`bg-inherit w-full text-black border-[1px] border-[#E8E8E8] rounded-[5px] p-3 max-w-[350px] col-span-5`}
              />
              <input
                // value={values.stateOrCountry}
                // onChange={handleChange}
                // onBlur={handleBlur}
                placeholder='£1.00'
                id="charges" type="text"
                className={`bg-inherit w-full text-black border-[1px] border-[#E8E8E8] rounded-[5px] p-3 max-w-[350px] col-span-5`}
              />
              <div className='bg-[#7E5CEB] text-white flex justify-center items-center rounded-[5px] w-[40px] h-[40px] md:w-[50px] md:h-[50px] col-span-2 mx-auto'>
                <Image src="/logo/delete.svg" height="24" width="24" alt=''/>
              </div>
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
          </div>
        </AccordionBody>
      </Accordion>
    </div>
  )
}