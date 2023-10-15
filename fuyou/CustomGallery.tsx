import React from 'react';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

type ImageType = { original: string, thumbnail: string, description: string };

const CustomGallery: React.FC<{images: ImageType[]}> = ({ images }) => {
    
    return (
        <div style={{ width: '30px', height: '40px', overflow: 'hidden' }}>
            <Gallery items={images} />
        </div>
    );
};

export default CustomGallery;
