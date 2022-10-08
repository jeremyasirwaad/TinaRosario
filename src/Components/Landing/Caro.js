import React from "react";
import img1 from "./l1-min.jpg";
import img4 from "./l4-min.jpg";
import img5 from "./l5-min.jpg";
import caro from "./caro.svg";
import "./newlanding.css";
export const Caro = () => {
  return (
    <div
      className="caro-container caro"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="" style={{ borderRadius: "30px" }} class="carousel-inner">
          <div class="carousel-item active">
            <img class="" src={caro} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="" src={caro} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="" src={caro} alt="Third slide" />
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};
