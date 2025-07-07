import React from 'react'

function Pages() {
      return (
            <div className='rounded-[60px] h-[60rem] w-full mt-32 pt-32 flex items-center flex-col text-white bg-[#1b1b21]'>
                  <div className='flex flex-col items-center justify-center space-y-4 w-[40rem]'>
                        <h1 className='uppercase font-extrabold text-3xl'>50+ premade framer Website pages</h1>
                        <h2>Exhaustive choice of Home, Pricing, FAQ, About pages and more. Just add your content and your premium website is ready.</h2>
                        <button className='rounded-full px-8 py-2 bg-white text-black uppercase'>Explore all sections</button>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>
                        <div className='w-[19rem] h-[12rem] rounded-xl'>
                              <img src="p1.png"></img>
                        </div>
                        <div className='rounded-xl w-[19rem] h-[12rem]'>
                              <img src="p2.png" ></img>
                        </div>
                        <div className='rounded-xl w-[19rem] h-[12rem]'>
                              <img src="p3.png" ></img>
                        </div>
                        <div className='rounded-xl w-[19rem] h-[12rem]'>
                              <img src="p4.png" ></img>
                        </div>


                  </div>
            </div>
      )
}

export default Pages