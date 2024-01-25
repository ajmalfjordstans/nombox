import { ChefsNear, DailyDishes } from '@/Context/constants'
import ChefSwiper from '@/components/swiper/chef-swiper'
import DishesSwiper from '@/components/swiper/dishes-swiper'
import PersonalDetails from '@/components/userProfile/personal-details'

import React from 'react'

export default function MyProfile() {
  return (
    <div className='p-[30px] max-w-[1200px] mx-auto w-full flex flex-col overflow-hidden'>
      <PersonalDetails />
      <div className='mt-[30px]'>
        <span className='text-[20px] font-[600] text-primary'>Following</span>
        <ChefSwiper chefs={ChefsNear} size={'small'} />
      </div>
      <div className='mt-[30px]'>
        <span className='text-[20px] font-[600] text-primary'>Saved items</span>
        <DishesSwiper data={DailyDishes} size={'small'}/>
      </div>

    </div>
  )
}
