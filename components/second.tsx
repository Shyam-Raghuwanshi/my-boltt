import React from 'react'

function Second() {
      return (
            <div className='h-min w-full flex pt-32'>
                  <div className='flex flex-col space-y-4 w-full items-center justify-center'>
                        <div className='flex flex-col space-y-3 items-start xl:items-center justify-center w-full xl:w-[40%] px-8'>
                              <h1 className='uppercase text-[30px] xl:text-[40px] tracking-tight leading-[1.1em] font-[800] xl:text-center xl:px-8'>350+ color and text styles with 25+ color choices</h1>
                              <h2 className='xl:text-center'>Extremely flexible and robust styling system. Bring any design to life with fully responsive text styles and over 25+ color choices with 10 shade palette for each color. Shadows and blur styles also included.</h2>
                        </div>
                        <div className='w-[95%] sm:w-[90%] xl:w-[85%] aspect-[19/12] flex items-center justify-center overflow-hidden rounded-[20px] sm:rounded-[40px] mt-10'>
                              <img className="w-full h-full object-bottom" src="./colorpicker.png" />
                        </div>
                  </div>
            </div>
      )
}

export default Second