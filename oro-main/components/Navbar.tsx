import React from 'react'
import RoundLogo from './RoundLogo'
import Button from './Button'

export default function Navbar() {
  return (
    <div className='w-full font-jost text-white flex justify-between items-center py-5'>
      <div className='flex items-center'>
        <div className='scale-[60%]'>
        <RoundLogo/>
        </div>
        
        <p className=' font-bold text-2xl'>ORO</p>
      </div>

      <div className='flex gap-6 text-xl font-extralight opacity-90 mr-60'>
        <p>About Us</p>
        <p>Features</p>
        <p>Contact Us</p>
      </div>

      <div className="px-8  font-jost py-2 rounded-full bg-white text-black bg-gradient-to-r from-[#CFAF6C] to-[#F7DA9C] text-lg">
      Get Early Access
    </div>

      
    </div>
  )
}
