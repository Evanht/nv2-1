import React from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import LectureNoteListing from './molecule/LectureNotesListing';
import LectureNotesForm from './organism/LectureNotesForm';

class LecturePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Einstein-formal_portrait-35.jpg/220px-Einstein-formal_portrait-35.jpg",
      url: "http://localhost:3001/api/lecture-notes",
      pollInterval: 2000
    }
    this.loadLectureNotes = this.loadLectureNotes.bind(this)
    this.onNotesSubmit = this.onNotesSubmit.bind(this)
  }

  componentDidMount() {
    this.loadLectureNotes()
    this.interval = setInterval(this.loadLectureNotes, this.state.pollInterval)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  loadLectureNotes(){
    axios.get(this.state.url)
      .then(res => {
          this.setState({notes: res.data})
        })
  }

  onNotesSubmit(notes) {
    axios.post(this.state.url, notes)
      .then(res => {
        this.setState({notes: res.data})
      })
      .catch(err => {
        console.error(err);
      })
  }

  render() {
    return(
      <div>
        <LectureNotesForm onNotesSubmit={this.onNotesSubmit} />
        {this.state.notes.map( noteSet =>
          <Row key={noteSet._id}>
            <Col xs={12}>
              <LectureNoteListing notesTitle={noteSet.title} downloadCount={noteSet.downloadCount} rating={noteSet.rating} avatarUrl={this.state.avatarUrl}/>
            </Col>
          </Row>
        )}
      </div>
    )
  }


}

export default LecturePage
