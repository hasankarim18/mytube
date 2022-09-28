import React from 'react'
import VideoItem from './VideoItem'

const Videos = () => {
  return (
    <div>
      <ul style={{ listStyleType: "none" }} className="row mt-3">

        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
      </ul>
    </div>
  )
}

export default Videos