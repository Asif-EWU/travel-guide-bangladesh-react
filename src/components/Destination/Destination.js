import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './Destination.css';
import DestinationImage from './DestinationImage';
import BookmarkButton from './BookmarkButton';
import DestinationLikeButton from './DestinationLikeButton';
import CommentSection from './CommentSection';
import Loader from '../Shared/Loader';

const Destination = () => {
    const { loggedInUser } = useContext(UserContext);
    const { destinationId } = useParams();
    const [destination, setDestination] = useState({});
    
    useEffect(() => {
        fetch('http://localhost:5000/destination/' + destinationId)
            .then(res => res.json())        
            .then(data => setDestination(data));
    }, [destinationId]);
    
    return (
        <div className="destination-container">
            {
                destination._id
                ?
                <>
                    <div className="row justify-content-around mt-3 w-100">
                        <div className="col-md-3 align-self-center position-sticky sticky-top">
                            <h1 className="darkOliveGreen">{destination.destination_name}</h1>
                            <h4 className="darkOliveGreen">{destination.destination_district}</h4>
                            <hr />
                            <p className="lead darkOliveGreen">{Number(destination.like_count)} people like this place</p>
                            {
                                loggedInUser.info.email 
                                ?
                                <>
                                        <DestinationLikeButton destination={destination} setDestination={setDestination} />
                                        <BookmarkButton destination={destination} />  
                                    </>
                                :
                                <p style={{color: "darkGoldenRod"}} className="lead">* Login first to like and bookmark this destination</p>
                            }         
                        </div>
                        <DestinationImage destination={destination} />
                    </div>
                    <p className="container space text-justify lead darkOliveGreen my-5">
                        {destination.destination_description}
                    </p>
                    <CommentSection destination={destination} setDestination={setDestination} />
                </>
                :
                <Loader />
            }
        </div>
    );
};

export default Destination;