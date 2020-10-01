import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import Content from './Content'
import './PictureLink.css'

const PictureLink = ({
                      title,
                      subtitle,
                      backgroundImage,
                      link,
                      className = ''
                    }) => {
  return (
    <a href={link} style={{textDecoration: "none"}} >
      <div className={`PictureLink relative ${className}`}>
        {backgroundImage && (
          <Image
            background
            resolutions="large"
            src={backgroundImage}
            alt={title}
            size="cover"
          />
        )}
        <div className="container relative">
          <h1 className="PictureLink--Title">{title}</h1>
          {subtitle && (
            <Content className="PictureLink--Subtitle" src={subtitle} />
          )}
        </div>
      </div>
    </a>
  )
}

PictureLink.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default PictureLink
