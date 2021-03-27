import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/sec-logo.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
      servicesActive: false
    }
  }

  componentDidMount() {
    this.setState({ servicesActive: window.location.pathname.split('/').includes('services') })
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item" title="Logo">
                <img src={logo} alt="Solar Engineering Consultants" style={{ minHeight: '45px' }} />
              </Link>
            </div>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered"></div>
            <div className="navbar-end has-text-left">

              <div className="navbar-item has-dropdown is-hoverable">
                <a className={`navbar-link ${this.state.servicesActive ? 'active' : ''}`} data-active-path='services'>
                  Services
                </a>

                <div className="navbar-dropdown">
                  <Link activeClassName="active" className="navbar-item" to="/services/commissioning">
                    Commissioning
                  </Link>
                  <Link activeClassName="active" className="navbar-item" to="/services/astm-capacity-testing">
                    Performance & Capacity Testing
                  </Link>
                  <Link activeClassName="active" className="navbar-item" to="/services/quality-assurance">
                    Owner’s Representative QA/QC & CM
                  </Link>
                  <Link activeClassName="active" className="navbar-item" to="/services/development">
                    Development
                  </Link>
                  <Link activeClassName="active" className="navbar-item" to="/services/asset-management">
                    Asset Management & Data Analytics
                  </Link>
                  <Link activeClassName="active" className="navbar-item" to="/services/due-diligence">
                    Due Diligence
                  </Link>
                  <Link activeClassName="active" className="navbar-item" to="/services/independent-engineering">
                    Independent Engineering & Consultation
                  </Link>
                  <Link activeClassName="active" className="navbar-item" to="/services/project-engineering">
                    Project Engineering
                  </Link>
                  <Link activeClassName="active" className="navbar-item" to="/services/microgrid">
                    Microgrid & Edge Computing
                  </Link>
                </div>
              </div>

              <Link activeClassName="active" className="navbar-item" to="/projects">
                Projects
              </Link>
              <Link  activeClassName="active" className="navbar-item" to="/about">
                Company
              </Link>
              <Link activeClassName="active" className="navbar-item" to="/contact">
                Contact
              </Link>

            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
