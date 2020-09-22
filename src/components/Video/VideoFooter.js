import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
// import Ticker from 'react-ticker'

// <Ticker mode='smooth'>
// {({ index }) => (
//  <>
//  <h1>Yoo what up</h1>
//  </>
// )}
// </Ticker>
function VideoFooter () {
  return (
    <div className='videoFooter'>
      <div className='videoFooter__text'>
        <h3>@dannyp</h3>
        <p>This is a description</p>
        <MusicNoteIcon />
      </div>
      <img className='VideoFooter__record' src='https://i.imgur.com/atobSxZ.png'/>
    </div>
  )
}
export default VideoFooter
