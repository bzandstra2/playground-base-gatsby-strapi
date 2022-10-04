import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function countertopHeader() {
  return (
    <div className="relative bg-primary-400">
    <div className="absolute inset-0">
      <StaticImage
        className="h-full w-full object-cover"
        src="../../images/brown-fantasy-marble-countertop.jpg"
        alt="brown fantasy marble countertop"
      />
      <div className="absolute inset-0 bg-primary-400 mix-blend-multiply" aria-hidden="true" />
    </div>
    <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Countertops</h1>
    </div>
  </div>
  )
}
