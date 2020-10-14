import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import './PartnersPage.css'

// Export Template for use in CMS preview
export const PartnersPageTemplate = ({
                                       partnerName1,
                                       partnerDesc1,
                                       partnerImage1,
                                       partnerLink1,
                                       partnerName2,
                                       partnerDesc2,
                                       partnerImage2,
                                       partnerLink2
                                  }) => (
  <main className="PartnersPage">

    <h2 className="thankyou">
      "Our heartfelt gratitude goes out to the following for their support"
    </h2>

    <div className="marginContainer">
      <PageHeader
        backgroundImage={partnerImage1}
      />
    </div>

    <section className="section">
      <div className="container">
        <div className="flexcontainer">
          <h1 className="header">{partnerName1}</h1>
          <div className="flexitem">
            <Content source={partnerDesc1} />
          </div>
        </div>
      </div>
    </section>

    <div className="marginContainer">
      <PageHeader
        backgroundImage={partnerImage2}
        link={partnerLink2}
      />
    </div>

    <section className="section">
      <div className="container">
        <div className="flexcontainer">
          <h1 className="header">{partnerName2}</h1>
          <div className="flexitem">
            <Content source={partnerDesc2} />
          </div>
        </div>
      </div>
    </section>


  </main>
)

const PartnersPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <PartnersPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)
export default PartnersPage

export const pageQuery = graphql`
  query PartnersPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        partnerName1
        partnerDesc1
        partnerImage1
        partnerLink1
        partnerName2
        partnerDesc2
        partnerImage2
        partnerLink2
      }
    }
  }
`
