import CardCartTwo from '@/components/cards/card-cart-two'
import React from 'react'
import { DailyDishes } from "@/Context/constants";
import CardDish from '@/components/cards/card-dishes';


export default function page() {
  return (
    <div className='container mx-auto px-8 py-12 lg:px-0'>
      <p className='font-[600] text-[18px] text-primary mb-[20px]'>Add more dishes to cart</p>
      <p className='font-[400] text-[16px] text-primary my-[20px]'>Selected item</p>
      <CardCartTwo />
      <p className='font-[600] text-[18px] text-primary my-[20px]'>Chef’s other available items for today</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-[40px]">
        {DailyDishes?.slice(0, 2).map((data, id) => {
          return (
            <CardDish dish={data} key={id} />
          )
        })}
      </div>
    </div>
  )
}
