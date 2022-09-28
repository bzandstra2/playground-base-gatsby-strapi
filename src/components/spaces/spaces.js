import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

export default function Spaces() {
    

  return (
    <div className="flex flex-col align-center justify-center p-5 mt-10">
        <div className="block p-4 m-auto">
        <h1 className="text-6xl p-4 mt-10">We Create Spaces for Life</h1>
        </div>
        
        <div className="block p-4 m-auto">
        <StaticImage 
            src="../../images/diamond-divider.svg"
            alt="Granite countertop logo divider"
            placeholder="blurred"
            layout="fixed"
            width={200}
            height={200}
        />
       </div>
        {/* <pre>
            { JSON.stringify(props, null, 2) }
        </pre> */}
    </div>
  )
  
}