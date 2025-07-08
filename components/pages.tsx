import React from 'react'

function Pages() {
      return (
            <div className='rounded-[60px] w-full py-32 flex items-center flex-col text-white bg-[#1b1b21]'>
                  <div className='flex flex-col items-center justify-center space-y-4 w-[40rem]'>
                        <h1 className='uppercase text-[40px] tracking-tight leading-[1.1em] font-[900] text-center px-8'>50+ premade framer Website pages</h1>
                        <h2 className='text-center text-[#d5d5dc]'>Exhaustive choice of Home, Pricing, FAQ, About pages and more. Just add your content and your premium website is ready.</h2>
                        <button className='rounded-full px-8 py-3 bg-white text-black uppercase'>Explore all Pages</button>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10'>
                        <div className='w-[19rem] h-[34.5rem] rounded-xl overflow-hidden'>
                              <img src="p1.png" className='w-full h-full object-cover'></img>
                        </div>
                        <div className='w-[19rem] h-[34.5rem] rounded-xl overflow-hidden'>
                              <img src="p2.png" className='w-full h-full object-cover'></img>
                        </div>
                        <div className='w-[19rem] h-[34.5rem] rounded-xl overflow-hidden'>
                              <img src="p3.png" className='w-full h-full object-cover'></img>
                        </div>
                        <div className='w-[19rem] h-[34.5rem] rounded-xl overflow-hidden'>
                              <img src="p4.png" className='w-full h-full object-cover'></img>
                        </div>
                      


                  </div>
            </div>
      )
}

export default Pages