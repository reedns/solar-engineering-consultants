import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from 'gatsby'

const SubNavbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
      path: window.location.pathname
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the subnavbar accordingly
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

  onServicesIndex = () => {
    return this.state.path === '/services'
  }

  displayAnchorLinks = () => {
    if (this.onServicesIndex()) {
      return (
        <div className="anchors">
          <AnchorLink className="navbar-item" href="#engineering">
            Project Engineering
          </AnchorLink>
          <AnchorLink className="navbar-item" href="#commissioning">
            Performance Testing
          </AnchorLink>
          <AnchorLink className="navbar-item" href="#development">
            Development
          </AnchorLink>
          <AnchorLink className="navbar-item" href="#assets-data">
            Asset Management
          </AnchorLink>
          <AnchorLink className="navbar-item" href='#qa'>
            QA
          </AnchorLink>
          <span className="navbar-item"> | </span>
        </div>
      )
    }
  }

  render() {
    const textPosition = this.onServicesIndex() ? 'centered' : 'left'
    const indexActive = this.onServicesIndex() ? 'active' : ''
    const astmActive = this.onServicesIndex() ? '' : 'active'
    return (
      <nav
        className={`subnavbar is-transparent has-text-${textPosition}`}
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="subnavbar-brand">
            {/* Hamburger menu */}
            <div
              className={`subnavbar-burger burger ${this.state.navBarActiveClass}`}
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
            className={`subnavbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="subnavbar-start">
              <Link className={`subnav-link ${indexActive}`} to="/services">
                Services
              </Link>
              <span className="navbar-item"> | </span>
              { this.displayAnchorLinks() }
              <Link className={`subnav-link ${astmActive}`} to="/services/astm-capacity-testing">
                ASTM Capacity Testing
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default SubNavbar

