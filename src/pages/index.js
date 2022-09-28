import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import SiteConfig from '../config/site'
import Spaces from "../components/spaces/spaces"
import Layout from "../components/layout"
import Seo from "../components/seo/seo"




const {title, description} = SiteConfig



const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <h1>Home Page</h1>
    <h2>{SiteConfig.company}</h2>

    <div className="lg:relative">
        <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">The #1 choice for</span>{' '}
              <span className="block text-primary-600 xl:inline">Granite Countertops</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            Find your perfect countertop material from our selection of quartz, marble and granite countertops. Sourced from the highest quality vendors, our stone slab collection is unmatched in the Greenville - Spartanburg area.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                >
                  Get started
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-primary-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                >
                  Live demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-5/6 lg:w-1/2">
          <StaticImage
            className="absolute inset-0 h-full w-full object-cover"
            src="../images/granite-slabs.png" alt="hero image"
          />
        </div>
      </div>

      <div className="flex justify-center mt-48">
        <StaticImage 
          src="../images/congaree-reno-center-grand-opening-banner-desktop.jpeg"
          alt="grand opening banner"
          placeholder="blurred"
          layout="fixed"
          width={1293}
          height={324}
          
        />
      </div>

      <Spaces />
          
  


    
   

   
   
  
    

    {/* <pre>
      { JSON.stringify(SiteConfig, null, 2) }
    </pre> */}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title= "Home" />

export default IndexPage
