import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const SubNavbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
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

  displayAnchorLinks = () => {
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
          Engineering & QA
        </AnchorLink>
      </div>
    )
  }

  render() {
    return (
      <nav
        className={"subnavbar is-transparent has-text-centered"}
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
              { this.displayAnchorLinks() }
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default SubNavbar

