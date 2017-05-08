import React from 'react'
import { Link } from 'react-router-dom'

class CommunitySidebar extends React.Component {
  render(){
    return (
      <div className="background-community-sidebar">

        <ul className='community-sidebar-list'>
          <h3> CATEGORIES </h3>
          <Link to='/course-information'> <li> Course Information </li> </Link>
          <Link to='/lectures'> <li> Lectures  </li> </Link>
          <Link to='/seminars'> <li> Seminars </li> </Link>
          <Link to='/assignments'> <li> Assignments </li> </Link>
        </ul>
      </div>
    )
  }
}

export default CommunitySidebar
