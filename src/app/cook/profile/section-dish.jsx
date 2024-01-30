import CardChefDish from '@/components/cards/card-chef-dish'
import { Button } from '@material-tailwind/react'
import Image from 'next/image'
import React, { useState } from 'react'

export function UnscheduledCard({ data }) {
  return (
    <>
      {data &&
        <div className=' rounded-[10px] overflow-hidden bg-white flex flex-col'>
          <Image
            src={data.img}
            height={182}
            width={320}
            className='w-full'
            alt='dish'
          />
          <div className='p-[20px]'>
            <p className='font-[500] text-[14px] leading-[21px] text-primary'>{data.name}</p>
            <div className='flex w-full flex-wrap justify-between items-center mt-[10px]'>
              <p className='font-[700] text-[16px] leading-[24px] text-[#7E5CEB]'>{data.price}</p>
              <Button
                variant='filled'
                className='bg-[#7E5CEB]'
              >Schedule Now</Button>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default function Dishes() {
  const [view, setView] = useState('scheduled')
  const scheduledDish = [
    {
      name: "Mexican egg noodles",
      orderBy: "24 January 2021, 01:00 PM",
      category: "Group buy",
      portions: "05",
      pickupOrDeliveryDate: "24 January 2021, 05:30 PM - 07:00 PM",
      actualPrice: "15.00",
      salePrice: "12.00"
    },
    {
      name: "Strawberry waffles",
      orderBy: "24 January 2021, 01:00 PM",
      category: "Live Kitchen",
      portions: "05",
      pickupOrDeliveryDate: "24 January 2021, 05:30 PM - 07:00 PM",
      actualPrice: "15.00",
      salePrice: "12.00"
    },
  ]

  const unScheduledDish = [
    {
      img: "/images/temp/dish.png",
      name: "Mexican egg noodles",
      price: "15.00"
    },
    {
      img: "/images/temp/dish3.png",
      name: "Veg burger",
      price: "15.00"
    },
    {
      img: "/images/temp/dish2.png",
      name: "Creamy strawberry waffles",
      price: "15.00"
    },
    {
      img: "/images/temp/dish3.png",
      name: "Veg burger",
      price: "15.00"
    },
    {
      img: "/images/temp/dish2.png",
      name: "Creamy strawberry waffles",
      price: "15.00"
    },
    {
      img: "/images/temp/dish3.png",
      name: "Veg burger",
      price: "15.00"
    },
    {
      img: "/images/temp/dish2.png",
      name: "Creamy strawberry waffles",
      price: "15.00"
    },
  ]

  return (
    <div className='px-[5%] flex flex-col gap-[20px] py-[30px]'>
      <div className='flex w-full md:justify-end gap-[10px] mt-[30px]'>
        <Button
          variant='outlined'
          color='blue'
          className='p-3 px-5 rounded-[5px] border-[#7E5CEB] w-full md:w-auto'
        >
          Schedule a dish
        </Button>
        <Button
          variant='filled'
          color='blue'
          className='p-3 px-5 rounded-[5px] bg-[#7E5CEB] w-full md:w-auto'
        >
          Add New Dish
        </Button>
      </div>
      <div className='w-full border-b-[1px] border-[#E3E3E3] flex font-[600] text-[14px] md:text-[16px] leading-[24px] text-[#707070]'>
        <span
          className={`${view == "scheduled" ? "text-[#7E5CEB] border-b-[4px] border-[#7E5CEB]" : ""} pb-[10px] hover:cursor-pointer px-[10px]`}
          onClick={() => setView('scheduled')}
        >Scheduled</span>
        <span
          className={`${view == "unscheduled" ? "text-[#7E5CEB] border-b-[4px] border-[#7E5CEB]" : ""} pb-[10px] hover:cursor-pointer px-[10px]`}
          onClick={() => setView('unscheduled')}
        >Unscheduled</span>
        <span
          className={`${view == "drafts" ? "text-[#7E5CEB] border-b-[4px] border-[#7E5CEB]" : ""} pb-[10px] hover:cursor-pointer px-[10px]`}
          onClick={() => setView('drafts')}
        >Drafts</span>
      </div>
      {view == 'scheduled' &&
        <div className='flex flex-col gap-[20px]'>
          {scheduledDish.map((dish, id) => {
            return (
              <CardChefDish data={dish} key={id} />
            )
          })}
        </div>
      }
      {view == 'unscheduled' &&
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[20px]'>
          {unScheduledDish.map((dish, id) => {
            return (
              <UnscheduledCard data={dish} key={id} />
            )
          })}
        </div>
      }
    </div>
  )
}
