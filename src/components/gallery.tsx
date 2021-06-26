import React from 'react';
import Img from 'gatsby-image';
import useGallery from '../hooks/useGallery';

const Gallery = ({ title = 'gallery' }: IGallery) => {
    const images = useGallery();

    return (
        <>
            <h2>{title}</h2>
            <div>
                {images.map(({ id, fluid }) => <Img key={id} fluid={fluid} />)}
            </div>
        </>
    );
};

interface IGallery {
    title?: string;
}

export default Gallery;
