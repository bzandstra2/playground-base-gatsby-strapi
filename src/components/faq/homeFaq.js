import React from 'react'
import { Disclosure } from '@headlessui/react'
import { GoChevronDown } from '@react-icons/all-files/go/GoChevronDown'


const faqs = [

  { 
    question: "Can I design my own kitchen?",
    answer: "Yes.  Working with a designer can help excepdite the design process.  However, many kitchen planning softwares are available for anyone to plan their own design.  Feel free to utilize our kitchen design tool, and start designing your dream kitchen."
  },

  { 
    question: "What is an ideal kitchen layout?",
    answer: "Kitchens can have many different types of layouts: L-Shape layout, U-Shape layout, G-Shape layout, One Wall layout, Galley layout, Kitchen Island layout, etc..  The L-Shape layout is typically the most popular amongst consumers."
  },

  { 
    question: "How much does it cost to design a kitchen?",
    answer: "Prices will range by designer and by project.  The national average cost for kitchen design services in 2022 was $12,250."
  },

  { 
    question: "What is the best color for a kitchen?",
    answer: "Short answer - - white is the most popular color amongst consumers.  However, navy blue kitchens have seen a rise in popularity as well as colors with warmer tones.  White has always been and could very well always be the most popular color choice for kitchens."
  },

  { 
    question: "What should I pick first in kitchen remodel?",
    answer: "We recommend having appliances picked out first.  Get the electric and plumbing hooked up properly.  Then work from the top down.  Cabinets, backsplash, countertops.  Finally, the floor."
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Homefaq() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <GoChevronDown
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

