'use client'

import React from 'react'
import UserSideDrawer from './side-drawer'
import { useSearchParams } from 'next/navigation';
import MyProfile from './my-profile';
import Orders from './orders';
import Payments from './payments';
import DrawerContent from './drawer';
import Image from 'next/image';

export default function UserProfile() {
  const section = useSearchParams().get('section')
  const [open, setOpen] = React.useState(false);

  const renderCategoryComponent = () => {
    if (section === "my-profile") {
      return <MyProfile />;
    } else if (section === "orders") {
      return <Orders />;
    } else if (section == 'payments') {
      return <Payments />;
    }
    //  else if (section == 'help') {
    //   return <Events />;
    // } else if (section == 'about') {
    //   return <Events />;
    // }
  };

  return (
    <div className='flex'>
      <UserSideDrawer open={open} setOpen={setOpen} />
      <div className='hidden lg:block'>
        <DrawerContent />
      </div>
      <div className='overflow-hidden w-full'>
        <Image
          src="/logo/Profile.svg"
          height={24}
          width={24}
          alt='icon'
          onClick={() => setOpen(true)}
          className='m-[15px] lg:hidden'
        ></Image>
        {renderCategoryComponent()}
      </div>
    </div>
  )
}
