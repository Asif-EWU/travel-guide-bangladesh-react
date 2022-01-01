import React, { useContext } from 'react';
import './PopularPlaces.css';
import PopularPlacesItem from './PopularPlacesItem';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';
import Loader from '../Shared/Loader';

const PopularPlaces = () => {
    const { destinationList } = useContext(UserContext);
    const sampleDestinationList = destinationList.destinations.slice(0, 4);

    return (
        <div className="popular-place-container">
            <h1 className="text-center mt-5 mb-5">Now Trending</h1>

            {
                destinationList.destinations.length 
                ?
                <div className="row justify-content-center mx-0">
                    {
                        sampleDestinationList.map(destination => <PopularPlacesItem key={destination._id} destination={destination} />)
                    }
                </div>
                :
                <Loader />
            }

            <div style={{marginTop: "-50px"}} className="container d-flex justify-content-center mb-5">
                <Link to="/destinationList">
                    <button className="btn btn-lg view-all-places-button">
                        See More
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default PopularPlaces;