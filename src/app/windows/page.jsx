import React from 'react'
import ItemDetailsOne from './item-details'
import ItemDetailsTwo from './item-details-two'

export default function page() {
  return (
    <div className='py-[100px] flex flex-col gap-20 w-full items-center'>
      <ItemDetailsOne />
      <ItemDetailsTwo />
    </div>
  )
}
