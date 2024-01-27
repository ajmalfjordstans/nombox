import { Button } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'

export default function UploadFileComponent() {
  return (
    <div className="px-[20px] md:px-[60px]">
      <div className='flex gap-[10px]'>
        <div className='border-[1px] border-[#707070] rounded-[5px] w-full max-w-[350px] flex'>
          <div className='flex justify-center items-center rounded-[5px] h-[48px] w-[48px] bg-[#7E5CEB]'>
            <Image src="/logo/chef/upload.svg" height={20} width={20} alt=''/>
          </div>
          <p className='font-[400] text-[14px] leading-[25.2px] text-[#9098B1] p-[10px]'>Select File</p>
        </div>
        <Button
          variant='filled'
          color='blue'
          className='p-3 px-5 rounded-[5px] bg-[#7E5CEB]'

        >
          Upload
        </Button>
      </div>
      <div className='flex gap-[10px] mt-[30px]'>
        <Button
          variant='filled'
          color='blue'
          className='p-3 px-5 rounded-[5px] bg-[#7E5CEB]'
        >
          Next
        </Button>
        <Button
          variant='outlined'
          color='blue'
          className='p-3 px-5 rounded-[5px] border-[#7E5CEB]'
        >
          Skip this step
        </Button>
      </div>
    </div>
  )
}
