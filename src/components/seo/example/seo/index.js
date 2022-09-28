import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"

import MetaTags from './MetaTags'
import WebsiteSchema from './WebsiteSchema'
import ProductSchema from './ProductSchema'
import LocalBusinessSchema from './LocalBusinessSchema'
import CustomScripts from './CustomHeadScripts'

export default function SEOindex({metaData}) {

  const { pathname } = useLocation()
  const { title, description, image, product, canonical } = metaData
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
    company,
    mainAddress,
    mainContactPhone,
    mainEmail
  } = site.siteMetadata

  const meta = {
    title: title || defaultTitle,
    canonical: `${siteUrl}${pathname}`,
    description: description || defaultDescription,
    defaultDescription: defaultDescription,
    image: defaultImage,
    company,
    siteUrl,
    urlPath: pathname,
    companyLogo: `${siteUrl}/images/logo/logo.png`,
    mainAddress,
    mainContactPhone,
    mainEmail,
    twitterUsername,
    product
  }

  if(image) {
    meta.image = `${siteUrl}/${image}`
  }
  if(canonical) {
    meta.canonical = `${siteUrl}/${canonical.replace(/^\/|\/$/g, '')}`
  }

  return (
    <>
      <MetaTags metaData={meta}/>
      <LocalBusinessSchema metaData={meta}/>
      <WebsiteSchema metaData={meta}/>
      {product ? <ProductSchema metaData={meta}/> : null}
      <CustomScripts />
    </>
  )
}

// const query = graphql`
//   query metaSEO {
//     site {
//       siteMetadata {
//         company
//         siteUrl
//         mainContactPhone
//         mainAddress {
//           streetAddress
//           city
//           state
//           zip
//         }
//         defaultTitle: title
//         defaultDescription: description
//         defaultImage
//         twitterUsername
//       }
//     }
//   }
// `