import React, { useState } from "react";
import Modal from "./Modal";
import ImageItem from "./ImageItem";

const Gallery = ({ images }) => {
  const [modal, setModal] = useState(false);
  const [imageDetails, setImageDetails] = useState(null);

  const toggleModal = (url) => {
    modal ? setModal(false) : setModal(true);
  };

  const handleImage = (imageElement) => {
    setImageDetails(imageElement);
    toggleModal();
  };

  return (
    <div className="gallery">
      {images &&
        images.map((imageElement) => (
          <div key={imageElement.id} onClick={() => handleImage(imageElement)}>
            <ImageItem url={imageElement.download_url} />
          </div>
        ))}

      <Modal imageDetails={imageDetails} modal={modal} />
    </div>
  );
};

export default Gallery;
