import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../App';

const BookmarkButton = ({ destination }) => {
    const { loggedInUser, loggedInUserDispatch } = useContext(UserContext);
    const destinationId = destination._id;
    const [isBookmarked, setIsBookmarked] = useState(false);

    useEffect(() => {
        if(loggedInUser.info.bookmarks.find(bookmark => bookmark === destinationId)) 
            setIsBookmarked(true);
    }, [loggedInUser, destinationId]);

    const handleBookmark = () => {
        const currentBookmarks = loggedInUser.info.bookmarks;
        let newBookmarks = [];

        if(currentBookmarks.includes(destinationId)) {
            newBookmarks = currentBookmarks.filter(bookmark => bookmark !== destinationId);
            setIsBookmarked(false);   
        }
        else {
            newBookmarks = [...currentBookmarks, destinationId];
            setIsBookmarked(true);
        }

        const newUserInfo = {...loggedInUser.info};
        newUserInfo.bookmarks = newBookmarks;
        localStorage.setItem("userInfo", JSON.stringify(newUserInfo));      
        loggedInUserDispatch({ type: 'SET_BOOKMARK', bookmarks: newBookmarks });

        fetch('http://localhost:5000/updateBookmark', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email: loggedInUser.info.email, bookmarks: newBookmarks})
        });
    };

    return (
        <> 
            {
                isBookmarked
                ?
                    <button onClick={handleBookmark} className="btn btn-success mt-2">
                        <FontAwesomeIcon style={{fontSize: '1.3em'}} icon={faBookmark} /> Bookmarked
                    </button>
                :
                    <button onClick={handleBookmark} className="btn mt-2 darkOliveGreen">
                        <FontAwesomeIcon style={{fontSize: '1.3em'}} icon={faBookmark} /> Bookmark
                    </button>
            }
        </>
    );
};

export default BookmarkButton;