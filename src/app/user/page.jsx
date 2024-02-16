'use client'

import { StickyNavbar } from '@/components/header'
import LoginForm from './login'
import { useState } from 'react'
import RegisterForm from './register'
import Image from 'next/image'
import Verify from './verify'
import Hear from './hear'
import Success from './success'
import Cards from './cards'

export default function UserPage() {
  const [login, setLogin] = useState(true)
  const [registerStep, setRegisterStep] = useState('cards')

  const step = () => {
    if (registerStep === 'register') {
      return (
        <RegisterForm setLogin={setLogin} />
      )
    } else if (registerStep === 'verify') {
      return (
        <Verify />
      )
    } else if (registerStep === 'hear') {
      return (
        <Hear />
      )
    } else if (registerStep === 'payment') {
      return (
        <Success />
      )
    } else if (registerStep === 'cards') {
      return (
        <Cards />
      )
    } else if (registerStep === 'success') {
      return (
        <Success />
      )
    }
  }
  return (
    <div className={`${login ? "max-h-[100vh]" : "max-h-[100dvh]"} overflow-hidden`}>
      <StickyNavbar />
      <div className="grid md:grid-cols-2 ">
        {/* <Image src="/images/loginbg.png" alt="" height={896} width={896} className="h-full w-full object-cover top-0 hidden md:block " /> */}
        <div className={`h-[100vh] w-full object-cover top-0 hidden md:block bg-[url('/images/loginbg.png')] bg-center bg-no-repeat`} ></div>
        {login ?
          <LoginForm setLogin={setLogin} />
          :
          // <RegisterForm setLogin={setLogin} />
          <div className='w-full flex justify-center pt-[8vh] overflow-y-scroll h-[90dvh]'>
            {step()}
          </div>
        }
      </div>
    </div>
  )
}