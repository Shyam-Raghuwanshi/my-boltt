import React from 'react'

function Navbar() {
  return (
    <div className='w-full justify-center items-center flex fixed top-5 z-10'>
      <div className='flex justify-between items-center w-[75rem] bg-white px-5 py-2 rounded-2xl h-18'>
        <img src="/logo.png" alt="Logo" className="h-8" />
        <div className='flex justify-center items-center space-x-4 font-light text-md'>
          <span>Pricing</span>
          <span>Pages</span>
          <span>Sections</span>
          <button className="px-4 py-1 rounded-2xl border border-black font-medium">Sign In</button>
          <button className="bg-black rounded-2xl text-white px-4 py-1 font-medium">Buy now</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar