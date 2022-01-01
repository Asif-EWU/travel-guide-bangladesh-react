import React, { useContext } from 'react';
import './TravelGroupSection.css';
import { UserContext } from '../../App';
import HighlightedTravelGroup from './HighlightedTravelGroup';
import { Link } from 'react-router-dom';
import Loader from '../Shared/Loader';

const TravelGroupSection = () => {
    const { groupList } = useContext(UserContext);
    const sampleGroupList = groupList.groups.slice(0, 3);

    return (
        <div className="travel-group-container" style={{position: "relative"}}>
            <div className="travel-group-parallax"></div>
            <div className="travelGroupSection">
                <div className="mx-auto text-center text-white">
                    <h1 className="mt-5 mb-5">Travel Groups</h1>

                    {
                        groupList.groups.length
                        ?
                            <div className="row justify-content-center mx-0">
                                {
                                    sampleGroupList.map(group => <HighlightedTravelGroup key={group._id} group={group} />)
                                }
                            </div>
                        :
                            <Loader />
                    }

                    <div className="container d-flex justify-content-center pb-4">
                        <Link to="/travelGroupList">
                            <button className="btn btn-lg see-more-button">
                                See More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelGroupSection;