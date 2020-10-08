// import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'
//
// import { instructorContentCreate } from '../../api/instructor-content'
// import messages from '../AutoDismissAlert/messages'
//
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import apiUrl from '../../apiConfig'
// import axios from 'axios'
//
// class InstructorContentCreate extends Component {
//   constructor () {
//     super()
//
//     this.state = {
//       video: {
//         title: '',
//         description: ''
//       },
//       createdID: null
//   }
//
//   handleChange = event => {
//     event.persist()
//     this.setState(prevState => {
//       const updatedField = { [event.target.name]: event.target.value }
//       const editedVideo = Object.assign({}, prevState.video, updatedField)
//       console.log('updatedField is', updatedField)
//       console.log('editedVideo is', updatedVideo)
//       return { video: editedVideo }
//     })
//   }
//   render () {
//     const { instructoContent, content, description } = this.state
//
//     return (
//       <div className="row">
//         <div className="col-sm-10 col-md-8 mx-auto mt-5">
//           <h3>Create Content</h3>
//           <Form onSubmit={this.onInstructorContentCreate}>
//             <Form.Group controlId="instructoContent">
//               <Form.Label>Name of Content</Form.Label>
//               <Form.Control
//                 required
//                 name="content"
//                 value={instructoContent}
//                 placeholder="Enter Content"
//                 onChange={this.handleChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="content_availabilty">
//               <Form.Label>Content Availability</Form.Label>
//               <Form.Check
//                 required
//                 name="type"
//                 type="checkbox"
//                 label="Check me out"
//                 value={content}
//                 placeholder="Content Type"
//                 onChange={this.handleChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="description">
//               <Form.Label>Describe your Content</Form.Label>
//               <Form.Control
//                 required
//                 name="description"
//                 value={description}
//                 placeholder="Description"
//                 onChange={this.handleChange}
//               />
//             </Form.Group>
//             <Button
//               variant="primary"
//               type="submit"
//             >
//               Submit
//             </Button>
//           </Form>
//         </div>
//       </div>
//     )
//   }
// }
// // handleChange = event => this.setState({
// //   [event.target.name]: event.target.value
// // })
// //
// // onInstructorContentCreate = event => {
// //   event.preventDefault()
// //
// //   const { msgAlert, history, setUser } = this.props
// //
// //   instructorContentCreate(this.state)
// //     .then(res => setUser(res.data.user))
// //     .then(() => msgAlert({
// //       heading: 'Content created',
// //       message: messages.instructorContentCreateSuccess,
// //       variant: 'success'
// //     }))
// //     .then(() => history.push('/'))
// //     .catch(error => {
// //       msgAlert({
// //         heading: 'Content not created ' + error.message,
// //         message: messages.instructorContentCreateFailure,
// //         variant: 'danger'
// //       })
// //     })
// // }
// export default withRouter(InstructorContentCreate)
