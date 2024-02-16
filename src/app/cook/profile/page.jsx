'use client'

import React, { useState } from 'react'
import SideMenu from './side-menu'
import CompleteProfile from './section-complete-profile'
import Dishes from './section-dish'
import Calendar from './section-calendar'
import Orders from './section-orders'
import Messages from './section-messages'
import Rating from './section-rating'
import Earnings from './section-earnings'
import ChefSideDrawer from './side-drawer'
import { Button } from '@material-tailwind/react'
import { StickyNavbar } from '@/components/header'

export function Section(showSection, progress) {
  if (showSection == 'complete')
    return <CompleteProfile progress={progress} />
  else if (showSection == 'dishes')
    return <Dishes />
  else if (showSection == 'calendar')
    return <Calendar />
  else if (showSection == 'orders')
    return <Orders />
  else if (showSection == 'messages')
    return <Messages />
  else if (showSection == 'rating')
    return <Rating />
  else if (showSection == 'earnings')
    return <Earnings />
  else if (showSection == 'settings')
    return <CompleteProfile progress={progress} />
}

export default function Page() {
  const [progress, setProgress] = useState(50)
  const [open, setOpen] = useState(false);
  const [showSection, setShowSection] = useState('calendar')
  return (
    <>
      <StickyNavbar />
      <div className='flex'>
        <ChefSideDrawer open={open} setOpen={setOpen} progress={progress} setShowSection={setShowSection} showSection={showSection} />
        <div className='hidden lg:block'>
          <SideMenu progress={progress} setShowSection={setShowSection} showSection={showSection} />
        </div>

        <div className='w-full'>
          {/* <Button onClick={()=>setOpen(true)}>Open Drawer</Button> */}
          {Section(showSection, progress)}
        </div>
      </div>
    </>
  )
}
