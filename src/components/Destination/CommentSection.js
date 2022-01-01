import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import PostNewComment from './PostNewComment';
import SingleComment from './SingleComment';

const CommentSection = ({ destination, setDestination }) => {
    const { loggedInUser } = useContext(UserContext);

    return (
        <div className="container">
            <h2 className="mb-5" style={{color: "DarkOliveGreen"}}>
                Share Your Thoughts Below
            </h2>
            {
                destination.destination_comments?.map(comment => <SingleComment key={comment.comment_id} comment={comment} />)
            }
            {
                loggedInUser.info.email 
                ? 
                    <PostNewComment destination={destination} setDestination={setDestination} />
                :
                    <p style={{color: "darkGoldenRod"}} className="lead">* Login first to post comment !!</p>
            }
        </div>
    );
};

export default CommentSection;