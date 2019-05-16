import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faBolt } from '@fortawesome/free-solid-svg-icons'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div>
    {gridItems.map(item => (
      <div className="columns project-block is-centered">
        <div className="column is-10 is-offset-1">
          <div className="columns is-vcentered ">
            <div key={item.text} className="column is-one-third">
              <section className="section">
                <div className="has-text-centered">
                  <div
                    style={{
                      width: '240px',
                      display: 'inline-block',
                    }}
                  >
                    <PreviewCompatibleImage imageInfo={item} />
                  </div>
                </div>
              </section>
            </div>
            <div className="column is-two-thirds">
              <h4 style={{ marginBottom: 0 }}>{item.title} </h4>
              <div style={{ marginBottom: '1rem' }}>
                <FontAwesomeIcon icon={faLightbulb} style={{ color: '#009e87' }} />
                <span style={{ margin: "0 1rem 0.5rem" }}>{item.utility}</span>
                <FontAwesomeIcon icon={faBolt} style={{ color: '#009e87' }} />
                <span style={{ margin: "0 0.5rem 1rem" }}>{item.power}</span>
              </div>
              <p>
                <strong>{item.lead} </strong>
                {item.text}
              </p>
            </div>
          </div>
        </div>
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
