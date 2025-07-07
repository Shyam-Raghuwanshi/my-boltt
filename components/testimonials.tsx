"use client"
import React, { useEffect, useRef, useState } from 'react';
const testimonials = [
      {
            text: "Framer is the best tool I've ever used for UI design.",
            name: "Shyam",
            role: "UI Designer & Framer Expert",
            image: "./shyam.JPG",
      },
      {
            text: "It’s intuitive and fast. Love the live preview.",
            name: "Shyam",
            role: "Product Designer",
            image: "./shyam.JPG",
      },
      {
            text: "Building websites feels like designing in Figma.",
            name: "Shyam",
            role: "Creative Coder",
            image: "./shyam.JPG",
      },
];

function Testimonials() {
      return (
            <div className='rounded-[60px] w-full h-min pt-36 pb-16 flex justify-center items-center flex-col bg-[#eae6ff]'>
                  <div className='flex flex-col items-center justify-center space-y-4 w-[40rem]'>
                        <h1 className='uppercase font-extrabold text-3xl'>Our Testimonials</h1>
                  </div>
                  <TestimonialSlider />

                  <div className='flex text-4xl text-[#8c8c7b] font-extrabold'>
                        ....
                  </div>
            </div>
      )
}

function TestimonialSlider() {
      const sliderRef = useRef(null);
      const [index, setIndex] = useState(0);

      useEffect(() => {
            const interval = setInterval(() => {
                  setIndex((prev) => (prev + 1) % testimonials.length);
            }, 5000);

            return () => clearInterval(interval);
      }, []);

      useEffect(() => {
            const slider: any = sliderRef.current;
            if (slider) {
                  slider.scrollTo({
                        left: index * slider.offsetWidth,
                        behavior: 'smooth',
                  });
            }
      }, [index]);

      return (
            <div ref={sliderRef} className="overflow-x-auto scroll-smooth snap-x snap-mandatory flex w-full scrollbar-hide">
                  {testimonials.map((item, i) => (
                        <div
                              key={i}
                              className="min-w-full snap-center flex flex-col items-center justify-center px-6 py-12 transition-all duration-500"
                        >
                              <p className="text-3xl text-center max-w-3xl">{`"${item.text}"`}</p>
                              <div className="flex flex-col items-center justify-center mt-6">
                                    <img className="h-14 w-[60px] rounded-full" src={item.image} alt={item.name} />
                                    <span className="mt-2 text-xl font-medium">{item.name}</span>
                                    <span className="text-[#8c8c7b] text-xl">{item.role}</span>
                                    <div className="flex space-x-1 mt-4">
                                          {Array.from({ length: 5 }).map((_, idx) => (
                                                <img key={idx} className="h-6 w-6" src="./star-yellow.svg" alt="star" />
                                          ))}
                                    </div>
                              </div>
                        </div>
                  ))}
            </div>
      );
}


export default Testimonials