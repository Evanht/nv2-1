import React from 'react'


class MainContentArea extends React.Component {

  render() {
    return (
      <div className="background-main-content-area">
        {this.props.children}
      </div>
    )
  }
}

export default MainContentArea
