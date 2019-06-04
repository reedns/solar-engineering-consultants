import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, content, image, contentComponent }) => {
  const PageContent = contentComponent || Content

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
        <h2
          className="has-text-weight-bold is-size-1 title-text"
          style={{ color: 'white', margin: '1rem 0 0' }}
        >
          {title}
        </h2>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <PageContent className="content" content={content} />
                <div className="has-text-centered">
                  <img
                    style={{width: 128, borderRadius: '50%'}}
                    alt="Caleb Saunders"
                    src="/img/profile pic.png"
                  >
                  </img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        image={post.frontmatter.image}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
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
