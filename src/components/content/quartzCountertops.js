import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function Quartzcountertops() {
  
    return (
    <div className="overflow-hidden bg-white">
    <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block" />
      <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
        <div>
         
          <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">Quartz Countertops</h3>
        </div>
      </div>
      <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="relative lg:col-start-2 lg:row-start-1">
          <svg
            className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
          </svg>
          <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
            <figure>
              <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                <StaticImage
                  className="rounded-lg object-cover object-center shadow-lg"
                  src="../../images/arctic-ivory-quartz-kitchen-island.jpg"
                  alt="kitchen with quartz countertop"
    
                />
              </div>
            </figure>
          </div>
        </div>
        <div className="mt-20">
          <div className="mx-auto max-w-prose text-base lg:max-w-none">
            <p className="text-lg text-gray-500">
            Homeowners that love engineered stone say quartz is like natural stone but better. Quartz countertops look great in any bathroom or kitchen because they come in bright modern colors from pastel blues to iridescent reds. Quartz has some of the most eye-catching designs. Quartz countertops are extremely durable and scratch resistant. They are also stain resistant and never need to be sealed.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
