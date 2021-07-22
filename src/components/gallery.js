import React, { useState } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import useGallery from '../hooks/useGallery';
import Modal from './modal';

const Gallery = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const images = useGallery();

  const handleOnClick = (idx) => {
    setPhotoIndex(idx);
    setIsOpen(true);
  };

  const onCloseRequest = () => {
    setIsOpen(false);
  };

  const onMovePrevRequest = () => {
    const idx = (photoIndex + images.length - 1) % images.length;
    setPhotoIndex(idx);
  };

  const onMoveNextRequest = () => {
    const idx = (photoIndex + 1) % images.length;
    setPhotoIndex(idx);
  };

  // we can refactor this
  // pages/meme.js
  // gallery.js
  // modal.js
  return (
    <>
      <Container>
        {images.map(({ id, fluid }, idx) => fluid && (
          <ImageWrapper onClick={() => handleOnClick(idx)}>
            <Img key={id} fluid={fluid} />
          </ImageWrapper>
        ))}
      </Container>
      <Modal
        images={images}
        photoIndex={photoIndex}
        isOpen={isOpen}
        onClose={onCloseRequest}
        onMovePrev={onMovePrevRequest}
        onMoveNext={onMoveNextRequest}
      />
    </>
  );
};

const Container = styled.div`
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

const ImageWrapper = styled.span`
  display: inherit;
`;

export default Gallery;
