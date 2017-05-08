import React from 'react'
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import CircleImage from './smallcomponents/CircleImage.jsx'


class SubjectSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      url: "http://localhost:3001/api/subjects",
      pollInterval: 2000
    };
    this.loadSubjectsFromServer = this.loadSubjectsFromServer.bind(this);
  }

  componentDidMount() {
    this.loadSubjectsFromServer();
    this.interval = setInterval(this.loadSubjectsFromServer, this.state.pollInterval)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  loadSubjectsFromServer() {
    axios.get(this.state.url)
      .then(res => {
        this.setState({data: res.data})
      })
  }

  render() {
    return (
      <div className="background-black">
          {this.state.data.map( (subject) =>
            <Row key={subject._id}>
              <Col xs={12}>
                <CircleImage url={subject.image}/>
              </Col>
            </Row>
          )}
      </div>
    );
  }
}


export default SubjectSidebar
