import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import Layout from '../shared/Layout'
import VideoForm from '../shared/VideoForm'
import { videoCreate } from '../../api/video'
import messages from '../AutoDismissAlert/messages'

class VideoCreate extends Component {
  constructor () {
    super()

    this.state = {
      video: {
        title: '',
        description: ''
      },
      createdID: null
    }
  }

    handleChange = event => {
      event.persist()
      this.setState(prevState => {
        const updatedField = { [event.target.name]: event.target.value }
        const editedVideo = Object.assign({}, prevState.video, updatedField)
        return { video: editedVideo }
      })
    }

  handleSubmit = event => {
    event.preventDefault()

    const { msgAlert, history, user } = this.props

    videoCreate(user, this.state.video)
      .then(res => this.setState({ video: res.data.video }))
      .then(() => msgAlert({
        heading: 'Video Add Success',
        message: messages.videoCreateSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        this.setState({ title: '', description: '' })
        msgAlert({
          heading: 'Create Video Failure: ' + error.message,
          message: messages.videoCreateFailure,
          variant: 'danger'
        })
      })
  }
  render () {
  // destructure book to show in the form below, and createdId to redirect
    const { video, createdId } = this.state
    const { handleChange, handleSubmit } = this

    // when the user hits submit to finish editing the book
    if (createdId) {
      // redirect to the show page (route)
      return <Redirect to={`/videos/${createdId}`} />
    }

    return (
      <Layout>
        <VideoForm
          video={video}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath='/'
        />
      </Layout>
    )
  }
}

export default withRouter(VideoCreate)
