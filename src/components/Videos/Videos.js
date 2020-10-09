import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../shared/Layout'
import apiUrl from '../../apiConfig'
import axios from 'axios'
// This will be our videos Index component (show all videos)
class Videos extends Component {
  constructor (props) {
    super(props)

    // setup our initial state
    this.state = {
      // we have zero videos, until our API request has finished
      videos: []
    }
  }

  // this is called whenever our component is created and inserted
  // into the DOM (first appears)
  componentDidMount () {
    // make a GET request for all of the books
    axios(`${apiUrl}/videos/`)
      .then(res => this.setState({ videos: res.data.videos }))
      .catch(console.error)
  }
  render () {
    const videos = this.state.videos.map(video => (
      <li key={video._id}>
        <Link to={`/videos/${video._id}`}>
          {video.title}
        </Link>
      </li>
    ))

    return (
      <Layout>
        <h4>videos</h4>
        <ul>
          {videos}
        </ul>
      </Layout>
    )
  }
}

export default Videos
