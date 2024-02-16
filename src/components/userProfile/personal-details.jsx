import React from 'react'
import { Button } from '@material-tailwind/react'

export default function PersonalDetails() {
  return (
    <div className='w-full bg-[white] shadow-custom grid grid-cols-2 md:grid-cols-3 text-primary p-[30px] rounded-[10px] gap-[10px]'>
      <div className='flex flex-col gap-[20px]'>
        <div className='flex flex-col'>
          <span className='text-[12px] md:text-[14px] font-[400]'>First name</span>
          <span className='text-[12px] md:text-[16px] font-[500]'>John</span>
        </div>
        <div className='flex flex-col'>
          <span className='text-[12px] md:text-[14px] font-[400]'>Email</span>
          <span className='text-[12px] md:text-[16px] font-[500]'>johndoe@gmail.com</span>
        </div>
      </div>
      <div className='flex flex-col gap-[20px]'>
        <div className='flex flex-col'>
          <span className='text-[12px] md:text-[14px] font-[400]'>Last name</span>
          <span className='text-[12px] md:text-[16px] font-[500]'>Doe</span>
        </div>
        <div className='flex flex-col'>
          <span className='text-[12px] md:text-[14px] font-[400]'>Phone</span>
          <span className='text-[12px] md:text-[16px] font-[500]'>+91 9090909090</span>
        </div>
      </div>
      <div className='flex md:flex-col gap-[20px] col-span-2 md:col-span-1'>
        <Button
          color='blue'
          className='p-2'
        >
          Edit Profile
        </Button>
        <Button
          color='blue'
          variant="outlined"
          className='p-2'
        >
          Change Password
        </Button>
      </div>
    </div>
  )
}
