import React from "react";

const ServiceBackground = ({ image, children }) => {
  if (image) {
    return(
      <div
        style={{
          backgroundImage: `
            url(${
              !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })
          `,
          backgroundPosition: `center center`,
          backgroundSize: 'cover'
        }}
      >
        {children}
      </div>
    )
  } else {
    return(<div>{children}</div>)
  }
}

export default ServiceBackground;
