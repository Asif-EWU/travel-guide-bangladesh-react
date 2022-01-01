import React from 'react';
import './HighlightedTravelGroup.css';

const HighlightedTravelGroup = ({group}) => {
    return (
        <div className="highlighted-travel-group-container col-md-2 text-center my-4 mx-5">
            <img className="logo" src={group.logoURL} alt=""/>
        </div>
    );
};

export default HighlightedTravelGroup;