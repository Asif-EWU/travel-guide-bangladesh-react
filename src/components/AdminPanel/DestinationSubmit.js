import React, { useState } from 'react';

const DestinationSubmit = () => {
    const [destinationInfo, setDestinaitonInfo] = useState({});
    const [destinationImage, setDestinationImage] = useState({});

    const handleDestinationBlur = e => {
        const newDestinationInfo = {...destinationInfo};
        newDestinationInfo[e.target.name] = e.target.value;
        setDestinaitonInfo(newDestinationInfo);
    }

    const handleDestinationFileChange = e => {
        const newDestinationImage = e.target.files;
        setDestinationImage(newDestinationImage);
    }

    const handleDestinationSubmit = (e) => {
        const destinationFormData = new FormData();
        destinationFormData.append('destination_name', destinationInfo.destination_name);
        destinationFormData.append('destination_district', destinationInfo.destination_district);
        destinationFormData.append('destination_description', destinationInfo.destination_description);
        destinationFormData.append('like_count', 0);
        for(let i = 0; i < destinationImage.length; i++) {
            destinationFormData.append('destinationImage', destinationImage[i]);
        }
    
        fetch('https://morning-coast-42993.herokuapp.com/addDestination', {
            method: 'POST',
            body: destinationFormData
        })
        .then(response => response.json())
        .then(data => {
            if(data === true) 
                alert("Destination information added to database successfully !!");
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
        <form className="my-5" onSubmit={handleDestinationSubmit}>
            <h3>Add a new Destination</h3>
            <div className="form-group">
                <label htmlFor="destination-name">Destination Name</label>
                <input onBlur={handleDestinationBlur} type="text" id="destination-name" className="form-control" name="destination_name" placeholder="Destination Name" required />
            </div>
            <div className="form-group">
                <label htmlFor="destination-district">District Name</label>
                <input onBlur={handleDestinationBlur} type="text" id="destination-district" className="form-control" name="destination_district" placeholder="District Name" required />
            </div>
            <div className="form-group">
                <label htmlFor="destination-description">Description</label>
                <textarea onBlur={handleDestinationBlur} id="destination-description" className="form-control" name="destination_description" rows="6" placeholder="Destination Description" required></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="destination-images">Destination Images</label>
                <input onChange={handleDestinationFileChange} type="file" id="destination-images" name="logo" className="form-control" multiple required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default DestinationSubmit;