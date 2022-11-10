import React from "react";
import "./newlanding.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Caro = () => {
  return (
    <Carousel
      style={{ height: "650px" }}
      dynamicHeight={true}
      infiniteLoop
      useKeyboardArrows
      autoPlay
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
    >
      <div style={{ padding: "15px", borderRadius: "30px" }}>
        <img
          style={{ borderRadius: "30px" }}
          src={
            "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/875%20(1).png?alt=media&token=35b5cb14-4625-4bf6-b6fb-10fb10024bf1"
          }
          height={"650px"}
        />
      </div>
      <div style={{ padding: "15px" }}>
        <img
          style={{ borderRadius: "30px" }}
          src={
            "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/880.png?alt=media&token=a852ba99-208a-41be-a685-cc9c0714aa32"
          }
          height={"650px"}
        />
      </div>
      <div style={{ padding: "15px" }}>
        <img
          style={{ borderRadius: "30px" }}
          src={
            "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/876.png?alt=media&token=eae68b41-d032-4ee7-9c00-887932c7ce23"
          }
          height={"650px"}
        />
      </div>
      <div style={{ padding: "15px" }}>
        <img
          style={{ borderRadius: "30px" }}
          src={
            "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/879.png?alt=media&token=02658554-1e8b-4531-a93d-809a059f15d2"
          }
          height={"650px"}
        />
      </div>
      <div style={{ padding: "15px" }}>
        <img
          style={{ borderRadius: "30px" }}
          src={
            "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/881.png?alt=media&token=18f30af8-f282-4413-bcb5-c51f59cdee75"
          }
          height={"650px"}
        />
      </div>
      <div style={{ padding: "15px" }}>
        <img
          style={{ borderRadius: "30px" }}
          src={
            "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/878.png?alt=media&token=94c867a3-6eae-465f-b94f-1f64ba14af90"
          }
          height={"650px"}
        />
      </div>
      <div style={{ padding: "15px" }}>
        <img
          style={{ borderRadius: "30px" }}
          src={
            "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/877.png?alt=media&token=f668b848-e98e-4b9f-9bd0-beb9f0f68377"
          }
          height={"650px"}
        />
      </div>
    </Carousel>
  );
};
