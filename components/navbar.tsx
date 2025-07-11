"use client"
import { ArrowRight, Menu, X } from 'lucide-react'
import React, { useState } from 'react'

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const closeNav = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setNavOpen(false)
      setIsAnimating(false)
    }, 800) // match the animation duration
  }

  return (
    <>
      <div className='w-full justify-center items-center flex fixed top-5 z-10'>
        <div className='w-full flex justify-center items-center px-3 sm:px-20 xl:px-0'>
          <div className='flex justify-between w-full xl:w-[1200px] items-center bg-white px-5 py-2 rounded-[20px] h-18'>
            <img src="/logo.png" alt="Logo" className="h-8" />
            <div className='lg:flex hidden justify-center items-center space-x-4 font-light text-md'>
              <span>Pricing</span>
              <span>Pages</span>
              <span>Sections</span>
              <button className="px-4 py-1 rounded-2xl border border-black font-medium text-[#434347]">Sign In</button>
              <button className="bg-black rounded-3xl text-white px-4 py-[6px] font-medium flex space-x-2 items-center">
                <span>Buy now</span>
                <ArrowRight className='h-4 w-4 text-white' />
              </button>
            </div>
            <button onClick={() => setNavOpen(true)} className='inline-block lg:hidden'>
              <Menu />
            </button>
          </div>
        </div>
      </div>

      {navOpen && <YNav isAnimating={isAnimating} onClose={closeNav} />}
    </>
  )
}

function YNav({ onClose, isAnimating }: { onClose: () => void, isAnimating: boolean }) {
  return (
    <div className={`
      fixed top-5 left-0 right-0 z-20 bg-white px-5 py-4 w-full flex justify-center transition-all duration-300
      ${isAnimating ? 'opacity-0 bg-transparent -translate-y-5 pointer-events-none' : 'opacity-100 translate-y-0'}
    `}>
      <div className='flex flex-col w-full space-y-4'>
        <div className='flex justify-between items-center'>
          <img src="/logo.png" alt="Logo" className="h-8" />
          <button onClick={onClose} className='inline-block lg:hidden'>
            <X />
          </button>
        </div>
        <div className='flex flex-col font-light text-md space-y-3'>
          <span>Pricing</span>
          <span>Pages</span>
          <span>Sections</span>
          <button className="px-4 py-1 rounded-2xl border border-black font-medium text-[#434347]">Sign In</button>
          <button className="bg-black rounded-3xl text-white px-4 py-[6px] font-medium flex space-x-2 items-center justify-center">
            <span>Buy now</span>
            <ArrowRight className='h-4 w-4 text-white' />
          </button>
        </div>
      </div>
    </div>
  )
}
