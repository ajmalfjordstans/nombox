import { Button } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'

export function RatingProgress({ star, progress }) {
  return (
    <div className='flex gap-[10px] items-center justify-evenly'>
      <p>{star}</p>
      <div className='bg-[#ECE7FC] h-[6px] w-full max-w-[200px] z-[10] rounded-[10px] mt-[6px]'>
        <div className={`w-[${progress * 2}px] bg-[#FFCB57] h-[6px] z-[20] rounded-[10px]`}></div>
      </div>
      <p>{progress}%</p>
    </div>
  )
}

export function IndividualRating() {
  return (
    <div className='border-t-[1px] border-[#EEF0F6] py-[30px]'>
      <div className='flex w-full justify-between'>
        <div className='flex gap-[10px] items-center'>
          <p>5/5</p>
          <div className="my-2 flex gap-1">
            {Array(5).fill().map((_, index) => (
              <Image
                key={index}
                height={14}
                width={14}
                src="/logo/star-filled.svg"
                alt={`star-${index + 1}`}
              />
            ))}
          </div>
        </div>
        <p>Posted May 17, 2018</p>
      </div>
      <div className='flex w-full justify-between mt-[10px] flex-wrap'>
        <div className='flex gap-[10px]'>
          <div className='w-[48px] h-[48px] rounded-full flex justify-center items-center bg-[#F2F5FE] font-[700] text-[14px] leading-[24px] text-[#7E5CEB]'>
            AW
          </div>
          <div className='font-[500] text-[14px] leading-[20px]'>
            <p className='text-primary'>Anna Wilson</p>
            <p className='text-[#707070]'>Great Food!! Loved the packaging too!!!</p>
          </div>
        </div>
        <Button
          className='font-[600] text-[14px] leading-[32px] capitalize bg-[#7E5CEB] mt-[10px]'
        >Replay</Button>
      </div>
    </div>
  )
}

export default function Rating() {
  return (
    <div className='w-full shadow-custom md:p-[40px] rounded-[10px] p-[15px]'>
      <div className='flex gap-[10px] md:gap-[40px] flex-wrap pb-[15px] md:pb-[40px]'>
        <div>
          <p className='font-[700] text-[18px] leading-[18px] text-primary'>Reviews (02)</p>
          <div className='mt-[20px]'>
            <p className='font-[500] text-[18px] leading-[27px] text-[#707070]'>4.8/5</p>
            <div className="my-2 flex gap-1">
              {Array(5).fill().map((_, index) => (
                <Image
                  key={index}
                  height={14}
                  width={14}
                  src="/logo/star-filled.svg"
                  alt={`star-${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className='w-[300px] flex flex-col gap-[10px]'>
          {/* <ratingProgress star="5" progress="80" />
          {ratingProgress(5, 80)} */}
          <div className='flex gap-[10px] items-center justify-evenly'>
            <p>5</p>
            <div className='bg-[#ECE7FC] h-[6px] w-full max-w-[200px] z-[10] rounded-[10px] mt-[6px]'>
              <div className={`w-[${80 * 2}px] bg-[#FFCB57] h-[6px] z-[20] rounded-[10px]`}></div>
            </div>
            <p>{80}%</p>
          </div>
          <div className='flex gap-[10px] items-center justify-evenly'>
            <p>4</p>
            <div className='bg-[#ECE7FC] h-[6px] w-full max-w-[200px] z-[10] rounded-[10px] mt-[6px]'>
              <div className={`w-[${10 * 2}px] bg-[#FFCB57] h-[6px] z-[20] rounded-[10px]`}></div>
            </div>
            <p>{10}%</p>
          </div>
          <div className='flex gap-[10px] items-center justify-evenly'>
            <p>3</p>
            <div className='bg-[#ECE7FC] h-[6px] w-full max-w-[200px] z-[10] rounded-[10px] mt-[6px]'>
              <div className={`w-[${8 * 2}px] bg-[#FFCB57] h-[6px] z-[20] rounded-[10px]`}></div>
            </div>
            <p>{8}%</p>
          </div>
          <div className='flex gap-[10px] items-center justify-evenly'>
            <p>2</p>
            <div className='bg-[#ECE7FC] h-[6px] w-full max-w-[200px] z-[10] rounded-[10px] mt-[6px]'>
              <div className={`w-[${0 * 2}px] bg-[#FFCB57] h-[6px] z-[20] rounded-[10px]`}></div>
            </div>
            <p>{0}%</p>
          </div>
          <div className='flex gap-[10px] items-center justify-evenly'>
            <p>1</p>
            <div className='bg-[#ECE7FC] h-[6px] w-full max-w-[200px] z-[10] rounded-[10px] mt-[6px]'>
              <div className={`w-[${2 * 2}px] bg-[#FFCB57] h-[6px] z-[20] rounded-[10px]`}></div>
            </div>
            <p>{2}%</p>
          </div>
        </div>
      </div>
      {IndividualRating()}
      {IndividualRating()}
    </div>
  )
}
