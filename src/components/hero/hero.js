import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import SiteConfig from '../../config/site'
import { Link } from 'gatsby'



const {region} = SiteConfig

export default function Hero() {
  
  
  
  return (
    
    <main className="lg:relative">
    <div className="mx-auto w-full max-w-4xl pt-4 pb-4 text-center lg:py-48 lg:text-left">
      <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl">
          <span className="block xl:inline">Create Your Dream Kitchen with</span>{' '}
          <span className="block text-primary-600 xl:inline">Granite, Quartz, &#38; Marble Countertops</span>
        </h1>
        <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
        Find your perfect countertop material from our selection of <b>quartz, marble and granite countertops.</b> Sourced from the highest quality vendors, our stone slab collection is unmatched in {region}.
        </p>
        <div className="mt-10 sm:flex flex-wrap sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <a
              href="../contact"
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary-600 px-8 py-3 text-base font-medium text-white hover:bg-primary-700 md:py-4 md:px-10 md:text-lg"
            >
              Get a Free Estimate
            </a>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <a
              href="../countertops"
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-primary-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
            >
              See Our Work
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="relative h-64 w-full sm:h-72 lg:absolute lg:inset-y-4 lg:right-0 lg:h-full lg:w-1/2">

      <StaticImage
        className="absolute rounded-lg shadow-xl shadow-primary-50 inset-0 h-fit w-fit object-cover lg:h-96 w-auto"
        src="../../images/quartz-squares-small.jpg"
        alt="granite slabs"

      />
    </div>
  
  </main>
     
  )
}

