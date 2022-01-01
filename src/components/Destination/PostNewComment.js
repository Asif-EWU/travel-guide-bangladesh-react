import React from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';

const PostNewComment = ({ destination, setDestination }) => {
    const { loggedInUser } = useContext(UserContext);
    const destinationId = destination._id;
    const commentRef = useRef();
    const { name, photo } = loggedInUser.info;

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        
        const newComment = {
            comment_id: "cmnt-" + Date.now(),
            userName: name, 
            userPhoto: photo,
            comment: commentRef.current.value
        };
        const comments = [...destination.destination_comments, newComment];
        
        fetch('http://localhost:5000/updateComment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ destinationId, comments })
        })
        .then(response => response.json())
        .then(result => {
            if(result === true) {
                const updatedDestination = {...destination};
                updatedDestination.destination_comments = comments;
                setDestination(updatedDestination);

                e.target.reset();
            }
        });
    };

    return (
        <div className="row mb-4">
            <div className="col-md-1">
                <img className="comment-image" src={photo} alt="" />
            </div>
            <div className="col-md-11 comment-body">
                <form className="mt-2" onSubmit={handleCommentSubmit}>
                    <textarea ref={commentRef} className="form-control " name="comment" rows="2" placeholder="Write a comment..."></textarea>
                    <input className="btn btn-success px-3 mt-2" type="submit" value="Post" />
                </form>
            </div>
        </div>
    );
};

export default PostNewComment;