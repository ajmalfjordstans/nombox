import React from 'react'

export function ProgressDark({ progress }) {
  return (
    <div className="circular-progress bg-[#2E266F] rounded-full h-[50px] w-[50px] flex justify-center items-center"
      style={{
        background: `conic-gradient(#FFFFFF ${progress * 3.6}deg, #2E266F 0deg)`
      }}
    >
      <span className="progress-value h-[38px] w-[38px] bg-[#7E5CEB] rounded-full flex justify-center items-center font-[700] text-[14px] leading-[21px] text-white">
        {progress}%
      </span>
    </div>
  )
}

export function ProgressLight({ progress }) {
  return (
    <div className="circular-progress bg-[#ECE7FC] rounded-full h-[50px] w-[50px] flex justify-center items-center"
      style={{
        background: `conic-gradient(#7E5CEB ${progress * 3.6}deg, #FFFFFF 0deg)`
      }}
    >
      <span className="progress-value h-[38px] w-[38px] bg-[#FFFFFF] rounded-full flex justify-center items-center font-[700] text-[14px] leading-[21px] text-[#7E5CEB]">
        {progress}%
      </span>
    </div>
  )
}
