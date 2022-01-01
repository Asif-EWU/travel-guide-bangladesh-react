import React, { useState } from 'react';

const GroupSubmit = () => {
    const [groupInfo, setGroupInfo] = useState({});
    const [groupImage, setGroupImage] = useState(null);

    const handleGroupBlur = e => {
        const newGroupInfo = {...groupInfo};
        newGroupInfo[e.target.name] = e.target.value;
        setGroupInfo(newGroupInfo);
    }

    const handleGroupFileChange = e => {
        const newGroupImage = e.target.files[0];
        setGroupImage(newGroupImage);
    }

    const handleGroupSubmit = (e) => {
        const groupFormData = new FormData();
        groupFormData.append('group_name', groupInfo.group_name);
        groupFormData.append('fb_url', groupInfo.fb_url);
        groupFormData.append('group_description', groupInfo.group_description);
        groupFormData.append('like_count', 0);
        groupFormData.append('logo', groupImage);

        fetch('http://localhost:5000/addGroup', {
            method: 'POST',
            body: groupFormData
        })
        .then(response => response.json())
        .then(data => {
            if(data === true) 
                alert("Group information added to database successfully !!");
            else
                alert("Error. Please try again...");
            
            e.target.reset();
        })
        .catch(err => {
            console.log(err);
        })

        e.preventDefault();
    };

    return (
        <form className="my-5" onSubmit={handleGroupSubmit}>
            <h3>Add a new Group</h3>
            <div className="form-group">
                <label htmlFor="groupName">Group Name</label>
                <input onBlur={handleGroupBlur} type="text" id="groupName" className="form-control" name="group_name" placeholder="Group Name" required />
            </div>
            <div className="form-group">
                <label htmlFor="fbURL">Facebook URL</label>
                <input onBlur={handleGroupBlur} type="text" id="fbURL" className="form-control" name="fb_url" placeholder="Facebook URL" required />
            </div>
            <div className="form-group">
                <label htmlFor="group-description">Description</label>
                <textarea onBlur={handleGroupBlur} id="group-description" className="form-control" name="group_description" rows="6" placeholder="Group Description" required></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="logoImage">Logo Image</label>
                <input onChange={handleGroupFileChange} type="file" id="logoImage" name="logo" className="form-control" required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default GroupSubmit;