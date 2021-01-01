import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { globalHistory } from '@reach/router';

const onSalesIndex = () => {
  return globalHistory.location.pathname === '/services'
}

export const ServicePageTemplate = ({ title, heading, content, image, contentComponent }) => {
  const PageContent = contentComponent || Content
  const indexActive = onSalesIndex() ? 'is-active' : null
  const astmActive = onSalesIndex() ? null : 'is-active'

  return (
    <div className="content">
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0, 0, 0, 0.2),
              rgba(0, 0, 0, 0.2)
            ),
            url(${
              !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })
          `,
          backgroundPosition: 'bottom left',
          backgroundAttachment: 'fixed',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-1 title-text"
          style={{ color: 'white', margin: '1rem 0 0' }}
        >
          {title}
        </h1>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <div className="tabs">
                  <ul>
                    <li className={ indexActive }>
                      <Link to="/services">
                        Overview
                      </Link>
                    </li>
                    <li className={ astmActive }>
                      <Link to="/services/astm-capacity-testing">
                        ASTM Capacity Testing
                      </Link>
                    </li>
                  </ul>
                </div>
                <h2 className="has-text-weight-semibold is-size-2">
                  {heading}
                </h2>
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const ServicePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ServicePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        image={post.frontmatter.image}
        heading={post.frontmatter.heading}
      />
    </Layout>
  )
}

ServicePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ServicePage

export const servicePageQuery = graphql`
  query ServicePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heading
        image {
          childImageSharp {
            fluid(maxWidth: 2048) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
