import React from 'react'
import thumbnail from '../../assets/images/thumbnail.jpg'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import authorImg from '../../assets/images/author.jpg'
import classes from './VideoItem.module.css'
import { Link } from 'react-router-dom';

const VideoItem = ({ video }) => {

    const { title, thumbnail: videoThumbnail, link, views, duration, date, author, id } = video

    return (
        <li className="col-12 col-sm-6 col-md-4 col-lg-3 p-2">
            <Card className={`video_card ${classes.videoItem}`} >
                <div className="position-relative">
                    <Link to={`/videos/${id}`}>
                        <CardImg top width="100%" src={videoThumbnail} alt="Card image cap" />
                    </Link>
                    <div style={{ right: "10px", bottom: "10px" }} className="duration bg-dark text-white position-absolute">
                        {duration}
                    </div>
                </div>
                <CardBody>
                    <div className="d-flex justify-content-between">

                        <div className="user" >
                            <Link to="/user">
                                <img style={{ borderRadius: "50%", minWidth: "40px" }} className="img-fluid" src={authorImg} alt="" />
                            </Link>
                        </div>

                        <div className="ps-2">
                            <Link className="text-dark" to="/videos/1">
                                <h6 className="text-start">
                                    {title}
                                </h6>
                            </Link>
                            <div className="text-start">
                                <p>
                                    {views} views . {date}
                                </p>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </li>
    )
}

export default VideoItem