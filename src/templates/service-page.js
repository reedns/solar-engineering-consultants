import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import SimpleSlider  from '../components/SimpleSlider.js'
import ServiceBackground from '../components/ServiceBackground.js'

export const ServicePageTemplate = ({
  title,
  heading,
  content, image,
  image2,
  image3,
  contentComponent,
  backgroundImage,
  path
}) => {
  const PageContent = contentComponent || Content
  const bgPosition = path == '/services/commissioning' ? 'top' : 'center'

  return (
    <div>
      <SimpleSlider image={image} image2={image2} image3={image3} />
      <div className="content">
        <ServiceBackground image={backgroundImage} position={bgPosition}>
          <section className="section section--gradient">
            <div className="container">
              <div className="columns">
                <div className="column is-10 is-offset-1">
                  <div className="section">
                    <h2 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h2>
                    <PageContent className="content" content={content} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ServiceBackground>
      </div>
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
        path={post.frontmatter.path}
        content={post.html}
        image={post.frontmatter.image}
        image2={post.frontmatter.image2}
        image3={post.frontmatter.image3}
        heading={post.frontmatter.heading}
        backgroundImage={post.frontmatter.background_image}
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
        path
        heading
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image2 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image3 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        background_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
