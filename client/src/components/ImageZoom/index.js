import React from "react";
import ReactImageZoom from "react-image-zoom";

import "./ImageZoom.scss";

const ImageZoom = ({ options }) => {
  const { compressedImage, dir } = options;

  const props = {
    // width: 400,
    height: 250,
    zoomWidth: 500,
    img:
      "https://cdn.shopify.com/s/files/1/0066/4322/0562/products/MobileCase1_6580367a-e79b-40df-9ed9-57c40f91ca96_2048x2048.jpg?v=1604559863",
  };

  return (
    <div>
      <div className={`image-container ${dir}`}>
        <ReactImageZoom {...props} />
      </div>
    </div>
  );
};

export default ImageZoom;
