'use client'

import React from 'react'
import { ScheduleComponent, Week, Month, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { registerLicense } from '@syncfusion/ej2-base'
import Image from 'next/image';

import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { date } from 'yup';
import { Button } from '@material-tailwind/react';

registerLicense(
  // 'Ngo9BigBOggjHTQxAR8/V1NAaF5cWWJCfExwWmFZfVpgcF9FZlZUR2YuP1ZhSXxXdkRgWX9ac3JQRWFfVEA='
  'Ngo9BigBOggjHTQxAR8/V1NAaF1cWmhIfEx1RHxQdld5ZFRHallYTnNWUj0eQnxTdEFjW31ecHxRQmFeVUx0XA=='
)

export function Dishes() {
  const MyDishes = [
    {
      image: "/images/temp/dish.png",
      name: "Mexican egg noodles"
    },
    {
      image: "/images/temp/dish3.png",
      name: "Veg burger"
    },
    {
      image: "/images/temp/dish2.png",
      name: "Strawberry waffles"
    },
    {
      image: "/images/temp/meal1.png",
      name: "Cheesy tomato pasta"
    },
    {
      image: "/images/temp/dish3.png",
      name: "Veg burger"
    },
  ]
  return (
    <div className='md:!w-[239px] h-full bg-white'>
      <div className='p-[10px] border-b-[1px] border-[#EBEFF2]'>
        <p className='font-[600] text-[12px] leading-[18px] text-[#7E5CEB]'>My dishes</p>
        <p className='font-[400] text-[10px] leading-[15px] text-primary mt-[5px]'>Drag and drop items from here to the calender for scheduling</p>
      </div>
      <div className='flex md:flex-col overflow-x-scroll items-center w-auto p-[10px] gap-[10px] overflow-y-scroll '>
        {MyDishes.map((dish, id) => {
          return (
            <div className='w-full shadow-custom rounded-[10px] overflow-hidden flex flex-col' key={id}>
              <Image
                src={dish.image}
                height={113}
                width={199}
                alt='dish'
                className='w-full rounded-[10px]'
              />
              <p className='p-[10px] font-[400] text-[12px] leading-[18px] text-primary'>{dish.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function Timeline() {
  const workHours = {
    start: '7:00', end: '23:00'
  };
  const workingDays = [0, 1, 2, 3, 4, 5, 6];
  return (
    <div className='w-full '>
      <ScheduleComponent
        cssClass='virtual-scrolling'
        width='100%'
        height='70vh'
        workHours={workHours}
        startHour='07:00' endHour='23:00'
        workDays={workingDays}
        // allowDragAndDrop={true}
        allowResizing={true}
      >
        <ViewsDirective>
          <ViewDirective option='Week' />
          <ViewDirective option='Month' />
        </ViewsDirective>
        <Inject services={[Week, Month]} />
      </ScheduleComponent>
    </div>
  )
}

export function RightSideBar() {
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
  return (
    <div className='md:w-[320px] h-full'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className='border-b-[1px] border-[#EBEFF2]'>
          <StaticDatePicker
            showDaysOutsideCurrentMonth
            defaultValue={dayjs(new date())}
            disablePast={true}
            slotProps={slotProps}
          />
        </div>
      </LocalizationProvider>
      <div className='p-[15px] md:p-[30px]'>
        <div className='flex gap-[10px] items-center'>
          <div className='h-[12px] w-[12px] rounded-full bg-[#7E5CEB]'></div>
          <p className='font-[400] text-[12px] leading-[16px] text-[#2E266F]'>Scheduled dishes</p>
        </div>
        <div className='flex gap-[10px] items-center mt-[10px]'>
          <div className='h-[12px] w-[12px] rounded-full bg-[#FF922C]'></div>
          <p className='font-[400] text-[12px] leading-[16px] text-[#2E266F]'>Orders</p>
        </div>
        <div className='flex flex-col gap-[10px] mt-[30px]'>
          <Button
            variant='filled'
            color='blue'
            className='p-3 px-5 rounded-[5px] bg-[#7E5CEB]'
          >
            Schedule a dish
          </Button>
          <Button
            variant='outlined'
            color='blue'
            className='p-3 px-5 rounded-[5px] border-[#7E5CEB]'
          >
            View orders
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function Calendar() {
  return (
    <div className='flex flex-col md:flex-row justify-between '>
      <Dishes />
      <Timeline />
      <RightSideBar />
    </div>
  )
}
