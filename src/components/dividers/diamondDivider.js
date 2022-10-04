import React from 'react'
import Diamond from "../../images/diamond-divider.svg"
import { StaticImage } from 'gatsby-plugin-image'

export default function products() {
  return (
    <div className="relative">
    <div className="absolute inset-0 flex items-center" aria-hidden="true">
    </div>
    <div className="relative flex justify-center">
      <span className="bg-white px-2 text-gray-500">
       <Diamond />
      </span>
    </div>
  </div>
  )
}
