import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import SiteConfig from '../config/site'
import Layout from "../components/layout"
import Seo from "../components/seo/seo"
import Hero from "../components/hero/hero"
import Video from "../components/video/video"
import Visualizer from "../components/visualizer/visualizer"
import Diamond from "../components/dividers/diamondDivider"
import Cards from "../components/cards/cards"
import Whychooseusheading from "../components/headings/whychooseusHeading"
import Freeestimate from "../components/cta/freeEstimate"
import Ourprocess from "../components/OurProcess/ourProcess"
import Homefaq from "../components/faq/homeFaq"



const {title, description} = SiteConfig



const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <h1>Home Page</h1>
    <h2>{SiteConfig.company}</h2>

    <Hero />
    <Video />
    <Visualizer />
    <Diamond />
    <Whychooseusheading />
    <Cards />
    <Diamond />
    <Ourprocess />
    <Diamond />
    <Freeestimate />
    <Homefaq />
  

    
    


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
