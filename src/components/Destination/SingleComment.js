import React from 'react';
import './SingleComment.css';

const SingleComment = (props) => {
    const {userName: name, userPhoto: photo, comment} = props.comment;
    
    return (
        <div className="row mb-4">
            <div className="col-md-1">
                <img className="comment-image" src={photo} alt="" />
            </div>
            <div className="col-md-11 comment-body">
                <h4 className="darkOliveGreen">{name}</h4>
                <p className="lead darkOliveGreen text-justify mb-0">{comment}</p>
            </div>
        </div>
    );
};

export default SingleComment;