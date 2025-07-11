import React from 'react'

const data = [
      {
            title: 'Lifetime access',
            description: 'Get instant access to all styles, components, sections and pages immediately along with any future additions.',
            icon: "./lock.svg"
      },
      {
            title: 'Priority Support',
            description: 'Have questions or issues? Our team is committed to resolving all your issues within 24 hours.',
            icon: "./headphone.svg"
      },
      {
            title: 'Copy/Paste Components',
            description: 'Simply copy the components and sections you need and paste them in your website. Never start from scratch again.',
            icon: "./copy.svg"
      },
      {
            title: 'Framer Starter File',
            description: 'Get a  pre-configured Framer project with all the styles set-up for you. Just add your content and go live.',
            icon: "./framer-starter.svg"
      },
      {
            title: 'Responsive Designs',
            description: 'All the components and sections are responsive ensuring that your website adapts seamlessly to all screen sizes.',
            icon: "./computer.svg"
      },
      {
            title: 'Global Styling',
            description: 'Add your brand colors and fonts in the premade styles and update seamlessly across entire website in one click.',
            icon: "./color.svg"
      },
      {
            title: 'Light/Dark mode',
            description: 'You get two separate Framer files with all the assets in both Dark and Light Mode along with custom made color styles for both.',
            icon: "./moon.svg"
      },
      {
            title: 'Unlimited Projects',
            description: 'Our worry free commercial license allows you to use our assets for unlimited number of client projects or template work.',
            icon: "./computer.svg"
      },
      {
            title: '5 Prebuilt cms',
            description: 'Boltt contains 5 pre-built CMS options to choose from to help you build content heavy sites fast and with ease.',
            icon: "./color.svg"
      },
]

function Features() {
      return (
            <div className='mt-32'>
                  <h1 className='uppercase text-center font-extrabold text-4xl'>What's included</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[95%] sm:w-[75%] m-auto mt-10">
                        {data.map((item, index) => (
                              <Card
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    icon={<img src={item.icon} alt={item.title} className="w-10" />}
                              />
                        ))}
                  </div>
            </div>
      )
}

function Card({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
      return (
            <div className="flex flex-col space-y-3 p-7 bg-[#f7f7f7] rounded-xl border border-[#E6E6E4]">
                  <div className="icon">{icon}</div>
                  <h2 className='uppercase font-[550] text-[19px] mt-5'>{title}</h2>
                  <p className='text-[#434347]'>{description}</p>
            </div>
      )
}

export default Features