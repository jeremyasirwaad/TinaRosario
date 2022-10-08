import React from "react";
import img1 from "./l1-min.jpg";
import img4 from "./l4-min.jpg";
import img5 from "./l5-min.jpg";
import caro from "./caro.svg";
export const Caro = () => {
  return (
    <div style={{ height: "450px", backgroundColor: "black" }} class="carousel slide" data-ride="carousel">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div style={{ backgroundSize: "contain" }} class="carousel-item active">
            <div style={{ backgroundColor: "black", height: "450px" }}></div>
          </div>
          <div class="carousel-item">
            <div style={{ backgroundColor: "#4C2A76", height: "450px" }}></div>
          </div>
          <div class="carousel-item">
            <div style={{ backgroundColor: "#270641", height: "450px" }}></div>
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
