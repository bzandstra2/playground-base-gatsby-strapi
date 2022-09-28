import React from 'react'
import { Helmet } from "react-helmet"

export default function WebsiteSchema({metaData}) {

  const {company, siteUrl, urlPath, mainContactPhone, defaultDescription, image } = metaData

  const organizationLd = {
    "@context": `https://schema.org/`,
    "@type": "Organization",
    "additionalType": "Countertop Store",
    "name": company,
    "url": siteUrl,
    "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/images/logo.png`
    },
    "description": defaultDescription,
    "contactPoint": [{
        "@type": "ContactPoint",
        "telephone": mainContactPhone,
        "contactType": "sales",
        "areaServed": ["US"]
    }],
    "image": {
        "@type": "ImageObject",
        "url": image
    }
  }

  const websiteLd = {
    "@context": `https://schema.org/`,
    "@type": "Website",
    "name": company,
    "url": siteUrl,
    "logo": `${siteUrl}/images/logo.png`,
    "contactPoint": [{
        "@type": "ContactPoint",
        "telephone": mainContactPhone,
        "contactType": "sales",
        "areaServed": ["US"]
    }],
  }

  const webPageLd = {
    "@context": "http://schema.org",
    "@id": `${siteUrl}${urlPath}`,
    "@type": "WebPage",
    "url": `${siteUrl}${urlPath}`,
    "name": company
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(organizationLd, undefined, 4)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteLd, undefined, 4)}</script>
      <script type="application/ld+json">{JSON.stringify(webPageLd, undefined, 4)}</script>
    </Helmet>
  )
}
