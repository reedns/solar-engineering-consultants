import React from "react";

const ServiceBackground = ({ image, children, position = 'center' }) => {
  if (image) {
    return(
      <div
        style={{
          backgroundImage: `
            url(${
              !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })
          `,
          backgroundPosition: `${position} center`,
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
