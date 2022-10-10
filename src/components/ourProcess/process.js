import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Ourprocessheading from '../headings/ourProcessHeading'
import Infographic from './infographic'


export default function process() {
  return (
    <div className=""><Ourprocessheading />
    
    <div className="items-center md:grid md:grid-cols-2">
        <div className="flex max-w-3xl m-auto">
        <div className="m-auto max-w-xs grow-0 basis-4/6">
            <h4 className="text-xl lg:text-3xl  text-primary-600">Get a Free Estimate</h4>
            <p className="pb-8 text-sm lg:p-0">Give us the details of your vision and we will be back in touch within 24 hours with an estimate</p>
            <h4 className="lg:pt-4 text-xl lg:text-3xl md:text-xl  text-primary-600">Choose Your Material &#38; Colors</h4>
            <p className="pb-8 text-sm lg:p-0">One of our design specialists will guide you through countertop surface options, color choices, tile, backsplash, sinks, cabinets and flooring options.</p>
            <h4 className="lg:pt-4 text-xl md:text-xl lg:text-3xl  text-primary-600">Schedule Templating</h4>
            <p className="pb-8 text-sm lg:p-0">Our professional templaters will come to your site to measure all surfaces. The exact material needs are determined and any potential problems identified.</p>
            <h4 className="lg:pt-4 text-xl md:text-xl lg:text-3xl text-primary-600">Custom Layout</h4>
            <p className="pb-8 text-sm lg:p-0">We offer an option to choose the area your counter will be cut from. This allows you to see the exact color, pattern, and seam placement for your new counters.</p>
            <h4 className="text-xl md:text-xl lg:text-3xl text-primary-600">Installation</h4>
            <p className="text-sm">Most installs are completed in a day, and we will schedule your installation after the template is completed.</p>
        </div>
        <div className="fill-primary-600 md:pt-10 max-w-xs">
        <Infographic 
        className="fill-primary-600"
        />
        </div>
        </div>
        <div className="m-auto">
            <StaticImage src="../../images/kitchen-counter-overlap.png" alt="kitchen counter overlap" />
        </div>
    </div>

</div>
  )
}
