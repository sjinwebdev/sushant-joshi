import React from "react";
import "./modal.css";

const ImageModal = ({ imageUrl, altText, onClose }) => {
  return (
    <div className="image-modal" onClick={onClose}>
      <div className="image-container">
        <img src={imageUrl} alt={altText} />
      </div>
    </div>
  );
};

export default ImageModal;
