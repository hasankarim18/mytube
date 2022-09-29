import React from 'react'
import likeImg from '../../assets/images/like.svg'
import unlikeImg from '../../assets/images/unlike.svg'
import editImg from '../../assets/images/edit.svg'
import deleteImg from '../../assets/images/delete.svg'
import { Link } from 'react-router-dom'

const Description = ({ video }) => {

    const { title, date, duration, description, author, views } = video

    return (
        <div className="pt-2 pb-4">
            <div className="d-flex justify-content-between">
                <div>
                    {views}
                </div>
                <div className="d-flex">
                    <div className="edit">
                        <Link to="/videos/edit/1" >
                            <img style={{ width: "20px", marginRight: "5px" }} src={editImg} alt="edit" />
                            <span> Edit</span>
                        </Link>
                    </div>
                    <div className="ms-5  delete">
                        <img style={{ width: "20px", marginRight: "5px" }} src={deleteImg} alt="edit" />
                        <span>Delete</span>
                    </div>
                </div>

            </div>

            <h5 className="text-start mt-3">
                {title}
            </h5>
            <div className="row  border-bottom pb-2">

                <div className="col-6 text-start">
                    <span>  {author} </span> <br />
                    <span>Uploaded on {date}</span>
                </div>
                <div className="col-6">
                    <div className="d-flex justify-content-end">
                        <div className="like">
                            <img style={{ width: "30px", marginLeft: "10px", marginRight: "5px" }} src={likeImg} alt="likes" />
                            <span> 10 </span>
                        </div>
                        <div className="ms-2 unlike">
                            <img style={{ width: "30px", marginLeft: "10px", marginRight: "5px" }} src={unlikeImg} alt="unlikes" />
                            <span>5</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 pt-2 text-start" >
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Description