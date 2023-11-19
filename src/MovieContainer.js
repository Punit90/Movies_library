import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import image from './images/image_not_found.png'

function MovieContainer({title, vote_average, overview, poster_path, release_date, original_language}) {

    // Default image URL
    const IMAGE_URL = "https://image.tmdb.org/t/p/w500/"

    // State Used to pass fata to movie modal
    const [Moreinfo, setMoreInfo] = useState(false)

    // Being used to handle open and close modal
    const handleOpen=()=> setMoreInfo(true)
    const handleClose=()=> setMoreInfo(false)

    return(
        <div className="card text-center bg-secondary mb-4">
            <div className="card-body">
                <img className="card-img-top" src= {poster_path != null ? IMAGE_URL+poster_path : image} alt=""/>
            </div>
            <div className="info-modal-body">
                <span className="infoModal">{title}</span>
                <span className="infoModal" style={{color:'gold'}}>{vote_average}</span>
            </div>
            <div className="card-body">
                <Button variant="outline-light" onClick={handleOpen}>Movie Info</Button>
            </div>
            {/* Movie Details Modal */}
                <Modal show={Moreinfo} onHide={handleClose} varient="dark">
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{background:"#353535", color:"white"}}>
                        <div style={{display:"flex", alignItems:"flex-start", justifyContent:"center"}}>
                            <div style={{flexBasis:"70%", marginRight:"5%"}}>
                                <img style={{width: '14rem'}} className="card-img-top" src= {poster_path != null ? IMAGE_URL+poster_path : image} alt=""/>
                            </div>
                            <div style={{fontSize:"14px", paddingLeft:"20px", width:"70%"}}>
                                <h5>
                                    {title}
                                </h5>
                                <h6 style={{textTransform:"capitalize"}}>Language : <span>{original_language}</span></h6>
                                <h6>
                                    IMDB : <span style={{color:"gold"}}>{vote_average}</span>
                                </h6>
                                <h6>
                                    Release Date : <span>{release_date}</span>
                                </h6>
                            </div>
                        </div>
                        <div className="mt-2">
                            <h6 style={{fontWeight:"bold"}}>Overview</h6>
                            <p>{overview}</p>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
    )
}

export default MovieContainer;