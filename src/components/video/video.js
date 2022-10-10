import React from 'react'
import SiteConfig from '../../config/site'

export default function Testcta() {
   
  const {title, description} = SiteConfig
  
  const stats = [
    { label: 'Founded', value: '2007' },
    { label: 'Projects Completed', value: '25,000+' },
    { label: 'Products to Choose From', value: '200+' },
    { label: 'Years of Experience', value: '15' },
  ]

  return (
    

      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
        <div className="relative sm:py-16 lg:py-0">
          <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
            <div className="absolute inset-y-0 right-1/2 rounded-r-3xl bg-gray-50 lg:right-72" />
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
            </svg>
          </div>
          <div className="relative">
            {/* Testimonial card*/}
            <div className="relative rounded-2xl pb-10 shadow-xl shadow-primary-300">
            <iframe className="rounded-lg" width="500" height="500" src="https://player.vimeo.com/video/641603031?h=2bada3f1d7&badge=0&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" title="East Coast Granite & Tile Intro Movie">
               </iframe>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl font-bold tracking-tight text-primary-600 sm:text-4xl">
              15 Years of Outstanding Customer Service
            </h2>
            <div className="mt-6 space-y-6 text-gray-500">
              <p className="text-lg">
              {SiteConfig.company} is the proven expert in kitchen and bath remodeling. <b>Kitchen remodeling</b> is
one of the most important home improvement projects you will ever do. Our expert team
will help guide you through your kitchen remodel and the many design decisions you will
need to make to create a space that will add functionality and personal style to your
home. Upgrading your kitchen with our wide selection of <b>quality granite, quartz, or
marble countertops</b> will definitely add lasting value to your home. 
              </p>
              <p className="text-base leading-7">
              The key to creating a <b>kitchen remodel</b> that will stand the test of time is to combine the
best of both traditional and contemporary style. We can help you design a kitchen full of
beauty and function, while making sure all your needs are met. We offer free estimates
and design consultations to help you begin your <b>kitchen transformation</b>.
              </p>
              <p className="text-base leading-7">
              Our remodeling team is there to guarantee the process goes as smoothly as possible,
from design to installation. We are family owned and operated and have multiple
locations across the area for your convenience. Choose our experienced team that has
been <b>creating dream kitchens and baths for over 15 years!</b> </p>
            </div>
          </div>

          {/* Stats section */}
          <div className="mt-10">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
              {stats.map((stat) => (
                <div key={stat.label} className="border-t-2 border-gray-100 pt-6">
                  <dt className="text-base font-medium text-black">{stat.label}</dt>
                  <dd className="text-3xl font-bold tracking-tight text-primary-600">{stat.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10">
              <a href="../contact" className="text-base font-medium text-primary-600">
                Contact Us Now For a Free and Quick Price Quote
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>


  )
  
}
