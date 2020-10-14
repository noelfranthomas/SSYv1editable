import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PageHeader from "../components/PageHeader";

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
      <div className="marginContainer">
          <PageHeader
              title={program1}
              backgroundImage={image1}
          />
      </div>
      <br />
      <div className="textcontainer">
          <div className="marginContainer">
              <h3>{smallDescription1}</h3>
              <p>{description1}</p>
          </div>
      </div>

      <br/>

      <div className="marginContainer">
          <PageHeader
              title={program2}
              backgroundImage={image2}
          />
      </div>
      <br />
      <div className="textcontainer">
          <div className="marginContainer">
              <h3>{smallDescription2}</h3>
              <p>{description2}</p>
          </div>
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
