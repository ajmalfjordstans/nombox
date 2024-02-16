'use client'

import { StickyNavbar } from "@/components/header"
import Image from "next/image"
import { useState } from "react"
import LoginForm from "./login"
import RegisterForm from "./register"
import Verify from "./verify"
import Success from "./success"

export default function LoginChef() {
  const [login, setLogin] = useState(false)
  const [registerStep, setRegisterStep] = useState('register')

  const step = () => {
    if (registerStep === 'register') {
      return (
        <RegisterForm setLogin={setLogin} />
      )
    } else if (registerStep === 'verify') {
      return (
        <Verify />
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
        <Image src="/images/cookLogin.png" alt="" height={896} width={896} className="h-full w-full object-cover top-0 hidden md:block " />
        {/* <div className={`h-[100vh] w-full top-0 hidden md:block bg-[url('/images/cookLogin.png')] bg-no-repeat bg-bottom`} ></div> */}
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