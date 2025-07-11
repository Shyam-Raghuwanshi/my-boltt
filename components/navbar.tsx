import { ArrowRight, Hamburger } from 'lucide-react'
import React from 'react'

function Navbar() {
  return (
    <div className='w-full justify-center items-center flex fixed top-5 z-10'>
      <div className='w-full flex justify-center items-center px-3 sm:px-20 xl:px-0'>
        <div className='flex justify-between w-full xl:w-[1200px] items-center bg-white px-5 py-2 rounded-[20px] h-18'>
          <img src="/logo.png" alt="Logo" className="h-8" />
          <div className='lg:flex hidden justify-center items-center space-x-4 font-light text-md'>
            <span>Pricing</span>
            <span>Pages</span>
            <span>Sections</span>
            <button className="px-4 py-1 rounded-2xl border border-black font-medium text-[#434347]">Sign In</button>
            <button className="bg-black rounded-3xl text-white px-4 py-[6px] font-medium flex space-x-2 items-center"><span>Buy now</span><ArrowRight className='h-4 w-4 text-white' /></button>
          </div>
          <Hamburger className='inline-block lg:hidden'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar