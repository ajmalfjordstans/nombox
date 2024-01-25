import CardOrder from '@/components/cards/card-order'
import React from 'react'
import CardPrice from '@/components/cards/card-price'
import CardCartOne from '@/components/cards/card-cart-one'

export default function OrderPage() {

  return (
    <div className='container mx-auto px-[5%] lg:px-0 py-[30px] flex gap-[17px]'>
      <div className='w-full flex flex-col gap-[15px] lg:gap-[20px]'>
        <CardCartOne/>
        <CardCartOne/>
      </div>
      <div className='hidden lg:block'>
        <CardPrice price="30.00" delivery="NA" items="2" />
      </div>
    </div>
  )
}
