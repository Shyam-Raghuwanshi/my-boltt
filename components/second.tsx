import React from 'react'

function Second() {
      return (
            <div className='h-min w-full flex pt-32'>
                  <div className='flex flex-col space-y-4 w-full items-center justify-center'>
                        <div className='flex flex-col space-y-3 items-center justify-center w-[40%]'>
                              <h1 className='uppercase text-[40px] tracking-tight leading-[1.1em] font-[800] text-center px-8'>350+ color and text styles with 25+ color choices</h1>
                              <h2 className='text-center'>Extremely flexible and robust styling system. Bring any design to life with fully responsive text styles and over 25+ color choices with 10 shade palette for each color. Shadows and blur styles also included.</h2>
                        </div>
                        <div className='px-20 xl:px-0 xl:w-[82rem] flex items-center justify-center overflow-hidden rounded-[40px] mt-10'>
                              <img className="w-full h-full object-bottom" src="./colorpicker.png" />
                        </div>
                  </div>
            </div>
      )
}

export default Second