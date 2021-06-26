import Img from 'gatsby-image';
import { useGallery } from '../hooks/useGallery';

const Gallery = () => {
    const images = useGallery();

    return (
        <div>
            {images.map(({ id, fluid }) => <Img key={id} fluid={fluid} />)}
        </div>
    );
};

export default Gallery;
