import React from 'react'

class LectureNotesForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      author: "",
      title: "",
      description: "",
    }

    this.handleAuthorChange = this.handleAuthorChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleAuthorChange(e) {
    this.setState({author: e.target.value});
  }

  handleTitleChange(e) {
    this.setState({title: e.target.value})
  }

  handleDescriptionChange(e) {
    this.setState({description: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    let author = this.state.author.trim();
    let title = this.state.title.trim();
    let description = this.state.title.trim();
    let rating = 5;
    let downloadCount = 0;
    if (!title || !title) {
    return;
    }
    this.props.onNotesSubmit({
      author,
      title,
      description,
      rating,
      downloadCount
    })
    this.setState({author: '', title: '', description: ''})
  }

  render() {
    return (
      <form className="form-css" onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='author'
          value={this.state.author}
          onChange={this.handleAuthorChange} />
        <input
          type='text'
          placeholder='Title of notes'
          value={this.state.title}
          onChange={this.handleTitleChange} />
        <input
          type='text'
          placeholder='Describe these notes'
          value={this.state.description}
          onChange={this.handleDescriptionChange} />
        <input
          type='submit'
          value='Post' />
      </form>
    )
  }

}


export default LectureNotesForm
