import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Loader from '../Shared/Loader';
import GroupListItem from './GroupListItem';

const TravelGroupList = () => {
    const { groupList } = useContext(UserContext);

    return (
        <div style={{marginBottom: "200px"}} className="container">
            <h1 className="text-center my-5">Travel Groups</h1>

            {
                groupList.groups.length
                ?
                    groupList.groups.map(group => <GroupListItem key={group._id} group={group} />)
                :
                    <Loader />
            }
        </div>
    );
};

export default TravelGroupList;