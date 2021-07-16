import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import useGallery from '../hooks/useGallery';

const Gallery = () => {
  const images = useGallery();

  return (
    <ImageWrapper>
      {images.map(({ id, fluid }) => <Img key={id} fluid={fluid} />)}
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 16vw;
  grid-gap: 0.5em;

  > * {
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19);
  }
  
  > :hover {
    filter: blur(4px);
    transition: all ease 0.5s;
    cursor: pointer;
  }
  
  > :nth-child(6n + 3) {
    grid-column: span 1;
    grid-row: span 2;
  }
  
  > :nth-child(6n + 2),
  > :nth-child(6n + 5),
  > :nth-child(6n + 6) {
    grid-column: span 2;
    grid-row: span 2;
  }
`;

export default Gallery;
