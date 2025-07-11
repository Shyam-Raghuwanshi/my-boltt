import { ArrowRight } from 'lucide-react'
import React from 'react'

function Hero() {
      return (
            <div style={{ background: 'linear-gradient(168deg, #c9bdff, #fef5ff 97%)' }} className='xl:h-[51rem] lg:rounded-b-[70px] w-full flex justify-center items-center'>
                  <div className='w-full flex flex-col xl:flex-row justify-center xl:px-[9rem] space-x-20 mt-[10rem] xl:mt-0'>
                        <Left />
                        <Right />
                  </div>
            </div>
      )
}

function Left() {
      return (<>
            <div className='w-full xl:w-[50%] flex items-center px-[2rem] xl:px-0'>
                  <div className='flex flex-col space-y-3'>
                        <Profiles />
                        <div>
                              <h1 className='text-[30px] md:text-[48px] 2xl:text-[68px] tracking-tight leading-[1.1em] font-[900] uppercase'>Build websites 10x faster in framer with boltt</h1>
                              <h2 className='xl:pr-20 mt-3 text-[12px] 2xl:text-[18px] text-[#434347]'>Get access to 250+ sections, 300+ components and  20+ pages with weekly updates for a one-time payment of $29 $79</h2>
                        </div>
                        <div className='flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-3 text-sm mt-4'>
                              <button className='bg-[#8048e0] rounded-full px-10 font-[650] py-3 text-white flex justify-evenly items-center'>BUY NOW</button>
                              <button className='px-6 py-2 rounded-full border border-black flex justify-center items-center uppercase'>Explore library</button>
                        </div>
                  </div>
            </div>

      </>)
}

function Right() {
      return (
            <div className='flex flex-col xl:flex-row space-x-4 xl:space-x-0 overflow-hidden xl:h-[46rem] pb-14 xl:pb-0 mt-20 space-y-4'>
                  <ScrollDown />
                  <ScrollUp />
                  <ScrollDownXl />
                  <ScrollUpXl />
            </div>
      )
}

function ScrollDown() {
      return (
            <>
                  <div className="xl:hidden x-scroll-content-down space-x-4 w-screen xl:space-y-4 flex flex-row xl:flex-col">
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./1.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./2.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./3.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./4.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./5.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./1.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./2.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./3.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./4.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./5.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./1.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./2.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./3.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./4.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./5.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./1.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./2.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./3.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./4.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./5.png" />
                        </div>
                  </div>
            </>
      );
}


function ScrollUp() {
      return (
            <>
                  <div className="xl:hidden w-screen x-scroll-content-up space-x-4 xl:space-y-4 flex flex-row xl:flex-col">
                        <div className="h-55 w-95 xl:h-35 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./7.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./8.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./9.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-35 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./10.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-35 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./11.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-35 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./7.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./8.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./9.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-35 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./10.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-35 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./11.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-35 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./7.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./8.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./9.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-35 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./10.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-35 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./7.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./8.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./9.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-35 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./10.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-35 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./7.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./8.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./9.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-35 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./10.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-35 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./7.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./8.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./9.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-35 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./10.png" />
                        </div>
                  </div>
            </>
      );
}

function ScrollDownXl() {
      return (
            <>
                  <div className="hidden scroll-content-down space-x-4 xl:space-y-4 xl:flex flex-row xl:flex-col">
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./1.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./2.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./3.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./4.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./5.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./1.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./2.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./3.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./4.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./5.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./1.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./2.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./3.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./4.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./5.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./1.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./2.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./3.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./4.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./5.png" />
                        </div>
                  </div>
            </>
      );
}


function ScrollUpXl() {
      return (
            <>
                  <div className="hidden scroll-content-up space-x-4 xl:space-y-4 xl:flex flex-row xl:flex-col">
                        <div className="h-55 w-95 xl:h-35 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./7.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./8.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./9.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-35 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./10.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-35 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./11.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-35 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./7.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./8.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./9.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-35 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./10.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-35 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./11.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-35 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./7.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./8.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./9.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-35 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./10.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-35 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./7.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./8.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./9.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-35 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./10.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-35 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./7.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./8.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./9.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-35 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./10.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-35 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./7.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./8.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-40 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./9.png" />
                        </div>
                        <div className="h-55 w-95 xl:h-35 xl:w-60 rounded-xl overflow-hidden shrink-0">
                              <img className="h-full w-full object-cover" src="./10.png" />
                        </div>
                  </div>
            </>
      );
}


function Profiles() {
      return (
            <div>
                  <div className='flex space-x-2'>
                        <div className='flex justify-center items-center space-x-4'>
                              <Profile />
                              <Profile classes='-ml-6' />
                              <Profile classes='-ml-6' />
                              <Profile classes='-ml-6' />
                        </div>
                        <div className='flex flex-col justify-center items-start space-y-2'>
                              <div className='flex space-x-0.5 justify-center items-center'>
                                    <img src={"./star.svg"} className='h-5' />
                                    <img src={"./star.svg"} className='h-5' />
                                    <img src={"./star.svg"} className='h-5' />
                                    <img src={"./star.svg"} className='h-5' />
                                    <img src={"./star.svg"} className='h-5' />
                              </div>
                              <span className='text-sm text-[#434347]'>Loved by 100+ customers</span>
                        </div>
                  </div>

            </div>
      )
}

function Profile({ classes }: { classes?: string }) {
      return (<>
            <div className={`h-[42px] w-[42px] flex rounded-full justify-center items-center bg-white ${classes}`}>
                  <div className={`h-10 w-10 rounded-full overflow-hidden`}>
                        <img src="/shyam.JPG" alt="Profile" className="w-full h-full object-cover" />
                  </div>
            </div>

      </>)
}

export default Hero