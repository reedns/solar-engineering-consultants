import React from 'react'
import { Link } from 'gatsby'

const NavLink = ({ children, to }) => {
  const isActive = window.location.pathname.includes(to);
  const activeClass = isActive ? 'active' : '';
  return(
    <Link className={`navbar-item ${activeClass}`} to={to}>
      {children}
    </Link>
  )
}

export default NavLink
