import { Button } from '@material-tailwind/react'
import React from 'react'

export default function CardChefDish({ data }) {
  // console.log(data);
  return (
    <div className='w-full shadow-custom p-[15px] md:p-[40px] rounded-[10px]'>
      <p className='font-[600] text-[18px] leading-[22px] text-primary'>{data.name}</p>
      <div className='flex justify-between flex-col md:flex-row font-[400]'>
        <div className='flex gap-[10px] justify-between w-full md:pr-[40px] flex-wrap mt-[20px]'>
          <div>
            <div>
              <p className='text-[12px] leading-[18px] text-[#707070]'>Order by</p>
              <p className='text-[14px] leading-[21px] text-primary'>{data.orderBy}</p>
            </div>
            <div className='mt-[10px] md:mt-[20px]'>
              <p className='text-[12px] leading-[18px] text-[#707070]'>Pickup/delivery date & Time</p>
              <p className='text-[14px] leading-[21px] text-primary'>{data.pickupOrDeliveryDate}</p>
            </div>
          </div>
          <div>
            <div>
              <p className='text-[12px] leading-[18px] text-[#707070]'>Category</p>
              <p className='text-[14px] leading-[21px] text-primary'>{data.category}</p>
            </div>
            <div className='mt-[10px] md:mt-[20px]'>
              <p className='text-[12px] leading-[18px] text-[#707070]'>Price details</p>
              <p className='text-[14px] leading-[21px] text-primary'>Actual price : £{data.actualPrice}</p>
              <p className='text-[14px] leading-[21px] text-primary'>Sale price : £{data.salePrice}</p>
            </div>
          </div>
          <div>
            <div>
              <p className='text-[12px] leading-[18px] text-[#707070]'>Number of portions</p>
              <p className='text-[14px] leading-[21px] text-primary'>{data.portions}</p>
            </div>
          </div>
        </div>
        <div className='flex md:flex-col gap-[10px] py-[10px]'>
          <Button
            variant='filled'
            color='blue'
            className='p-3 px-5 rounded-[5px] bg-[#7E5CEB] w-full'
          >
            Edit
          </Button>
          <Button
            variant='outlined'
            color='blue'
            className='p-3 px-5 rounded-[5px] border-[#7E5CEB] w-full'
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  )
}
