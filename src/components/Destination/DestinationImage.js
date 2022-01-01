import React, { useEffect, useState } from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

const DestinationImage = ({ destination }) => {
    const [destinationImages, setDestinationImages] = useState([]);

    useEffect(() => {
        const images = destination.destImageURL?.map(imgURL => ({
            src: imgURL
        }));
        setDestinationImages(images);
    }, [destination]);

    return (
        <div className="col-md-7">
            {
                destinationImages && 
                <Carousel images={destinationImages} style={{ height: "500px", width: "100%" }} />
            }
        </div>
    );
};

export default DestinationImage;