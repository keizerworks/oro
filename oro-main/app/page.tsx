import React from 'react'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import EarlyAccess from '@/components/EarlyAccess'
import Footer from '@/components/Footer'


export default function page() {
  return (
    <div className='bg-[#0A0E1E] sm:px-10 px-3 w-full overflow-hidden'>
      <Hero/>
      <Benefits/>
      <EarlyAccess/>      
    </div>
  )
}
