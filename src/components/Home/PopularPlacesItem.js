import React from 'react';
import { Link } from "react-router-dom";
import './PopularPlacesItem.css';

const PopularPlacesItem = ({destination}) => {
    const {_id, destination_name, destination_district, destImageURL, like_count} = destination;

    return (
        <Link to={"/destination/" + _id} className="col-md-4 mx-3 mb-5">
            <div className="dest-img-container">
                <img className="image img-fluid" src={destImageURL[0]} alt=""/>
                
                <div className="details-overlay">
                    <div className="row justify-content-between mx-1">
                        <div className="col-md-4 text-left">
                            <h6>{destination_name}, <br /> {destination_district}</h6>
                        </div>
                        <div className="col-md-4 text-right">
                            <h6>{like_count} people like <br /> this place</h6>
                        </div>
                    </div>
                </div>
            </div>
            
            <h3 className="mt-3 text-center">{destination_name}</h3>
        </Link>
    );
};

export default PopularPlacesItem;