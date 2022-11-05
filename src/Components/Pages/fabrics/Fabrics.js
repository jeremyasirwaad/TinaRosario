import React from "react";
import "./Fabrics.css";
import img1 from "./img1.svg";

import { Carousel } from "3d-react-carousal";

export const Fabrics = () => {
  let slides = [
    <img className="caroimg" src="https://picsum.photos/800/200/?random" alt="1" />,
    <img className="caroimg" src="https://picsum.photos/800/201/?random" alt="2" />,
    <img className="caroimg" src="https://picsum.photos/800/202/?random" alt="3" />,
    <img className="caroimg" src="https://picsum.photos/800/203/?random" alt="4" />,
    <img className="caroimg" src="https://picsum.photos/800/204/?random" alt="5" />,
  ];

  const callback = function (index) {};
  return (
    <div>
      <div className="bgFabrics">
        <span className="fabricsheader">Know your Fabrics</span>
        <div className="fabricscaro">
          <Carousel slides={slides} autoplay={true} interval={5000} onSlideChange={callback} />
        </div>
        <span className="fabricsheader2">Why use sustainable eco friendly Fabric</span>
        <div className="textcontainer">
          <p>Did you ever know that textile production contributes to around 20% of the world's water pollution?</p>
          <p>
            Thus, as an attentive resident of the planet, isn't it our duty to do our part in saving it ? Hence, we have
            come up with the quintessential idea of moving to the concept of sustainable fabrics this era. Throughout
            their lifecycle of design, making and any subsequent use, they cause no harm to the mother planet. Apart
            from being versatile and user-friend
          </p>
        </div>
        <button className="fabbutton">Fabrics</button>
        <div className="imgfabrows">
          <div className="imgfabrow1">
            <img src={img1} alt="" />
            <div className="imgfabrowinner">
              <span>Khadi</span>
              <p>
                We understand wedding chores overwhelm you, Here we are to take off your burden of how you're going to
                look.
              </p>
            </div>
          </div>
          <div className="imgfabrow2">
            <img alt="" src={img1} />
            <div className="imgfabrowinner">
              <span>Cotton</span>
              <p>
                We understand wedding chores overwhelm you, Here we are to take off your burden of how you're going to
                look.
              </p>
            </div>
          </div>
          <div className="imgfabrow1">
            <img src={img1} alt="" />
            <div className="imgfabrowinner">
              <span>Linen</span>
              <p>
                We understand wedding chores overwhelm you, Here we are to take off your burden of how you're going to
                look.
              </p>
            </div>
          </div>
          <div className="imgfabrow2">
            <img alt="" src={img1} />
            <div className="imgfabrowinner">
              <span>Jute</span>
              <p>
                We understand wedding chores overwhelm you, Here we are to take off your burden of how you're going to
                look.
              </p>
            </div>
          </div>
          <div className="imgfabrow1">
            <img src={img1} alt="" />
            <div className="imgfabrowinner">
              <span>Banana Silk</span>
              <p>
                We understand wedding chores overwhelm you, Here we are to take off your burden of how you're going to
                look.
              </p>
            </div>
          </div>
        </div>
        <button className="fabbutton" style={{ marginTop: "80px" }}>
          Patterns
        </button>
        <div className="imgfabrows" style={{ marginBottom: "90px" }}>
          <div className="imgfabrow2">
            <img alt="" src={img1} />
            <div className="imgfabrowinner">
              <span>Ikat</span>
              <p>
                We understand wedding chores overwhelm you, Here we are to take off your burden of how you're going to
                look.
              </p>
            </div>
          </div>
          <div className="imgfabrow1">
            <img src={img1} alt="" />
            <div className="imgfabrowinner">
              <span>Kalamkari</span>
              <p>
                We understand wedding chores overwhelm you, Here we are to take off your burden of how you're going to
                look.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
