import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Ourprocessheading from '../headings/ourProcessHeading'


export default function ourProcess() {
  return (
    

    <div className="pt-10"><Ourprocessheading />
    
        <div className="flex flex-col flex-wrap md:flex-row justify-between align-center">
            <div className="max-w-lg m-auto w-auto p-8">
            <StaticImage src="../../images/detailed-countertop-infographic-3.png" alt="kitchen countertop infographic" />
            </div>
            <div className="m-auto w-auto p-4">
                <StaticImage src="../../images/kitchen-counter-overlap.png" alt="kitchen counter overlap" />
            </div>
        </div>
    
    </div>
    

   
    

    
  )
}


