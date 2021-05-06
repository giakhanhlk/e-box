import React from "react";
import { Link } from "react-router-dom";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import "./ImageSlider.scss";

const slides = [
  {
    id: 1,
    name: "Image on slider 1",
    imgSrc:
      "https://salt.tikicdn.com/cache/w824/ts/banner/8a/b5/48/141c994b552cdcbc47a22bef19fdb3fa.png.jpg",
    url: "/slide-1",
  },
  {
    id: 2,
    name: "Image on slider 2",
    imgSrc:
      "https://salt.tikicdn.com/cache/w824/ts/banner/6b/da/d3/0bf585a8a303a0da3be94ff309c46f97.png.jpg",
    url: "/slide-2",
  },
  {
    id: 3,
    name: "Image on slider 3",
    imgSrc:
      "https://salt.tikicdn.com/cache/w824/ts/banner/43/62/09/878be607bdfaa37f9021e709ec44b9a7.png.jpg",
    url: "/slide-3",
  },
  {
    id: 4,
    name: "Image on slider 4",
    imgSrc:
      "https://salt.tikicdn.com/cache/w824/ts/banner/b5/4c/58/3b4fb1c8fdc0c3324e3180766c4ee1ef.png.jpg",
    url: "/slide-4",
  },
  {
    id: 5,
    name: "Image on slider 5",
    imgSrc:
      "https://salt.tikicdn.com/cache/w824/ts/banner/41/18/f2/400ab645046f210bc764792bbb68e3a1.png.jpg",
    url: "/slide-5",
  },
];

const ImageSlider = ({ slideId, handleChangeSlideId, translate }) => {
  return (
    <section className="slide-images-holder section-mg">
      <div className="slide-images container wide">
        <div className="row">
          <div className="slider l-8">
            <div
              className="image"
              style={{ transform: `translateX(-${slideId * 816 - 816}px)` }}
            >
              {slides.map((slide) => (
                <Link key={slide.id} to={slide.url}>
                  <img
                    src={slide.imgSrc}
                    className={`image-slider ${
                      slideId === slide.id ? "slider-animated" : ""
                    }`}
                    alt={slide.name}
                  />
                </Link>
              ))}
            </div>
            <div className="arrow-move">
              <span
                className="arrow-layer prev"
                onClick={() => handleChangeSlideId(slideId - 1, slides.length)}
              >
                <ChevronLeftIcon fontSize="large" />
              </span>
              <span
                className="arrow-layer next"
                onClick={() => handleChangeSlideId(slideId + 1, slides.length)}
              >
                <ChevronRightIcon fontSize="large" />
              </span>
            </div>
            <div className="dot-move">
              <span
                className="dot"
                onClick={() => handleChangeSlideId(1)}
              ></span>
              <span
                className="dot"
                onClick={() => handleChangeSlideId(2)}
              ></span>
              <span
                className="dot"
                onClick={() => handleChangeSlideId(3)}
              ></span>
              <span
                className="dot"
                onClick={() => handleChangeSlideId(4)}
              ></span>
              <span
                className="dot"
                onClick={() => handleChangeSlideId(5)}
              ></span>
            </div>
          </div>
          <div className="right-content col l-4">
            <div className="image-wrapper">
              <img
                src="https://salt.tikicdn.com/cache/w408/ts/banner/aa/3b/b3/403c766e847f8a4509ad21f6cadcb6bb.jpg"
                alt="right content"
              />
            </div>
          </div>
          <div className="layer-hover hover-left"></div>
          <div className="layer-hover hover-right"></div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
