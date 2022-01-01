import React from 'react';
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useState } from 'react';
import './GroupListItem.css';
import GroupLikeButton from './GroupLikeButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { UserContext } from '../../App';

const GroupListItem = ({ group }) => {
    const { loggedInUser } = useContext(UserContext);
    const { group_name, group_description, logoURL, fb_url } = group;
    const [seeMoreClicked, setSeeMoreClicked] = useState(false);
    
    const short_group_description = <>
                                        {group_description.substr(0, 100)} ... 
                                        <span onClick={() => setSeeMoreClicked(true)} className="see-more-button text-success">
                                            see more
                                        </span>
                                    </>

    return (
        <div className="group-item-container row mb-5">
            <div className="col-md-3 mr-3">
                <img className="img-fluid" src={logoURL} alt="" />
            </div>
            <div className="group-info col-md-8">
                <h4 className="text-secondary">{group_name}</h4>
                <p className="lead mb-3">
                    {
                        seeMoreClicked
                        ?
                            group_description
                        :
                            short_group_description
                    }
                </p>

                <div className="like-info">
                    <FontAwesomeIcon style={{fontSize: '1.3em', color: "grey"}} icon={faThumbsUp} /> {Number(group.like_count)}
                    {
                        loggedInUser.info.email 
                        ?
                            <GroupLikeButton group={group} />
                        :
                            <span style={{color: "darkgoldenrod"}} className="ml-5">* Login first to like this group</span>
                    }
                </div>
                <div className="text-secondary row mt-5 mx-0">
                    <h2>
                        <a href={fb_url} target="_blank" rel="noopener noreferrer"><AiFillFacebook /></a>
                    </h2>
                    <h2 className="mx-4">
                        <a href={"http://www.gmail.com"} target="_blank" rel="noopener noreferrer"><SiGmail /></a>
                    </h2>
                    <h2>
                        <a href={"http://www.twitter.com"} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default GroupListItem;