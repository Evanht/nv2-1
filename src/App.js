import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Grid, Row, Col } from 'react-bootstrap';
import './styles/App.css'
import SubjectSidebar from './components/SubjectSidebar.jsx'
import CommunitySidebar from './components/CommunitySidebar'
import MainContentArea from './components/MainContentArea'
import LecturePage from './components/LecturePage'


class App extends Component {
  render() {
    return (
      <Router>
        <Grid fluid={true}>
          <Row className="show-grid">
            <Col xs={1} md={1} id="no-padding">
              {/*<SubjectSidebar data={[{ id:1, image: "http://www.freeiconspng.com/uploads/school-icon-png-28.png", route:"/university" }, { id:2, image: "https://image.freepik.com/free-icon/history-symbol-of-antique-building_318-59345.jpg", route:"/subject1" }, { id:3, image: "https://cdn1.iconfinder.com/data/icons/rounded-flat-country-flag-collection-1/2000/de-01.png", route:"/subject2" }, { id:4, image: "https://cdn1.iconfinder.com/data/icons/education-colored-icons-vol-2/128/100-512.png", route:"/subject3" } ]} /> */}
              <SubjectSidebar  />
            </Col>

            <Col xs={2} md={2} id="no-padding">
              <CommunitySidebar />
            </Col>

            <Col xs={9} md={9} id="no-padding">
              <MainContentArea>
                <Route path="/lectures" component={LecturePage} />
              </MainContentArea>
            </Col>
          </Row>
        </Grid>
      </Router>
    );
  }
}

export default App;
