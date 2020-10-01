import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import './AboutPage.css'

// Export Template for use in CMS preview
export const AboutPageTemplate = ({
title,
subtitle,
featuredImage,
missionStatement,
about,
vision

                                    }) => (
  <main className="AboutPage">
    <div className="marginContainer">
      <PageHeader
        title={title}
        subtitle={subtitle}
        backgroundImage={featuredImage}
      />
    </div>

    <section className="section">
      <div className="container">
        <div className="flexcontainer">
            <h1 className="header">Mission Statement</h1>
            <div className="flexitem">
              <Content source={missionStatement} />
            </div>
        </div>
        <br />
        <div className="flexcontainer">
          <h1 className="header">About</h1>
          <div className="flexitem">
            <Content source={about} />
          </div>
        </div>
        <br />
        <div className="flexcontainer">
          <h1 className="header">Vision</h1>
          <div className="flexitem">
            <Content source={vision} />
          </div>
        </div>
      </div>
    </section>
  </main>
)

const AboutPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <AboutPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)
export default AboutPage

export const pageQuery = graphql`
  query AboutPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
        missionStatement
        about
        vision
      }
    }
  }
`
