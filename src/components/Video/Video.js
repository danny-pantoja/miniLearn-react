import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Layout from '../shared/Layout'

// import the api's url
import apiUrl from '../../apiConfig'

// Import axios so we can make HTTP requests
import axios from 'axios'

class Video extends Component {
  constructor (props) {
    // this makes sure that `this.props` is set in the constructor
    super(props)

    this.state = {
      // Initially, our video state will be null, until the API request finishes
      video: null,
      // initially this video has not been deleted yet
      deleted: false
    }
  }

  // runs when the component appears (is created and inserted into DOM)
  componentDidMount () {
    // make a request to get the video, with the current routes'id
    axios(`${apiUrl}/videos/${this.props.match.params.id}`)
      // set the `video` state to the `video` data we got back from the response (res.data.video)
      .then(res => this.setState({ video: res.data.video }))
      .catch(console.error)
  }

  destroyVideo = () => {
    axios({
      url: `${apiUrl}/videos/${this.props.match.params.id}`,
      method: 'DELETE'
    })
      // update their `deleted` state to be `true`
      .then(() => this.setState({ deleted: true }))
      .catch(console.error)
  }

  render () {
    // destructure our video property out of state
    const { video, deleted } = this.state

    // if we don't have a video (video is null)
    if (!video) {
      return <p>Loading...</p>
    }

    // if the deleted state is true
    if (deleted) {
      // redirect to the home page
      return <Redirect to={{
        // Redirect to the home page ('/')
        pathname: '/',
        // Pass along a message, in state, that we can show
        state: { message: 'Deleted video successfully' }
      }} />
    }

    return (
      <Layout>
        <h4>{video.title}</h4>
        <p>Description: {video.description}</p>
        <button onClick={this.destroyVideo}>Delete Video</button>
        {/* Add a link to the edit video route when you click the edit button */}
        <Link to={`/videos/${this.props.match.params.id}/edit`}>
          <button>Edit</button>
        </Link>
        <Link to='/videos'>Back to all videos</Link>
      </Layout>
    )
  }
}

export default Video

// // import React, { useRef, useState } from 'react'
// // import VideoFooter from './VideoFooter'
// // function Video () {
// //   const [playing, setPlaying] = useState(false)
// //   const videoRef = useRef(null)
// //   const onVideoPress = () => {
// //     if (playing) {
// //       videoRef.current.pause()
// //       setPlaying(false)
// //     } else {
// //       videoRef.current.play()
// //       setPlaying(true)
// //     }
// //   }
// //   return (
// //     <div className='video'>
// //       <video className='video__player'
// //         loop
// //         onClick={onVideoPress}
// //         ref={videoRef}
// //         src='https://external-preview.redd.it/h2f6WNu1tpTYlagPXBzRTSakI-wOuHxvwK8M48D0ktM.png?width=640&crop=smart&format=pjpg&auto=webp&s=116e04cb84ba5961745fe4987a1e3c468644d4f8'></video>
// //
// //       <VideoFooter />
// //       {/* <VideoSidebar /> */}
// //     </div>
// //   )
// // }
//
// export default Video
