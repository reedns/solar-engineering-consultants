import CMS from 'netlify-cms-app'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import ProjectPagePreview from './preview-templates/ProjectPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import ServicePagePreview from './preview-templates/ServicePagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('projects', ProjectPagePreview)
CMS.registerPreviewTemplate('services', ServicePagePreview)

const config = { }
// Important to remove your backend config and replace it in this setup
if (process.env.NODE_ENV === 'development') {
  const FileSystemBackend = require('netlify-cms-backend-fs');
  config.backend = {
    "name": "file-system",
    "api_root": "/api"
  }
  config.display_url = "http://localhost:8000"
  CMS.registerBackend('file-system', FileSystemBackend)
} else {
  config.backend = {
    "backend": {
      "name": "github",
      "repo": "reedns/solar-engineering-consultants",
      "branch": "master"
    }
  }
}
CMS.init({config})
