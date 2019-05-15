import CMS from 'netlify-cms-app'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProjectPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('projects', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)

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
