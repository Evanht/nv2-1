import React from 'react'


class MainContentArea extends React.Component {

  render() {
    return (
      <div className="background-black">
        {this.props.children}
      </div>
    )
  }
}

export default MainContentArea
