import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../App';

const DestinationLikeButton = ({ destination, setDestination }) => {
    const { destinationListDispatch, loggedInUser, loggedInUserDispatch } = useContext(UserContext);
    const destinationId = destination._id;
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        if(loggedInUser.info.liked_destinations.find(destination => destination === destinationId)) 
            setIsLiked(true);
    }, [loggedInUser, destinationId]);

    const handleLike = () => {
        const currentLikedDestinations = loggedInUser.info.liked_destinations;
        let newLikedDestinations = [];
        const changedDestinationInfo = {...destination};
        let likeIncrement;

        if(currentLikedDestinations.includes(destinationId)) {
            newLikedDestinations = currentLikedDestinations.filter(destination => destination !== destinationId);
            setIsLiked(false);   

            likeIncrement = -1;
            changedDestinationInfo.like_count -= 1;
        }
        else {
            newLikedDestinations = [...currentLikedDestinations, destinationId];
            setIsLiked(true);

            likeIncrement = 1;
            changedDestinationInfo.like_count += 1;
        }

        setDestination(changedDestinationInfo);
        destinationListDispatch({ type: 'UPDATE_LIKE', changedDestination: changedDestinationInfo })

        const newUserInfo = {...loggedInUser.info};
        newUserInfo.liked_destinations = newLikedDestinations;
        localStorage.setItem("userInfo", JSON.stringify(newUserInfo));      
        loggedInUserDispatch({ type: 'SET_LIKED_DESTINATION', newLikedDestinations: newLikedDestinations });

        fetch('http://localhost:5000/updateLikedDestination', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email: loggedInUser.info.email, likedDestinations: newLikedDestinations, destinationId, likeIncrement})
        });
    };

    return (
        <>
            {
                isLiked
                ?
                    <button onClick={handleLike} className="btn btn-success mr-2 mt-2">
                        <FontAwesomeIcon style={{fontSize: '1.3em'}} icon={faThumbsUp} /> Liked
                    </button>
                :
                    <button onClick={handleLike} className="btn mr-2 mt-2 darkOliveGreen">
                        <FontAwesomeIcon style={{fontSize: '1.3em'}} icon={faThumbsUp} /> Like
                    </button>
            }
        </>
    );
};

export default DestinationLikeButton;