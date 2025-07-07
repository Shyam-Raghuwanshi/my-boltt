import { Plus } from 'lucide-react';
import React from 'react'

const data = [
      { question: "What is Boltt?", answer: "Boltt is a collection of pre-built components, sections, and pages for Framer that helps you build websites faster and easier." },
      { question: "How do I use Boltt?", answer: "You can copy and paste the components, sections, and pages from Boltt into your Framer project. You can also customize them to fit your needs." },
      { question: "Is Boltt free?", answer: "Boltt is a paid product. You can purchase it from our website." },
      { question: "What is included in Boltt?", answer: "Boltt includes a collection of pre-built components, sections, and pages for Framer, along with a pre-configured Framer project." },
      { question: "Can I use Boltt for commercial projects?", answer: "Yes, you can use Boltt for commercial projects without any restrictions." },
]


function Questions() {
      return (
            <div className='w-full flex justify-between py-36 px-56'>
                  <div className='flex flex-col space-y-5 pr-14'>
                        <span className='uppercase font-[950] text-4xl'>your questions answered</span>
                        <span>If you have any other questions, please email us at contact@boltt.site</span>
                  </div>
                  <div>
                        <QuestionList />
                  </div>
            </div>
      )
}

function QuestionList() {
      return (
            <div className='flex flex-col space-y-5'>
                  {data.map((item, index) => (
                        <Question key={index} question={item.question} answer={item.answer} />
                  ))}
            </div>
      )
}

function Question({ question, answer }: { question: string; answer: string }) {
      return (
            <details className="w-[42rem] mx-auto  group bg-gray-50 border border-gray-200 rounded-lg p-5 shadow-sm">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                        <span className="font-medium text-gray-900">{question}</span>
                        <Plus className="text-xl transition-transform duration-300 group-open:rotate-45" />
                  </summary>
                  <p className="mt-2 text-gray-600">
                        {answer}
                  </p>
            </details>

      )
}

export default Questions