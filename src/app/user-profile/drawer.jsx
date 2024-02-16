'use client'

import { Button } from '@material-tailwind/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'

export default function DrawerContent({ closeDrawer, }) {
  const searchParams = useSearchParams()
  const section = searchParams.get('section')
  return (

    <div className='w-[344px] bg-white flex flex-col h-[90dvh] pb-[46px]'>
      <div >
        <div className='flex gap-[30px] relative p-[30px]'>
          <Image
            src="/images/temp/profile5.png"
            height={80}
            width={80}
            className='rounded-[80px]'
            alt='profile'
          />
          <div className='font-[400] text-[#25265E] flex flex-col justify-center'>
            <span className='text-[24px] '>John Doe</span>
            <span className='text-[16px]'>johndoe@gmail.com</span>
          </div>
          <button className='bg-[#7E5CEB] absolute h-[18px] w-[18px] top-3 right-3 rounded-full flex justify-center items-center'>
            <Image
              src="/logo/Edit.svg"
              height={12}
              width={12}
              alt='edit'
            />
          </button>
        </div>

        <div className='text-[16px] font-[500] leading-[24px] text-[#7E5CEB] '>
          <Link
            href={{
              query: {
                section: "my-profile"
              }
            }}
            onClick={() => closeDrawer ? closeDrawer() : ''}
          >
            <button className={`flex w-full gap-[30px] py-[15px] pl-[30px] ${section == "my-profile" ? 'bg-[#ECE7FC]' : ''}`}>
              <Image
                src="/logo/Profile.svg"
                height={24}
                width={24}
                alt='icon'
              >
              </Image>
              <span className=''>My profile</span>
            </button>
          </Link>
          <Link
            href={{
              query: {
                section: "orders"
              }
            }}
            onClick={() => closeDrawer ? closeDrawer() : ''}
          >
            <button className={`flex w-full gap-[30px] py-[15px] pl-[30px] ${section == "orders" ? 'bg-[#ECE7FC]' : ''}`}>
              <Image
                src="/logo/Orders.svg"
                height={24}
                width={24}
                alt='icon'
              >
              </Image>
              <span className=''>Orders</span>
            </button>
          </Link>
          <Link
            href={{
              query: {
                section: "payments"
              }
            }}
            onClick={() => closeDrawer ? closeDrawer() : ''}
          >
            <button className={`flex w-full gap-[30px] py-[15px] pl-[30px] ${section == "payments" ? 'bg-[#ECE7FC]' : ''}`}>
              <Image
                src="/logo/Wallet.svg"
                height={24}
                width={24}
                alt='icon'
              >
              </Image>
              <span className=''>Payments</span>
            </button>
          </Link>
          <Link
            href={{
              query: {
                section: "help"
              }
            }}
            onClick={() => closeDrawer ? closeDrawer() : ''}
          >
            <button className={`flex w-full gap-[30px] py-[15px] pl-[30px] ${section == "help" ? 'bg-[#ECE7FC]' : ''}`}>
              <Image
                src="/logo/Help.svg"
                height={24}
                width={24}
                alt='icon'
              >
              </Image>
              <span className=''>Help</span>
            </button>
          </Link>
          <Link
            href={{
              query: {
                section: "about"
              }
            }}
            onClick={() => closeDrawer ? closeDrawer() : ''}
          >
            <button className={`flex w-full gap-[30px] py-[15px] pl-[30px] ${section == "about" ? 'bg-[#ECE7FC]' : ''}`}>
              <Image
                src="/logo/About.svg"
                height={24}
                width={24}
                alt='icon'
              >
              </Image>
              <span className=''>About</span>
            </button>
          </Link>
        </div>
      </div>
      <Button
        className='rounded-[5px] bg-[#7E5CEB] mx-[30px] mt-[50px]'
      >
        Logout
      </Button>
    </div>
  )
}
