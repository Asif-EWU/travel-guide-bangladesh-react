import React, { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import DestinationlistItem from '../DestinationList/DestinationListItem';
import Loader from '../Shared/Loader';

const Bookmark = () => {
    const { loggedInUser, destinationList } = useContext(UserContext);
    const [bookmarkedDestinations, setBookmarkedDestinations] = useState([]);
    
    useEffect(() => {
        const userBookmarks = loggedInUser.info.bookmarks;
        
        const destArr = [];
        if(userBookmarks && destinationList.destinations.length) {
            for(let i = 0; i < userBookmarks.length; i++) {
                const dest = destinationList.destinations.find(d => d._id === userBookmarks[i]);
                destArr.push(dest);
            }
        }
        setBookmarkedDestinations(destArr)
    }, [destinationList, loggedInUser]);

    return (
        <div className="container">
            <h1 className="text-center mb-5">Travel Destinations</h1>

            {
                destinationList.destinations.length
                ?
                <div className="row">
                    {
                        bookmarkedDestinations.map(destination => <DestinationlistItem key={destination._id} destination={destination} />)
                    }
                </div>
                :
                <Loader />
            }
        </div>
    );
};

export default Bookmark;