import React, { useEffect } from 'react'
import RelatedVdeos from '../RelatedVideos/RelatedVdeos'
import Description from './Description'
import Player from './Player'
import { useSelector, useDispatch } from 'react-redux'
import { fetchVideoThunk } from '../../features/video/videoSlice'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import Error from '../../ui/Error'

const Video = () => {

    const dispatch = useDispatch()
    const { video, isLoading, isError, error } = useSelector(state => state.video)
    const { videoId } = useParams()

    useEffect(() => {
        if (videoId) {
            dispatch(fetchVideoThunk(videoId))
        }
    }, [dispatch])

    let content = null

    if (isLoading) {
        content = <div><Loader /></div>
    } else if (!isLoading && isError) {
        content = <Error message={error} />
    } else if (!isLoading && !isError && video?.id === false) {
        content = <div>No such video found</div>
    } else if (!isLoading && !isError && video?.id) {
        content = <>
            <div className="player position-relative">
                <Player link={video.link} title={video.title} />
                <div className="duration position-absolute text-white bg-dark" style={{ right: "20px", bottom: "20px" }}>
                    {video.duration}
                </div>
            </div>
            <Description video={video} />
        </>
    }

    return (
        <div className="pt-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        {/*  */}
                        {content}

                    </div>
                    <div className="col-md-4">
                        {!isLoading && !isError && video?.id && <RelatedVdeos />}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video