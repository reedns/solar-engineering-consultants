import React from "react";

const SliderImage = ({ title, image, position }) => (
  <div
    className="full-width-image margin-top-0"
    style={{
      backgroundImage: `
        linear-gradient(
          rgba(0, 0, 0, 0.4),
          rgba(0, 0, 0, 0.4)
        ),
        url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })
      `,
      backgroundPosition: `${position} center`,
      backgroundAttachment: 'fixed',
    }}
  >
    <div
      style={{
        display: 'flex',
        height: '150px',
        lineHeight: '1',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1
        className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen title-text"
        style={{ textAlign: 'center' }}
      >
        {title}
      </h1>
    </div>
  </div>
)

export default SliderImage
