import React, { useRef, useState } from 'react'
import VideoFooter from './VideoFooter'
import './Video.css'

function Video () {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)
  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause()
      setPlaying(false)
    } else {
      videoRef.current.play()
      setPlaying(true)
    }
  }
  return (
    <div className='video'>
      <video className='video__player'
        loop
        onCLick={onVideoPress}
        ref={videoRef}
        src='https://v16-web.tiktokcdn.com/d58d4097fa9289361af83ca6c2434737/5f693ab7/video/tos/useast2a/tos-useast2a-ve-0068c001/32f4c94a3279487a8e9e1056bdc68594/?a=1988&br=2508&bt=1254&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009211743410101890660475C08D97D&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=anV2dWVqcWZydzMzNTczM0ApZWRlaTg1OmQ6NzYzODc2Z2cuMy5wL2NfLy9fLS0tMTZzczQwMmNiNWM1MTA1Xy41NTY6Yw%3D%3D&vl=&vr='></video>

      <VideoFooter />
      {/* <VideoSidebar /> */}
    </div>
  )
}

export default Video

//
// 'https://v16-web.tiktokcdn.com/d58d4097fa9289361af83ca6c2434737/5f693ab7/video/tos/useast2a/tos-useast2a-ve-0068c001/32f4c94a3279487a8e9e1056bdc68594/?a=1988&br=2508&bt=1254&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009211743410101890660475C08D97D&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=anV2dWVqcWZydzMzNTczM0ApZWRlaTg1OmQ6NzYzODc2Z2cuMy5wL2NfLy9fLS0tMTZzczQwMmNiNWM1MTA1Xy41NTY6Yw%3D%3D&vl=&vr='
