import React from 'react'

export default function CardPrice({price, delivery, items}) {
  return (
    <div className='w-[363px] h-auto shadow-custom rounded-[10px] border-[1px] border-[#F2F2F2] bg-white py-[20px] text-[14px] font-[500] text-primary'>
      <span className='text-[18px] font-[600] leading-[22px] px-[23px]'>Price details</span>
      <div className=' px-[23px]'>
        <div className='flex w-full justify-between'>
          <span>Price ({items} item)</span>
          <span>£{price}</span>
        </div>
        <div className='flex w-full justify-between'>
          <span>Delivery charges</span>
          <span>{delivery}</span>
        </div>
      </div>
      <div className='h-[1px] bg-[#F2F2F2] w-full my-[15px]'></div>
      <div className='flex w-full justify-between px-[23px]'>
        <span>Total Amount</span>
        <span className='text-[24px] font-[700] text-[#7E5CEB]'>£{price}</span>
      </div>
    </div>
  )
}
