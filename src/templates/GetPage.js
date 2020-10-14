import React from 'react'
import { graphql } from 'gatsby'

import PictureLink from '../components/PictureLink'
import Layout from '../components/Layout'
import './GetPage.css'
import Popup from '../components/Popup'

// Export Template for use in CMS preview
export const GetPageTemplate = ({
                                      volunteer,
  volunteerLink,
  donate,
  donateLink

                                    }) => (
  <main className="GetPage">
    <br />
    <div className="marginContainer">
      <PictureLink
        title="Volunteer"
        subtitle={volunteer}
        link={volunteerLink}
        backgroundImage='https://ucarecdn.com/a7f36998-7a41-4a63-b0b1-91ef46cd638b/'
      />

      <br />

      <PictureLink
        title="Donate"
        subtitle={donate}
        link={donateLink}
        backgroundImage='https://ucarecdn.com/159203d3-881d-4218-baa1-ca4427b48d0d/'
      />
    </div>

    <br />

  </main>
)

const GetPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <GetPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)
export default GetPage

export const pageQuery = graphql`
  query GetPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        volunteer
        volunteerLink
        donate
        donateLink
      }
    }
  }
`
