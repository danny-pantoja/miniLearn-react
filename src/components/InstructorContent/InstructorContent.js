import React from 'react'
import './InstructorContent.css'
import Video from '../Video/Video'

function InstructorContent () {
  return (
    // BEM
    <div className='app'>
      <h1>Hello World!</h1>
      <div className='app__videos'>
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
      </div>

    </div>
  )
}
export default InstructorContent
