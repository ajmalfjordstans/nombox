'use client'

import PaymentCard from '@/components/userProfile/payment-card'
import { Button } from '@material-tailwind/react'
import React from 'react'

export default function Payments() {
  return (
    <div className='p-[30px] max-w-[1200px] mx-auto w-full flex flex-col overflow-hidden'>
      <div className='w-full flex justify-end'>
        <Button
          color='blue'
          className='h-[40px]  w-[156px] md:w-[225px] bg-[#7E5CEB]'
        >Add New Card</Button>
      </div>
      <PaymentCard />

    </div>
  )
}
