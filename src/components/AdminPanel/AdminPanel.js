import React from 'react';
import DestinationSubmit from './DestinationSubmit';
import GroupSubmit from './GroupSubmit';

const AdminPanel = () => {
    return (
        <div className="container">     
            <DestinationSubmit />
            <GroupSubmit />
        </div>
    );
};

export default AdminPanel;