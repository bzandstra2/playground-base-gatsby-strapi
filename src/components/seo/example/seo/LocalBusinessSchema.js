import React from 'react'
import { Helmet } from "react-helmet"

export default function LocalBusinessSchema({metaData}) {

  const {company, siteUrl, mainAddress, mainContactPhone, mainEmail, defaultDescription, image } = metaData

  const localBusinessLd = {
    "@context": `https://schema.org/`,
    "@type": "LocalBusiness",
    "additionalType": "Countertop Store",
    "name": company,
    "url": siteUrl,
    "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/images/logo.png`
    },
    "description": defaultDescription,
    "priceRange": "$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": mainAddress.streetAddress,
      "addressLocality": mainAddress.city,
      "addressRegion": mainAddress.state,
      "postalCode": mainAddress.zip,
      "addressCountry":"United States",
      "telephone": mainContactPhone
    },
    "contactPoint": [{
        "@type": "ContactPoint",
        "telephone": mainContactPhone,
        "email": mainEmail,
        "contactType": "sales",
        "areaServed": ["US"]
    }],
    "image": {
        "@type": "ImageObject",
        "url": image
    }
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(localBusinessLd, undefined, 4)}</script>
    </Helmet>
  )
}

// `

// <script type="application/ld+json">{


// "geo": {
// "@type": "GeoCoordinates",
// "latitude": "38.0279975",
// "longitude": "-84.751751,10"
// },
// "hasMap": "https://www.google.com/maps/place/Granite+Depot+of+Lexington/@38.0279975,-84.751751,10z/data=!4m8!1m2!2m1!1sGranite+Depot+of+Lexington!3m4!1s0x88425fcc577379fd:0x2d27fc12e9f4495a!8m2!3d37.9354999!4d-84.5479771",
// "sameAs":[
// "https://www.facebook.com/granitedepotlexington/",
// "https://www.instagram.com/gd_lexington/",
// "https://twitter.com/gd_lexington",
// "https://www.houzz.com/pro/gd-lexington"
// ]
// }</script>

// `