import React from 'react';
import Lightbox from 'react-image-lightbox';

const Modal = ({
    images,
    photoIndex,
    isOpen,
    onClose,
    onMovePrev,
    onMoveNext
}) => {
    const { src } = images[photoIndex].fluid;
    const nextSrc = images[(photoIndex + 1) % images.length];
    const prevSrc = images[(photoIndex + images.length - 1) % images.length];
    if (!isOpen || !src) {
        return null;
    }
    return (
        <Lightbox
            mainSrc={src}
            nextSrc={nextSrc}
            prevSrc={prevSrc}
            onCloseRequest={onClose}
            onMovePrevRequest={onMovePrev}
            onMoveNextRequest={onMoveNext}
        />
    );
};

export default Modal;
