import React from 'react'

function Pages() {
      return (
            <div className='lg:rounded-[60px] w-full py-32 px-5 sm:px-10 xl:px-20 flex items-center flex-col text-white bg-[#1b1b21]'>
                  <div className='flex flex-col items-start xl:items-center justify-center space-y-4 xl:w-[40rem]'>
                        <h1 className='uppercase text-[30px] xl:text-[40px] tracking-tight leading-[1.1em] font-[900] xl:text-center xl:px-8'>50+ premade framer Website pages</h1>
                        <h2 className='text-start xl:text-center text-[#d5d5dc]'>Exhaustive choice of Home, Pricing, FAQ, About pages and more. Just add your content and your premium website is ready.</h2>
                        <button className='rounded-full px-8 py-3 bg-white text-black uppercase'>Explore all Pages</button>
                  </div>
                  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 gap-6 2xl:px-28'>
                        <div className='w-full h-full rounded-xl overflow-hidden'>
                              <img src="p1.png" className='w-full h-full object-contain' />
                        </div>
                        <div className='w-full h-full rounded-xl overflow-hidden'>
                              <img src="p2.png" className='w-full h-full object-contain' />
                        </div>
                        <div className='w-full h-full rounded-xl overflow-hidden'>
                              <img src="p3.png" className='w-full h-full object-contain' />
                        </div>
                        <div className='w-full h-full rounded-xl overflow-hidden'>
                              <img src="p4.png" className='w-full h-full object-contain' />
                        </div>
                  </div>
            </div>
      )
}

export default Pages