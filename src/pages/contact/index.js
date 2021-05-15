import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import ReCaptchaButton from '../../components/ReCaptchaButton'
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isValidated: false,
      sectionHeight: '90vh'
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('https://getform.io/f/aa9fbbdd-67ad-4142-b133-47c17f23bf5c', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  updateSectionHeight = () => {
    console.log(window.innerHeight)
    if(window.innerHeight > 750) {
      this.setState({ sectionHeight: '83vh' })
    } else {
      this.setState({ sectionHeight: '100%' })
    }
  }

  componentDidMount() {
    this.updateSectionHeight()
    window.addEventListener('resize', this.updateSectionHeight.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSectionHeight.bind(this))
  }

  render() {
    return (
      <Layout>
        <section className="section" style={{ height: this.state.sectionHeight }}>
          <div className="container">
            <div className="content">
              <h1>Contact</h1>
              <GoogleReCaptchaProvider reCaptchaKey="6LcgYNYaAAAAAMrL1xmDbzDidgweyvNLGxJstIRE">
                <form
                  name="contact"
                  method="post"
                  action="https://getform.io/f/aa9fbbdd-67ad-4142-b133-47c17f23bf5c"
                  style={{ marginBottom: '3%' }}
                >
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value="contact" />
                  <div hidden>
                    <label>
                      Don’t fill this out:{' '}
                      <input name="bot-field" onChange={this.handleChange} />
                    </label>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'name'}>
                      Your name
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'name'}
                        onChange={this.handleChange}
                        id={'name'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'email'}>
                      Email
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'email'}
                        name={'email'}
                        onChange={this.handleChange}
                        id={'email'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'message'}>
                      Message
                    </label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        name={'message'}
                        onChange={this.handleChange}
                        id={'message'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <ReCaptchaButton />
                  </div>
                </form>
              </GoogleReCaptchaProvider>
              <div className="columns">
                <div className="column"></div>
                <div className="column" style={{ border: '1px solid #333' }}>
                  <p>
                    Solar Engineering Consultants <br/>
                    1855 First Ave <br/>
                    Suite 103 <br/>
                    San Diego, CA 92101 <br/>
                  </p>
                </div>
                <div className="column"></div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
