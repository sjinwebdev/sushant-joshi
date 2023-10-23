import React, { useState } from "react";
import "./gallery.css";

const Gallery = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState("Clouds");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const selectedImages = data.categories.find(
    (category) => category.name === selectedCategory
  );

  return (
    <div className="photography__gallery">
      <h3>Gallery Categories</h3>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        {data.categories.map((category) => (
          <option key={category.name} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>

      {selectedImages && (
        <div className="photography__gallery-images">
          {selectedImages.images.map((image, index) => (
            <img key={index} src={image.path} alt={image.alt} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
