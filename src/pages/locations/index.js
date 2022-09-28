import React from 'react'
import { graphql } from 'gatsby'
import siteConfig from '../../config/site'
import Layout from '../../components/layout'
import LocationHeader from '../../components/locations/locationHeader'

const {company} = siteConfig

export default function Locations({data}) {
  const {nodes} = data.allStrapiLocation
  return (
   
    <Layout>
      <LocationHeader totalCount = {data.allStrapiLocation.totalCount} company = {company}/>
      <LocationHeader totalCount = "Ten" company = "My Fabulous Company"/>
      <h1 className="pl-4">{company } Locations</h1>
       {/* <pre>
      { JSON.stringify(data, null, 2) }
      </pre> */}
      <ul>
      {nodes.map((node) =>
        <div key={node.strapi_id} className="m-4">
          <h1>{node.name}</h1>
          <div>{node.street_address}</div>
          <div>{node.city}, {node.state}  {node.zip}</div>
          <h2>{node.callrail_number}</h2>
        </div>
        )}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query ($company: String) {
    allStrapiLocation(filter: {company: {name: {eq: $company}}}) {
      totalCount
      nodes {
        name
        street_address
        city
        state
        zip
        callrail_number
        strapi_id
      }
    }
  }`
