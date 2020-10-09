import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import { Splide, SplideSlide } from '../../node_modules/@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

// Export Template for use in CMS preview
export const ProgramPageTemplate = ({
                                      program1,
                                      image1,
                                      description1,
                                      smallDescription1,
                                      program2,
                                      image2,
                                      description2,
                                      smallDescription2
                                    }) => (
  <main className="ProgramPage">
      <h1>HELLO PROGRAM PAGE SUCKS BTW</h1>
      <p>{program1}</p>
      <p>{image1}</p>
      <p>{description1}</p>
      <p>{smallDescription1}</p>
      <p>{program2}</p>
  </main>
)

const ProgramPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ProgramPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)
export default ProgramPage

export const pageQuery = graphql`
  query ProgramPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        program1
        image1
        smallDescription1
        description1
        program2
        image2
        smallDescription2
        description2
      }
    }
  }
`
