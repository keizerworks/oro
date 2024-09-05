import React from 'react'
import logo from "@/public/blackLogo.svg"
import Image from 'next/image'

export default function Footer() {
  return (
    <div className='w-full  pt-7 sm:pt-9 pb-5 sm:pb-6 flex justify-between sm:px-6 px-4 items-center text-black font-jost text-lg bg-white'>
        <div className='space-y-1 sm:space-y-3 w-[50%] '>
          <div className='flex gap-2 items-center '>
            <Image width={30} height={30} alt='logo' src={logo} className="size-7 sm:size-8"/>
            <p className='font-bold text-2xl font-jost text-'>ORO</p>
            </div>
            <p className='text-opacity-50 text-[3vw] leading-4 sm:leading-none sm:text-base'>Copyright © 2024 ORO Gold. All rights reserved.</p>

        </div>

        <p className='text-[3vw] sm:text-base mt-4 sm:mt-0'>usman@orogold.app</p>
    </div>
  )
}
