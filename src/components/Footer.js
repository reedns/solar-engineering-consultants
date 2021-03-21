import React from 'react'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <p>
            &#169; 2021 Solar Engineering Consultants
            <br/>
            San Diego, CA
          </p>
        </div>
      </footer>
    )
  }
}

export default Footer
