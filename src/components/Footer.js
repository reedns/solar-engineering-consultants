import React from 'react'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <p>
            &#169; 2019 Solar Engineering Consultants
          </p>
          <p>
            1855 First Ave, Suite 103,
            San Diego, CA 92101
          </p>
        </div>
      </footer>
    )
  }
}

export default Footer
