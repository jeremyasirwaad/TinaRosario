import React from "react";
import { Carousel } from "3d-react-carousal";
import "./GalleryCaro.css";
const GalleryCaro = () => {
  let slides = [
    <img className="caroimg" src="https://picsum.photos/800/300/?random" alt="1" />,
    <img className="caroimg" src="https://picsum.photos/800/301/?random" alt="2" />,
    <img className="caroimg" src="https://picsum.photos/800/302/?random" alt="3" />,
    <img className="caroimg" src="https://picsum.photos/800/303/?random" alt="4" />,
    <img className="caroimg" src="https://picsum.photos/800/304/?random" alt="5" />,
  ];
  const callback = function (index) {};
  return (
    <div className="galleryCont">
      <h2 className="gallerytitle">Star Stud</h2>
      <div className="galleryCaro">
        <Carousel
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginTop: "20px",
          }}
          slides={slides}
          autoplay={true}
          interval={5000}
          onSlideChange={callback}
        />
      </div>
    </div>
  );
};

export default GalleryCaro;
