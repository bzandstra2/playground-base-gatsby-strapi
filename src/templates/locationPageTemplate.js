import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export default function LocationocationPageTemplate({data}) {

  return (
    <Layout>
      <h1>Location</h1>
      <pre>
      { JSON.stringify(data, null, 2) }
      </pre>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String){
    strapiLocation(id: {eq: $id}) {
      name
      street_address
      city
      state
      zip
      callrail_number
      hours {
        Monday {
          Open
          Close
        }
        Tuesday {
          Open
          Close
        }
        Wednesday {
          Open
          Close
        }
        Thursday {
          Open
          Close
        }
        Friday {
          Open
          Close
        }
        Saturday {
          Open
          Close
        }
        Sunday {
          Open
          Close
        }
      }
    }
  }`;


