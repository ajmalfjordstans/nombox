import PaymentCard from '@/components/cards/card-payment-card'
import { Button } from '@material-tailwind/react'
import React from 'react'

export default function Cards() {
  return (
    <div className='px-[5%]'>
      <p className='text-center md:text-left font-[600] text-[24px] md:text-[20px] leading-[32px] text-primary'>Complete payment</p>
      <p className='font-[500] text-[14px] md:text-[18px] leading-[32px] text-primary mt-[35px]'>Select from saved cards</p>
      <PaymentCard />
      <p className='font-[700] text-[13px] leading-[42px] text-primary text-center'>OR</p>
      <Button
        variant='filled'
        className='font-poppins capitalize bg-[#7E5CEB] font-[500] rounded-[5px]'
        fullWidth
      >
        Add New Card
      </Button>
     <div className='h-[100px] w-full'></div>
    </div>
  )
}
