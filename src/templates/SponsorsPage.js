import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PageHeader from "../components/PageHeader";

// Export Template for use in CMS preview
export const SponsorsPageTemplate = ({
                                        sponsor1,
                                        image1,
                                        sponsor2,
                                        image2
                                    }) => (
    <main className="ProgramPage">

        <h2 className="thankyou">
            "Our heartfelt gratitude goes out to the following for their support"
        </h2>

        <div className="marginContainer">
            <PageHeader
                backgroundImage={image1}
            />
        </div>
        <br />
        <div className="textcontainer">
            <div className="marginContainer">
                <h3>{sponsor1}</h3>
            </div>
        </div>

        <br/>

        <div className="marginContainer">
            <PageHeader
                backgroundImage={image2}
            />
        </div>
        <br />
        <div className="textcontainer">
            <div className="marginContainer">
                <h3>{sponsor2}</h3>
            </div>
        </div>

        <br />
    </main>
)

const SponsorsPage = ({ data: { page } }) => (
    <Layout
        meta={page.frontmatter.meta || false}
        title={page.frontmatter.title || false}
    >
        <SponsorsPageTemplate {...page.frontmatter} body={page.html} />
    </Layout>
)
export default SponsorsPage

export const pageQuery = graphql`
  query SponsorsPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
      sponsor1
      image1
      sponsor2
      image2
      }
    }
  }
`
