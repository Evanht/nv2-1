import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-bootstrap';
import CircleImage from './smallcomponents/CircleImage.jsx'

const SubjectSidebar = (props) => {
  return (
    <div className="background-black">
      <Grid fluid={true}>
        {props.data.map( (subject) =>
          <Row key={subject.id}>
            <Col xs={12}>
              <CircleImage url={subject.image}/>
            </Col>
          </Row>
        )}
      </Grid>
    </div>
  )
}

SubjectSidebar.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired
  })).isRequired,
}

export default SubjectSidebar
