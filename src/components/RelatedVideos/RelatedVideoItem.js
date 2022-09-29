import React from 'react'
import thumbnail from '../../assets/images/thumbnail.jpg'
const RelatedVideoItem = () => {
    return (
        <div className="row mb-4">
            <div className="col-12 col-sm-6  " >
                <div className="position-relative">
                    <img className="img-fluid" src={thumbnail} alt="related video title" />
                    <div style={{ right: "10px", bottom: "10px" }} className="position-absolute text-white bg-dark" >10.22</div>
                </div>
            </div>
            <div className="col-12 col-sm-6  ps-1 text-start">
                <h6>Video title</h6>
                <h6 className="cursor-pointer" >Hasan Mahbub</h6>
                <p>100k views . 24-oct-2018 </p>

            </div>
        </div>
    )
}

export default RelatedVideoItem