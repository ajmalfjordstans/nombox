import CardOrder from '@/components/cards/card-order'
import React from 'react'
import CartProductDetails from './product-details'
import OrderDetails from './order-details'
import CardPrice from '@/components/cards/card-price'
import { StickyNavbar } from '@/components/header'

export default function OrderPage() {

  return (
    <>
      <StickyNavbar />
      <div className='container mx-auto px-[5%] lg:px-0 py-[30px] flex gap-[17px]'>
        <div className='w-full'>
          <CartProductDetails />
          <OrderDetails />
        </div>
        <div className='hidden lg:block'>
          <CardPrice price="15.00" delivery="NA" items="2" />
        </div>
      </div>
    </>
  )
}
