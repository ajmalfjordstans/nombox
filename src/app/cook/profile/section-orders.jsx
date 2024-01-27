import { Button } from '@material-tailwind/react'
import React, { useState } from 'react'

export function ActiveCard({ data }) {
  return (
    <div className='bg-white w-full shadow-custom rounded-[10px] font-[600] text-primary'>
      <div className='flex flex-col md:flex-row justify-between p-[15px] md:px-[40px] md:py-[20px]'>
        <div className='font-[600] leading-[22px] text-[#2E266F]'>
          <p className='text-[18px]'>{data.name}</p>
          <p className='text-[14px] mt-[5px]'>Status :<span className='text-[#7E5CEB]'>{data.status}</span></p>
        </div>
        <div className='flex md:justify-end items-center gap-[10px] mt-[10px] md:mt-0'>
          <Button
            variant='outlined'
            color='blue'
            className='p-3 md:px-5 rounded-[5px] border-[#7E5CEB] w-full md:w-auto'
          >
            Message customer
          </Button>
          <Button
            variant='filled'
            color='blue'
            className='p-3 md:px-5 rounded-[5px] bg-[#7E5CEB] w-full md:w-auto'
          >
            Confirm food handoff
          </Button>
        </div>
      </div>
      <div className='w-full h-[1px] bg-[#ECE7FC]'></div>
      <div className='p-[15px] md:px-[40px] md:py-[20px]'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-[20px]'>
          <div>
            <p className='text-[16px] leading-[22px]'>Home delivery</p>
            <p className='text-[12px] leading-[18px]'>Delivery date & Time</p>
            <p className='font-[500] text-[12px] leading-[18px]'>{data.date}</p>
          </div>
          <div>
            <p className='text-[16px] leading-[22px]'>Delivery address</p>
            <p className='font-[500] text-[12px] leading-[18px]'>{data.address}</p>
          </div>
          <div>
            <p className='text-[16px] leading-[22px]'>Add-ons</p>
            {data.addOn.map((item, id) => {
              return (<p className='font-[500] text-[12px] leading-[18px]' key={id}>{item}</p>)
            })}
          </div>
          <div>
            <p className='text-[16px] leading-[22px]'>Payment status</p>
            <p className='font-[500] text-[12px] leading-[18px]'>{data.payment}</p>
          </div>
          <div>
            <p className='text-[16px] leading-[22px]'>Notes for cook</p>
            <p className='font-[500] text-[12px] leading-[18px] italic'>“{data.note}”</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function PendingCard({ data }) {
  return (
    <div className='bg-white w-full shadow-custom rounded-[10px] font-[600] text-primary'>
      <div className='flex flex-col md:flex-row justify-between p-[15px] md:px-[40px] md:py-[20px]'>
        <div className='font-[600] leading-[22px] text-[#2E266F] flex items-center'>
          <p className='text-[18px]'>{data.name}</p>
        </div>
        <div className='flex md:justify-end items-center gap-[10px] mt-[10px] md:mt-0'>
          <Button
            variant='outlined'
            color='blue'
            className='p-3 md:px-5 rounded-[5px] border-[#7E5CEB] w-full md:w-auto'
          >
            Reject order
          </Button>
          <Button
            variant='filled'
            color='blue'
            className='p-3 md:px-5 rounded-[5px] bg-[#7E5CEB] w-full md:w-auto'
          >
            Confirm order
          </Button>
        </div>
      </div>
      <div className='w-full h-[1px] bg-[#ECE7FC]'></div>
      <div className='p-[15px] md:px-[40px] md:py-[20px]'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-[20px]'>
          <div>
            <p className='text-[16px] leading-[22px]'>Self pickup</p>
            <p className='text-[12px] leading-[18px]'>Pickup date & Time</p>
            <p className='font-[500] text-[12px] leading-[18px]'>{data.date}</p>
          </div>
          <div>
            <p className='text-[16px] leading-[22px]'>Add-ons</p>
            {data.addOn.map((item, id) => {
              return (<p className='font-[500] text-[12px] leading-[18px]' key={id}>{item}</p>)
            })}
          </div>
          <div>
            <p className='text-[16px] leading-[22px]'>Notes for cook</p>
            <p className='font-[500] text-[12px] leading-[18px] italic'>“{data.note}”</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default function Orders() {
  const [view, setView] = useState('Active')
  const activeOrder = [
    {
      name: "Mexican egg noodles x 2",
      status: "Customer pick up complete",
      date: "24 January 2021, 06:00 PM",
      address: "John Doe, Unit 686, Moat House, 54 Bloomfield Avenue, Belfast, BT5 5 AD.",
      addOn: ['Tomato ketchup (FREE)'],
      payment: "Completed",
      note: "Please avoid using too much pepper on noodles."
    },
    {
      name: "Strawberry waffles x 2",
      status: "__",
      date: "24 January 2021, 06:00 PM",
      address: "John Doe, Unit 686, Moat House, 54 Bloomfield Avenue, Belfast, BT5 5 AD.",
      addOn: ['Tomato ketchup (FREE)'],
      payment: "Completed",
      note: "Please avoid using too much pepper on noodles."
    },
  ]
  const pendingOrder = [
    {
      name: "Strawberry waffles x 2",
      date: "24 January 2021, 06:00 PM",
      addOn: ['Tomato ketchup (FREE)'],
      note: "Please avoid using too much pepper on noodles."
    },
  ]
  return (
    <>
      <div className='w-full border-b-[1px] border-[#E3E3E3] flex font-[600] text-[14px] md:text-[16px] leading-[24px] text-[#707070]'>
        <span
          className={`${view == "Active" ? "text-[#7E5CEB] border-b-[4px] border-[#7E5CEB]" : ""} pb-[10px] hover:cursor-pointer px-[10px]`}
          onClick={() => setView('Active')}
        >Active</span>
        <span
          className={`${view == "Pending" ? "text-[#7E5CEB] border-b-[4px] border-[#7E5CEB]" : ""} pb-[10px] hover:cursor-pointer px-[10px]`}
          onClick={() => setView('Pending')}
        >Pending</span>
        <span
          className={`${view == "Completed" ? "text-[#7E5CEB] border-b-[4px] border-[#7E5CEB]" : ""} pb-[10px] hover:cursor-pointer px-[10px]`}
          onClick={() => setView('Completed')}
        >Completed</span>
      </div>
      {view == 'Active' &&
        <div className='flex flex-col gap-[20px]'>
          {activeOrder.map((dish, id) => {
            return (
              <ActiveCard data={dish} key={id} />
            )
          })}
        </div>
      }
      {view == 'Pending' &&
        <div className='flex flex-col gap-[20px]'>
          {pendingOrder.map((dish, id) => {
            return (
              <PendingCard data={dish} key={id} />
            )
          })}
        </div>
      }
    </>
  )
}
