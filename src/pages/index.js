import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import SiteConfig from '../config/site'
import Layout from "../components/layout"
import Seo from "../components/seo/seo"
import Hero from "../components/hero/hero"


const {title, description} = SiteConfig



const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <h1>Home Page</h1>
    <h2>{SiteConfig.company}</h2>

    <Hero />

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
