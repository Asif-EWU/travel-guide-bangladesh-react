import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const DestinationlistItem = ({destination}) => {
    const destinationDescription = destination.destination_description.substr(0, 100);

    return (
        <div className="col-md-4 mb-5">
            <div className="card h-100">
                <img style={{height: "300px"}} className="card-img-top" src={destination.destImageURL[0]} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{destination.destination_name}</h5>
                    <p className="card-text">{destinationDescription} ...</p>
                    
                    <div className="row justify-content-between px-3">
                        <h6 className="pt-2">
                            <FontAwesomeIcon style={{fontSize: '1.3em', color: "grey"}} icon={faThumbsUp} /> {destination.like_count}
                        </h6>
                        <Link to={"/destination/" + destination._id} className="btn btn-secondary">See Full Info</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationlistItem;