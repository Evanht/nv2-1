import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap';
import CircleImage from '../smallcomponents/CircleImage'

const LectureNoteListing = props => {

  return(
    <div className="lecture-note-set">

        <Row>
          <Col xs={1}>
            <CircleImage url={props.avatarUrl} />
          </Col>
          <Col xs={7}>
            <h4> {props.notesTitle} </h4>
          </Col>
          <Col xs={2}>
            <Row>
              <Col xs={12}>
                <h6>{props.downloadCount} downloads </h6>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <h6>{props.rating} ☆ </h6>
              </Col>
            </Row>
          </Col>
          <Col xs={2}>
            <h6> Download link </h6>
          </Col>
        </Row>

    </div>
  )
}

LectureNoteListing.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  notesTitle: PropTypes.string.isRequired,
  downloadCount: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,

}

export default LectureNoteListing
