import { HeartCrack } from 'lucide-react'
import React from 'react'

function Footer() {
      return (
            <div className='w-full bg-[#1b1b21] text-[#d7d7db] px-5 sm:px-10 md:px-14 xl:px-48 pt-10 xl:pt-20 pb-10 space-y-7 lg:rounded-t-[60px]'>
                  <div className='flex justify-between w-full flex-col xl:flex-row xl:space-y-0'>
                        <div> <img className='h-12' src={"./logo-white.png"} /></div>
                        <div className='flex justify-between w-[73%] flex-col space-y-8 xl:flex-row xl:space-y-0 mt-5'>
                              <div className='flex flex-col space-y-2'>
                                    <span className='text-white text-xl font-bold'>Pages</span>
                                    <span>All</span>
                                    <span>Landing</span>
                                    <span>Pricing</span>
                                    <span>Legal</span>
                              </div>
                              <div className='flex flex-col space-y-2'>
                                    <span className='text-white text-xl font-bold'>Sections</span>
                                    <span>Hero</span>
                                    <span>Features</span>
                                    <span>Metrics</span>
                                    <span>Testimonials</span>
                                    <span>Pricing</span>
                                    <span>Footer</span>
                              </div>
                              <div className='flex flex-col space-y-2'>
                                    <span className='text-white text-xl font-bold'>Links</span>
                                    <span>Affiliate Program</span>
                                    <span>LinkedIn</span>
                                    <span>X</span>
                                    <span>Contact Us</span>
                              </div>
                        </div>
                  </div>

                  <div className='flex xl:justify-between xl:items-center text-sm flex-col xl:flex-row space-y-3'>
                        <span>Mady by <HeartCrack className='inline-block text-red-700' /> @shyam</span>
                        <span className=''>© 2024 All Rights Reserved</span>
                  </div>
            </div>
      )
}

export default Footer