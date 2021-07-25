import React, { useState }  from 'react';
import Gallery from '../components/gallery';
import Modal from '../components/modal';
import useGallery from '../hooks/useGallery';

const Memes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const images = useGallery();

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

  const handleOnClick = (idx) => {
    setPhotoIndex(idx);
    setIsOpen(true);
  };

  return (
    <>
      <Gallery images={images} onClick={handleOnClick} />
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

export default Memes;
