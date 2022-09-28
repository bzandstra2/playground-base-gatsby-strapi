import React from 'react'
import { Helmet } from "react-helmet"

const priceUntil = new Date();
priceUntil.setFullYear(priceUntil.getFullYear() + 1)


export default function WebsiteSchema({metaData}) {

  const {description, product, siteUrl, urlPath} = metaData
  const {name, sku, price, imageArr} = product

  const productPageLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": name,
    "image": imageArr,
    "description": description,
    "sku": sku,
    // "mpn": "925872",
    // "brand": {
    //   "@type": "Brand",
    //   "name": "ACME"
    // },
    // "review": {
    //   "@type": "Review",
    //   "reviewRating": {
    //     "@type": "Rating",
    //     "ratingValue": "4",
    //     "bestRating": "5"
    //   },
    //   "author": {
    //     "@type": "Person",
    //     "name": "Fred Benson"
    //   }
    // },
    // "aggregateRating": {
    //   "@type": "AggregateRating",
    //   "ratingValue": "4.4",
    //   "reviewCount": "89"
    // },
    "offers": {
      "@type": "Offer",
      "url": `${siteUrl}/${urlPath}`,
      "priceCurrency": "USD",
      "price": price,
      "priceValidUntil": priceUntil,
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock"
    }
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(productPageLd, undefined, 4)}</script>
    </Helmet>
  )
}
