import React from 'react'
import PropTypes from 'prop-types'


const CircleImage = (props) => {

  return (
    <img id="circle-avatar" src={props.url} alt="This is an icon" />
  )
}

CircleImage.propTypes = {
  url: PropTypes.string.isRequired
}

export default CircleImage
