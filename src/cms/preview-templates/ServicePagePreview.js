import React from 'react'
import PropTypes from 'prop-types'
import { ServicePageTemplate } from '../../templates/service-page'

const ServicePagePreview = ({ entry, getAsset }) => {
  return(
    <ServicePageTemplate
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
      image={entry.getIn(['data', 'image'])}
      heading={entry.getIn(['data', 'heading'])}
    />
  )
}

ServicePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func
}

export default ServicePagePreview
