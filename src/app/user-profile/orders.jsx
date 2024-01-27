'use client'

import ActiveOrder from '@/components/userProfile/active-order'
import PastOrder from '@/components/userProfile/past-order'
import React, { useState } from 'react'

export default function Orders() {
  const [orders, setOrders] = useState('active')

  const renderOrderSection = () => {
    return orders == 'active' ? <ActiveOrder /> : <PastOrder />
  }
  return (
    <div className='p-[30px] max-w-[1200px] mx-auto w-full flex flex-col overflow-hidden'>
      <div className='w-full border-b-[1px] border-[#E3E3E3] text-[16px] font-[600] pb-[10px]'>
        <span
          className={`${orders == "active" ? "text-[#7E5CEB] border-b-[4px] border-[#7E5CEB]" : "text-[#707070]"} p-[10px] hover:cursor-pointer`}
          onClick={() => setOrders('active')}
        >Active orders</span>
        <span
          className={`${orders == "past" ? "text-[#7E5CEB] border-b-[4px] border-[#7E5CEB]" : "text-[#707070]"} p-[10px] hover:cursor-pointer`}
          onClick={() => setOrders('past')}
        >Past orders</span>
      </div>
      {renderOrderSection()}
    </div>
  )
}
