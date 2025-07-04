import React from 'react'

function Hero() {
      return (
            <div style={{ background: 'linear-gradient(168deg, #c9bdff, #fef5ff 97%)' }} className='h-[51rem] rounded-b-[70px] w-full flex justify-center items-center border'>
                  <div className='flex justify-center px-[9rem] space-x-20'>
                        <Left />
                        <Right />
                  </div>
            </div>
      )
}


function Left() {
      return (<>
            <div className='w-[50%] flex items-center'>
                  <div className='flex flex-col space-y-3'>
                        <Profiles />
                        <div>
                              <h1 className='text-5xl font-extrabold uppercase'>Build websites 10x faster in framer with boltt</h1>
                              <h2>Get access to 250+ sections, 300+ components and  20+ pages with weekly updates for a one-time payment of $29 $79</h2>
                        </div>
                        <div className='flex space-x-3 text-sm'>
                              <button className='bg-purple-500 rounded-full px-4 py-1 text-white'>BUY NOW</button>
                              <button className='rounded-full px-4 py-[5px] border border-black'>Explore library</button>
                        </div>
                  </div>
            </div>

      </>)
}

function Right() {
      return (
            <div className='flex space-x-4 overflow-hidden h-[46rem] mt-20 test'>
                  <ScrollDown />
                  <ScrollUp />
            </div>
      )
}

function ScrollDown() {
      return (<>
            <div className="scroll-content-down space-y-4">
                  {/* Duplicated for infinite scroll effect */}
                  <img className="h-55 rounded-xl" src="./1.png" />
                  <img className="h-55 rounded-xl" src="./2.png" />
                  <img className="h-35 rounded-xl" src="./3.png" />
                  <img className="h-45 rounded-xl" src="./4.png" />
                  <img className="h-35 rounded-xl" src="./5.png" />
                  <img className="h-55 rounded-xl" src="./1.png" />
                  <img className="h-55 rounded-xl" src="./2.png" />
                  <img className="h-35 rounded-xl" src="./3.png" />
                  <img className="h-45 rounded-xl" src="./4.png" />
                  <img className="h-35 rounded-xl" src="./5.png" />
                  <img className="h-55 rounded-xl" src="./1.png" />
                  <img className="h-55 rounded-xl" src="./2.png" />
                  <img className="h-35 rounded-xl" src="./3.png" />
                  <img className="h-45 rounded-xl" src="./4.png" />
                  <img className="h-35 rounded-xl" src="./5.png" />
                  <img className="h-55 rounded-xl" src="./1.png" />
                  <img className="h-55 rounded-xl" src="./2.png" />
                  <img className="h-35 rounded-xl" src="./3.png" />
                  <img className="h-45 rounded-xl" src="./4.png" />
                  <img className="h-35 rounded-xl" src="./5.png" />
            </div>

      </>)
}

function ScrollUp() {
      return (<>
            <div className="scroll-content-up space-y-4">
                  <img className='h-35 rounded-xl' src="./7.png" />
                  <img className='h-55 rounded-xl' src="./8.png" />
                  <img className='h-55 rounded-xl' src="./9.png" />
                  <img className='h-35 rounded-xl' src="./10.png" />
                  <img className='h-35 rounded-xl' src="./11.png" />
                  <img className='h-35 rounded-xl' src="./7.png" />
                  <img className='h-55 rounded-xl' src="./8.png" />
                  <img className='h-55 rounded-xl' src="./9.png" />
                  <img className='h-35 rounded-xl' src="./10.png" />
                  <img className='h-35 rounded-xl' src="./11.png" />
                  <img className='h-35 rounded-xl' src="./7.png" />
                  <img className='h-55 rounded-xl' src="./8.png" />
                  <img className='h-55 rounded-xl' src="./9.png" />
                  <img className='h-35 rounded-xl' src="./10.png" />
                  <img className='h-35 rounded-xl' src="./11.png" />
                  <img className='h-35 rounded-xl' src="./7.png" />
                  <img className='h-55 rounded-xl' src="./8.png" />
                  <img className='h-55 rounded-xl' src="./9.png" />
                  <img className='h-35 rounded-xl' src="./10.png" />
                  <img className='h-35 rounded-xl' src="./11.png" />
            </div>
      </>)
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
                              <span className='text-sm font-thin'>Loved by 100+ customers</span>
                        </div>
                  </div>

            </div>
      )
}

function Profile({ classes }: { classes?: string }) {
      return (<>
            <div className={`h-[42px] w-[42px] rounded-full flex justify-center items-center bg-white ${classes}`}>
                  <img src="/shyam.JPG" alt="Profile" className="h-10 w-10 rounded-full" />
            </div>
      </>)
}

export default Hero