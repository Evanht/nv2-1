import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './styles/App.css'
import SubjectSidebar from './components/SubjectSidebar.jsx'
import CommunitySidebar from './components/CommunitySidebar'
import MainContentArea from './components/MainContentArea'

class App extends Component {
  render() {
    return (
      <Grid fluid={true}>
        <Row className="show-grid">
          <Col xs={1} md={1} id="no-padding">
            <SubjectSidebar data={[{ id:1, image: "http://www.freeiconspng.com/uploads/school-icon-png-28.png", route:"/university" }, { id:2, image: "http://www.freeiconspng.com/uploads/school-icon-png-28.png", route:"/subject1" }, { id:3, image: "http://www.freeiconspng.com/uploads/school-icon-png-28.png", route:"/subject2" }, { id:4, image: "http://www.freeiconspng.com/uploads/school-icon-png-28.png", route:"/subject3" } ]} />
          </Col>

          <Col xs={2} md={2} id="no-padding">
            <CommunitySidebar />
          </Col>

          <Col xs={9} md={9} id="no-padding">
            <MainContentArea />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
