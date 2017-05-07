import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';
import { Grid, Row, Col } from 'react-bootstrap';
import CircleImage from './smallcomponents/CircleImage.jsx'


class SubjectSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
    this.loadSubjectsFromServer = this.loadSubjectsFromServer.bind(this);
  }

  componentDidMount() {
    this.loadSubjectsFromServer();
    setInterval(this.loadSubjectsFromServer, this.props.pollInterval)
  }

  loadSubjectsFromServer() {
    axios.get(this.props.url)
      .then(res => {
        this.setState({data: res.data})
      })
  }

  render() {
    return (
      <div className="background-black">
        <Grid fluid={true}>
          {this.state.data.map( (subject) =>
            <Row key={subject._id}>
              <Col xs={12}>
                <CircleImage url={subject.image}/>
              </Col>
            </Row>
          )}
        </Grid>
      </div>
    );
  }
}


SubjectSidebar.propTypes = {
  url: PropTypes.string.isRequired,
  pollInterval: PropTypes.number.isRequired
}

export default SubjectSidebar
