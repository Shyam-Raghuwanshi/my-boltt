import { Check, X } from 'lucide-react'
import React from 'react'

function Pricing() {
      return (
            <div className='rounded-[60px] w-full pt-32 flex items-center flex-col text-white bg-[#1b1b21] pb-32'>
                  <div className='flex flex-col items-center justify-center space-y-4 w-[50rem]'>
                        <h1 className='uppercase text-[40px] tracking-tight leading-[1.1em] font-[800] text-center'>Get lifetime access to 1k+ components for less than <span className='text-[#bfa8e7]'>$0.03 per component</span> </h1>
                        <h2 className='text-[#c8c8cf]'>Say goodbye to subscriptions. Pay once, use forever in unlimited projects. Free lifetime updates.</h2>
                  </div>
                  <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10 w-[95%] xl:w-[76%]'>
                        <div className='rounded-[36px] bg-[#28282e] pl-8 py-10 space-y-4 text-[#bab9bd] text-[15px]'>
                              <span className='block font-bold text-xl text-white'>Free Version</span>
                              <span className='block font-extrabold text-6xl text-white'>$0</span>
                              <div className='w-[90%]'>Free version contains all styles and components and limited sections.</div>
                              <button className='w-[90%] rounded-full border uppercase font-[500] border-white flex justify-center items-center py-3 text-white'>Get Framer Project</button>
                              <div className='flex flex-col space-y-3 mt-8'>
                                    <div className='flex space-x-2'>
                                          <Check className='inline' />
                                          <span>Use in unlimited projects</span>
                                    </div>
                                    <div className='flex space-x-2'>
                                          <Check className='inline' />
                                          <span>Worry-free commercial license</span>
                                    </div>
                                    <div className='flex space-x-2'>
                                          <Check className='inline' />
                                          <span>Free Regular updates forever</span>
                                    </div>
                                    <div className='flex space-x-2'>
                                          <Check className='inline' />
                                          <span>30+ prebuilt sections</span>
                                    </div>
                                    <div className='flex space-x-2'>
                                          <Check className='inline' />
                                          <span>50+ components</span>
                                    </div>
                                    <div className='flex space-x-2'>
                                          <Check className='inline' />
                                          <span>Text and color styles</span>
                                    </div>
                                    <div className='flex space-x-2'>
                                          <X className='text-[#f75e59] inline' />
                                          <span>Copy/Paste Components</span>
                                    </div>
                                    <div className='flex space-x-2'>
                                          <X className='text-[#f75e59] inline' />
                                          <span>Framer Plugin (Under Development)</span>
                                    </div>
                                    <div className='flex space-x-2'>
                                          <Check className='inline' />
                                          <span>1 user license</span>
                                    </div>
                                    <div className='flex space-x-2'>
                                          <X className='text-[#f75e59] inline' />
                                          <span>Create and sell Framer Templates</span>
                                    </div>

                              </div>
                        </div>
                        <div className='rounded-[36px] bg-[#22222e] pl-8 py-10 space-y-4 text-[#bab9bd] text-[15px]'>
                              <div className='flex justify-between'>
                                    <span className='block font-bold text-xl text-white'>Pro</span>
                                    <div className='text-white mr-8 border border-white rounded-full px-3 flex justify-center items-center py-1 text-xs'>60% Off</div>
                              </div>
                              <span className='block font-extrabold text-6xl text-white'>$29</span>
                              <div className='w-[90%]'>Single license suitable for designers, developers and freelancers.</div>
                              <button className='w-[90%] rounded-full border uppercase font-[500] border-white flex justify-center items-center py-3 text-white bg-[#8048e0] border-none'>Buy Now</button>
                              <div className='flex flex-col space-y-3 mt-8'>
                                    <div className='flex space-x-2'>
                                          <Check className='inline' />
                                          <span>Use in unlimited projects</span>
                                    </div>
                                    <div className='flex space-x-2'>
                                          <Check className='inline' />
                                          <span>Worry-free commercial license</span>
                                    </div>
                                    <div className='flex space-x-2'>
                                          <Check className='inline' />
                                          <span>Free Regular updates forever</span>
                                    </div>
                                    <div className='flex space-x-2'>
                                          <Check className='inline' />
                                          <span>250+ prebuilt sections</span>
                                    </div>
                                    <div className='flex space-x-2'>
                                          <Check className='inline' />
                                          <span>400+ components</span>
                                    </div>
                                    <div className='flex space-x-2'>
                                          <Check className='inline' />
                                          <span>Text and color styles</span>
                                    </div>
                                    <div className='flex space-x-2'>
                                          <Check className='inline' />
                                          <span>Copy/Paste Components</span>
                                    </div>
                                    <div className='flex space-x-2'>
                                          <Check className='inline' />
                                          <span>Framer Plugin (Under Development)</span>
                                    </div>
                                    <div className='flex space-x-2'>
                                          <Check className='inline' />
                                          <span>1 user license</span>
                                    </div>
                                    <div className='flex space-x-2'>
                                          <X className='text-[#f75e59] inline' />
                                          <span>Create and sell Framer Templates</span>
                                    </div>

                              </div>
                        </div>
                        <div className='rounded-[36px] bg-[#28282e] pl-8 py-10 space-y-4 text-[#bab9bd] text-[15px]'>
                              <div className='flex justify-between'>
                                    <span className='block font-bold text-xl text-white'>Premium</span>
                                    <div className='text-white mr-8 border border-white rounded-full px-3 flex justify-center items-center py-1 text-xs'>60% Off</div>
                              </div>
                              <span className='block font-extrabold text-6xl text-white'>$59</span>
                              <div className='w-[90%]'>Up to 10 user licenses, ideal for teams, agencies and template creators.</div>
                              <button className='w-[90%] rounded-full border uppercase font-[500] border-white flex justify-center items-center py-3 text-white bg-[#8048e0] border-none'>Buy now</button>
                              <div className='flex flex-col space-y-3 mt-8'>
                                    <div className='flex space-x-2'>
                                          <Check className='inline' />
                                          <span>Use in unlimited projects</span>
                                    </div>
                                    <div className='flex space-x-2'>
                                          <Check className='inline' />
                                          <span>Worry-free commercial license</span>
                                    </div>
                                    <div className='flex space-x-2'>
                                          <Check className='inline' />
                                          <span>Free Regular updates forever</span>
                                    </div>
                                    <div className='flex space-x-2'>
                                          <Check className='inline' />
                                          <span>30+ prebuilt sections</span>
                                    </div>
                                    <div className='flex space-x-2'>
                                          <Check className='inline' />
                                          <span>50+ components</span>
                                    </div>
                                    <div className='flex space-x-2'>
                                          <Check className='inline' />
                                          <span>Text and color styles</span>
                                    </div>
                                    <div className='flex space-x-2'>
                                          <Check className='inline' />
                                          <span>Copy/Paste Components</span>
                                    </div>
                                    <div className='flex space-x-2'>
                                          <Check className='inline' />
                                          <span>Framer Plugin (Under Development)</span>
                                    </div>
                                    <div className='flex space-x-2'>
                                          <Check className='inline' />
                                          <span>1 user license</span>
                                    </div>
                                    <div className='flex space-x-2'>
                                          <Check className='inline' />
                                          <span>Create and sell Framer Templates</span>
                                    </div>

                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Pricing