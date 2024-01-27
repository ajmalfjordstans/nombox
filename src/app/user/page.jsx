'use client'

import { StickyNavbar } from '@/components/header'
import LoginForm from './login'
import { useState } from 'react'
import RegisterForm from './register'
import Image from 'next/image'

export default function UserPage() {
  const [login, setLogin] = useState(true)
  return (
    <div className={`${login ? "max-h-[100vh]" : "max-h-[100vh]"} overflow-hidden`}>
      <div className="grid md:grid-cols-2">
        <Image src="/images/loginbg.png" alt="" height={196} width={196} className="h-full w-full object-cover top-0 hidden md:block" />
        {login ?
          <LoginForm setLogin={setLogin} />
          :
          <RegisterForm setLogin={setLogin} />
        }
      </div>
    </div>
  )
}