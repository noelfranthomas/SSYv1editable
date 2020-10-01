import React from 'react'
import { graphql } from 'gatsby'

import PictureLink from '../components/PictureLink'
import Layout from '../components/Layout'


// Export Template for use in CMS preview
export const HomePageTemplate = ({ Picturetitle, Picturesubtitle, PicturefeaturedImage, Picturelink, Picturetitle2, Picturesubtitle2, PicturefeaturedImage2, Picturelink2 }) => (
  <main className="Home">
    <br />

    <div className="marginContainer">
      <PictureLink
        title={Picturetitle}
        subtitle={Picturesubtitle}
        link={Picturelink}
        backgroundImage={PicturefeaturedImage}
      />

      <br />

      <PictureLink
        title={Picturetitle2}
        subtitle={Picturesubtitle2}
        backgroundImage={PicturefeaturedImage2}
        link={Picturelink2}
      />
    </div>

    <br />

  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        Picturetitle
        Picturesubtitle
        PicturefeaturedImage
        Picturelink
        Picturetitle2
        Picturesubtitle2
        PicturefeaturedImage2
        Picturelink2
      }
    }
  }
`
