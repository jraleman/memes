import React from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const Modal = ({
    images,
    photoIndex,
    isOpen,
    onClose,
    onMovePrev,
    onMoveNext
}) => {
    if (!isOpen) {
        return null;
    }
    return (
        <Lightbox
            mainSrc={images[photoIndex].fluid.src}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={onClose}
            onMovePrevRequest={onMovePrev}
            onMoveNextRequest={onMoveNext}
        />
    );
};

export default Modal;
