import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faBolt } from '@fortawesome/free-solid-svg-icons'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const iconStyle = { color: '#009e87' }
const iconTextStyle = { margin: "0 1rem 0 0.5rem" }
const titleStyle = { marginBottom: 0 }
const descriptionStyle = { marginTop: "1rem" }
const imgContainerStyle = { width: '100%', display: 'inline-block' }
const sectionStyle = { width: '100%' }

const FeatureGrid = ({ gridItems }) => (
  <div>
    {gridItems.map(item => (
      <div key={item.title} className="columns project-block is-mobile is-centered">
        <section className="section section--gradient" style={sectionStyle}>
          <div className="column is-10 is-offset-1">
            <div className="columns is-vcentered ">
              <div key={item.text} className="column is-one-third">
                <section className="section">
                  <div className="has-text-centered">
                    <div style={imgContainerStyle}>
                      <PreviewCompatibleImage imageInfo={item} />
                    </div>
                  </div>
                </section>
              </div>
              <div className="column is-two-thirds">
                <h4 style={titleStyle}>{item.title} </h4>
                <div>
                  <FontAwesomeIcon icon={faLightbulb} style={iconStyle} />
                  <span style={iconTextStyle}>{item.utility}</span>
                  <FontAwesomeIcon icon={faBolt} style={{ color: '#009e87' }} />
                  <span style={iconTextStyle}>{item.power}</span>
                </div>
                <p style={descriptionStyle}>
                  <strong>{item.lead} </strong>
                  {item.text}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
