import React from 'react'
import { Link } from 'react-router-dom'

const VideoForm = ({ video, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Title</label>
    <input
      placeholder='Enter a title'
      /* This input's value, will always be video.title */
      value={video.title}
      /* We need to add a name prop, so this input will be properly updated
         in the future w/ handleChange */
      name='title'
      /* Add a change event handler, that will updated our video's state */
      onChange={handleChange}
    />

    <label>Description</label>
    <input
      placeholder='Enter a Description'
      /* This input's value, will always be video.author */
      value={video.description}
      /* We need to add a name prop, so this input will be properly updated
         in the future w/ handleChange */
      name='description'
      /* Add a change event handler, that will updated our video's state */
      onChange={handleChange}
    />

    <button type='submit'>Submit</button>
    {/* Link the cancel button to the home page route */}
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default VideoForm
