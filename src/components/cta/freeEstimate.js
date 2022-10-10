import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function freeEstimate() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg bg-primary-600 shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <span className="block mb-5">Ready to Design Your Dream Kitchen?</span>
                <span className="block">Get a Free Estimate Today.</span>
              </h2>
              <a
                href="../contact"
                className="mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-primary-800 shadow hover:bg-primary-50"
              >
                Get a Free Estimate
              </a>
            </div>
          </div>
          <div className="aspect-w-5 aspect-h-3 -mt-6 md:aspect-w-2 md:aspect-h-1">
            <StaticImage
              
              className="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              src="../../images/marble-countertop-1.jpg"
              alt="marble white countertop"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
