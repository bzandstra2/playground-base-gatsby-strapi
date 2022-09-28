import React from "react"
import { Helmet } from "react-helmet"


const SEO = ({ metaData }) => {

  const {title, description, image, siteUrl, urlPath, twitterUsername, article, canonical} = metaData


  return (
    <Helmet 
      htmlAttributes={{
        lang: 'en',
      }}
      title={title}>
      <link rel="canonical" href={canonical}/>
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {urlPath && <meta property="og:url" content={`${siteUrl}${urlPath}`} />}

      {(article ? true : null) && <meta property="og:type" content="article" />}

      {title && <meta property="og:title" content={title} />}

      {description && (
        <meta property="og:description" content={description} />
      )}

      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />

      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}

      {title && <meta name="twitter:title" content={title} />}

      {description && (
        <meta name="twitter:description" content={description} />
      )}

      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  )
}

export default SEO
