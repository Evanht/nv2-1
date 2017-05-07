import React from 'react'

const ViewContainer = props => {
  return (
    <div className="full-max-height">
      {props.children}
    </div>
  )
}

export default ViewContainer
