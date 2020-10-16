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
  volunteerImage,
  donate,
  donateLink,
  donateImage

                                    }) => (
  <main className="GetPage">
    <br />
    <div className="marginContainer">
      <PictureLink
        title="Volunteer"
        subtitle={volunteer}
        link={volunteerLink}
        backgroundImage={volunteerImage}
      />

      <br />

      <PictureLink
        title="Donate"
        subtitle={donate}
        link={donateLink}
        backgroundImage={donateImage}
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
        volunteerImage
        donate
        donateLink
        donateImage
      }
    }
  }
`
