import React from "react";

import "./PartnersSlide.scss";

const PartnersSlide = ({ slides }) => {
  return (
    <div className="partner-brand container wide">
      <div className="partner-brand__logo row">
        {slides.map((slide, index) => (
          <div className="partner-brand__img col l-2" key={slide.id}>
            <img src={slide.imgSrc} alt={slide.name} />
          </div>
        ))}
      </div>
      <div className="arrow-move">
        <div className="arrow-left"></div>
        <div className="arrow-right"></div>
      </div>
    </div>
  );
};

export default PartnersSlide;
