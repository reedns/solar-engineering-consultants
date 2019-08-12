import React from 'react'
import PropTypes from 'prop-types'
import { ServicePageTemplate } from '../../templates/service-page'

const ServicePagePreview = ({ entry, getAsset }) => {
  return(
    <ServicePagePreview />
  )
}

ServicePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func
}

export default ServicePagePreview
