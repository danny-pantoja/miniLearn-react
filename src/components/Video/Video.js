// import './Video.css'
// import React, { Component } from 'react'
// import { Link, Redirect } from 'react-router-dom'
// import Layout from '../shared/Layout'
// import { videodDestroy } from '../../api/video'
// import messages from '../AutoDismissAlert/messages'
//
// class Video extends Component {
//   constructor (props) {
//     super(props)
//
//     this.state = {
//       video: null,
//       deleted: false
//     }
//   }
//
//
//   destroyBook = () => {
//     axios({
//       url: `${apiUrl}/videos/${this.props.match.params.id}`,
//       method: 'DELETE'
//     })
//       // update their `deleted` state to be `true`
//       .then(() => this.setState({ deleted: true }))
//       .catch(console.error)
//   }
//
//   render () {
//     // destructure our book property out of state
//     const { video, deleted } = this.state
//
//     // if we don't have a book (book is null)
//     if (!video) {
//       return <p>Loading...</p>
//     }
//
//     // if the deleted state is true
//     if (deleted) {
//       // redirect to the home page
//       return <Redirect to={{
//         // Redirect to the home page ('/')
//         pathname: '/',
//         // Pass along a message, in state, that we can show
//         state: { message: 'Deleted Video successfully' }
//       }} />
//     }
//
//     return (
//       <Layout>
//         <h4>{video.title}</h4>
//         <p>Author: {video.description}</p>
//         <button onClick={this.destroyBook}>Delete Video</button>
//         {/* Add a link to the edit book route when you click the edit button */}
//         <Link to={`/videos/${this.props.match.params.id}/edit`}>
//           <button>Edit</button>
//         </Link>
//         <Link to='/videos'>Back to all Videos 📚</Link>
//       </Layout>
//     )
//   }
// }
//
// export default Book
//
//
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
