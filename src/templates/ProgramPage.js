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

    <br />

    <div className="marginContainer">
      <Splide>
        <SplideSlide>
          <PageHeader
            title={program1}
            subtitle={smallDescription1}
            backgroundImage={image1}
          />
        </SplideSlide>
        <SplideSlide>
          <PageHeader
            subtitle={description1}
          />
        </SplideSlide>
      </Splide>

      <br />

      <Splide>
        <SplideSlide>
          <PageHeader
            title={program2}
            subtitle={smallDescription2}
            backgroundImage={image2}
          />
        </SplideSlide>
        <SplideSlide>
          <PageHeader
            subtitle={description2}
          />
        </SplideSlide>
      </Splide>
    </div>

    <br />
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
