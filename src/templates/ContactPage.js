import React from 'react'
import { MapPin, Smartphone, Mail } from 'react-feather'
import { graphql } from 'gatsby'

import FormSimpleAjax from '../components/FormSimpleAjax'
import Content from '../components/Content'
import Layout from '../components/Layout'
import './ContactPage.css'

// Export Template for use in CMS preview
export const ContactPageTemplate = ({
  body,
  address,
  email,
}) => (
  <main className="Contact">

    <section className="section Contact--Section1">
      <div className="container Contact--Section1--Container">
        <div>
          <Content source={body} />
          <div className="Contact--Details">
            {address && (
              <a
                className="Contact--Details--Item"
                href={`https://www.google.com.au/maps/search/${encodeURI(
                  address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin /> {address}
              </a>
            )}
            {email && (
              <a className="Contact--Details--Item" href={`mailto:${email}`}>
                <Mail /> {email}
              </a>
            )}
          </div>
        </div>

        <div>
          <FormSimpleAjax name="Simple Form Ajax" />
        </div>
      </div>
    </section>

    <div className="mapContainer">
      <iframe
        className="map" title="map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10026.690997175832!2d-114.140695!3d51.0775908!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x36aff4a9e3c803fb!2sUniversity%20of%20Calgary!5e0!3m2!1sen!2sca!4v1595546993486!5m2!1sen!2sca"
        width="100vw" height="300" frameBorder="0" style={{
        border: `0`, allowFullScreen: ``, ariaHidden: 'false',
        tabIndex: '0'
      }}/>
    </div>

  </main>
)

const ContactPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ContactPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ContactPage

export const pageQuery = graphql`
  query ContactPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        address
        email
      }
    }
  }
`
