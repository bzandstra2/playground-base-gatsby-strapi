import React from 'react'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { GatsbyImage } from "gatsby-plugin-image"
import Countertopheader from '../../components/pageHeaders/countertopHeader'
import Granitecountertops from '../../components/content/graniteCountertops'
import Marblecountertops from '../../components/content/marbleCountertops'
import Quartzcountertops from '../../components/content/quartzCountertops'
import Layout from '../../components/layout'

export default function Countertops({data}) {
  const {nodes} = data.allStrapiSlab
  return (
    <Layout>
      <h1>Countertops</h1>
      <Countertopheader />
      <Granitecountertops />
      <Marblecountertops />
      <Quartzcountertops />

      <ul>
      {nodes.map((node) =>
        <div key={node.strapi_id} className="m-4">
          <GatsbyImage 
            image={node.sample_image.localFile.childImageSharp.gatsbyImageData} 
            alt={`${node.name} ${node.material} Countertop Slab Sample Picture`} 
          />
          <h1>{node.name}</h1>
          <div>{node.street_address}</div>
          <div>{node.material}</div>
          <div className="prose mx-auto py-8">
          <div
              dangerouslySetInnerHTML={{
                __html: node.description.data.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
        )}
      </ul>

         <pre>
      { JSON.stringify(data, null, 2) }
      </pre>

    </Layout>
  )
}

export const query = graphql`
  query {
    allStrapiSlab {
      nodes {
        name
        material
        strapi_id
        description {
          data {
            childMarkdownRemark {
              html
              rawMarkdownBody
            }
          }
        }
        sample_image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

