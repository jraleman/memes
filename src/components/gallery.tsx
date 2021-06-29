import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import useGallery from '../hooks/useGallery';

const Gallery = ({ title = 'gallery' }: IGallery) => {
    const images = useGallery();

    return (
        <Container>
            <Title>{title}</Title>
            <ImageWrapper>
                {images.map(({ id, fluid }) => <Img key={id} fluid={fluid} />)}
            </ImageWrapper>
        </Container>
    );
};

interface IGallery {
    title?: string;
}

const Container = styled.div``;

const Title = styled.h2``;

const ImageWrapper = styled.div``;

export default Gallery;
