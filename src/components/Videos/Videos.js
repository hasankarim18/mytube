import React, { useEffect } from 'react'
import VideoItem from './VideoItem'
import { fetchVideosThunk } from '../../features/Videos/VideosSlice'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../Loader/Loader'
import Error from '../../ui/Error'

const Videos = () => {

  const dispatch = useDispatch()
  const { videos, isLoading, isError, error } = useSelector(state => state.videos)

  useEffect(() => {
    dispatch(fetchVideosThunk())
  }, [dispatch])

  let content = null

  if (isLoading) {
    content = <div> <Loader /> </div>
  } else if (!isLoading && isError) {
    content = <Error message={error} />
  } else if (!isLoading && !isError && videos?.length === 0) {
    content = <h3>No videos found!!!</h3>
  } else if (!isLoading && !isError && videos?.length > 0) {
    content = videos.map(video => <VideoItem key={video.id} video={video} />)
  }

  return (
    <div className="mt-3">
      <div className="container">
        <ul style={{ listStyleType: "none", margin: "0", padding: "0" }} className="row">

          {content}


        </ul>
      </div>
    </div>
  )
}

export default Videos