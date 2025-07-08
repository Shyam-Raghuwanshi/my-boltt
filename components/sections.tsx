import React from 'react'

function Section() {
      return (
            <div className='rounded-[60px] w-full h-min mt-28 py-36 flex justify-center items-center flex-col bg-[#eae6ff]'>
                  <div className='flex flex-col items-center justify-center space-y-4 w-[40rem]'>
                        <h1 className='uppercase text-[40px] tracking-tight leading-[1.1em] font-[900] text-center px-8'>250+ Framer Website Sections Library</h1>
                        <h2 className='text-center text-[#434347]'>Just copy and paste from our premium sections library, fully responsive and made using consistent components and styles. Get your site up and running in minutes.</h2>
                        <button className='rounded-full px-8 py-2 bg-black text-white uppercase'>Explore all sections</button>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10'>
                        <div className="rounded-xl overflow-hidden w-[19rem] h-[12rem]">
                              <img src="f1.png" className="w-full h-full object-cover" />
                              <span>Features - 26</span>
                        </div>

                        <div className="rounded-xl overflow-hidden w-[19rem] h-[12rem]">
                              <img src="f2.png" className="w-full h-full object-bottom" />
                              <span>Features - 26</span>
                        </div>

                        <div className="rounded-xl overflow-hidden w-[19rem] h-[12rem]">
                              <img src="f3.png" className="w-full h-full object-cover" />
                              <span>Features - 26</span>
                        </div>

                        <div className="rounded-xl overflow-hidden w-[19rem] h-[12rem]">
                              <img src="f4.png" className="w-full h-full object-cover" />
                              <span>Features - 26</span>
                        </div>

                        <div className="rounded-xl overflow-hidden w-[19rem] h-[12rem]">
                              <img src="f5.png" className="w-full h-full object-cover" />
                              <span>Features - 26</span>
                        </div>

                        <div className="rounded-xl overflow-hidden w-[19rem] h-[12rem]">
                              <img src="f6.png" className="w-full h-full object-cover" />
                              <span>Features - 26</span>
                        </div>

                        <div className="rounded-xl overflow-hidden w-[19rem] h-[12rem]">
                              <img src="f7.png" className="w-full h-full object-cover" />
                              <span>Features - 26</span>
                        </div>

                        <div className="rounded-xl overflow-hidden w-[19rem] h-[12rem]">
                              <img src="f8.png" className="w-full h-full object-bottom" />
                              <span>Features - 26</span>
                        </div>
                  </div>
            </div>
      )
}

export default Section