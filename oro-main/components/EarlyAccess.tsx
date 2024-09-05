import React from 'react'
import SecuredCards from './SecuredCards'
export default function EarlyAccess() {
  return (
    <div className=' space-y-28 pb-28 text-white w-full'>
        <div className="bg-white w-full flex flex-col sm:flex-row gap-5  bg-opacity-5 py-[48px] px-5 sm:px-[37px] rounded-3xl justify-between">

        <div className="h-full sm:w-[20%] my-auto ml-3 flex flex-col gap-4 ">
          <p className="text-base text-white/60 ">WHY ORO</p>
          <p className="sm:text-[27px] text-[7vw] leading-8 font-semibold">
            <span className="text-transparent bg-gradient-to-r from-[#F5D89A] to-[#D1B16F] bg-clip-text inline-block">
              Secured
            </span>{" "}
            like <br />
            never before
          </p>
          <button className="border px-2 text-[14px] w-[70%] mt-1 py-[7px] rounded-full text-[#CFAF6C] border-[#CFAF6C] hover:bg-[#CFAF6C] hover:text-black hover:font-semibold transition-all duration-500  ">Get Early Access</button>
        </div>
            <div className='w-full overflow-x-scroll no-scrollbar'>
            <SecuredCards/>
            </div>
        

        </div>
    </div>
  )
}
