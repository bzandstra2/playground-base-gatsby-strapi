import React from 'react'

export default function LocationHeader({company, totalCount}) {

  return (
    <div className="bg-base-50">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-1 text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl lg:text-6xl">
            Locations
          </p>
          <p className="mx-auto mt-5 max-w-xl text-xl text-primary-800">
            {`${company} has ${totalCount} locations`}
          </p>
        </div>
      </div>
    </div>
  )
}


