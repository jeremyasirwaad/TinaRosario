import React from "react";
import "./newlanding.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, useNavigate } from "react-router-dom";
import joda from "./joda.svg";
import mendesigner from "./Mendesigner.svg";
import men from "./men.svg";
import des from "./des.svg";
import hand from "./hand.svg";
import org from "./org.svg";
import lak from "./lak.svg";
import rambai from "./rambai.svg";

export const Caro = () => {
  const navigate = useNavigate();
  return (
    // <Carousel
    //   swipeable={false}
    //   emulateTouch={false}
    //   style={{ height: "650px", maxHeight: "650px" }}
    //   dynamicHeight={true}
    //   infiniteLoop
    //   useKeyboardArrows
    //   autoPlay
    //   showThumbs={false}
    //   showStatus={false}
    //   showIndicators={false}
    // >
    //   <div
    //     style={{
    //       padding: "15px",
    //       display: "flex",
    //       marginTop: "-10px",
    //       justifyContent: "center",
    //       alignItems: "center",
    //     }}
    //   >
    //     {/* <div
    //       onClick={() => navigate("/Productmsg/Jodha_Caro")}
    //       style={{
    //         backgroundColor: "transparent",
    //         width: "350px",
    //         height: "300px",
    //         marginTop: window.innerWidth <= 700 ? "-150px" : "100px",
    //         position: "absolute",
    //         cursor: "pointer",
    //       }}
    //     ></div> */}
    //     <img
    //       style={{ borderRadius: "30px", height: window.innerWidth <= 700 ? "300px" : "650px" }}
    //       src={
    //         window.innerWidth <= 700
    //           ? joda
    //           : "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20814.png?alt=media&token=ff728c49-e8c9-4674-ab3b-70d88504c199"
    //       }
    //       height={"650px"}
    //     />
    //   </div>
    //   <div
    //     style={{
    //       padding: "15px",
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //     }}
    //   >
    //     <div
    //       onClick={() => navigate("/Productmsg/Mendesigner_Caro")}
    //       style={{
    //         backgroundColor: "transparent",
    //         width: "350px",
    //         height: "300px",
    //         marginTop: window.innerWidth <= 700 ? "-150px" : "100px",
    //         position: "absolute",
    //         cursor: "pointer",
    //       }}
    //     ></div>
    //     <img
    //       style={{ borderRadius: "30px", height: "650px" }}
    //       src={
    //         window.innerWidth <= 700
    //           ? "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20791.png?alt=media&token=13dd502f-c112-4529-bc54-f64b8d11acca"
    //           : "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/880.png?alt=media&token=a852ba99-208a-41be-a685-cc9c0714aa32"
    //       }
    //       height={"650px"}
    //     />
    //   </div>
    //   <div
    //     style={{
    //       padding: "15px",
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //     }}
    //   >
    //     <div
    //       onClick={() => navigate("/Productmsg/Deshna_caro")}
    //       style={{
    //         backgroundColor: "transparent",
    //         width: "350px",
    //         height: "300px",
    //         marginTop: window.innerWidth <= 700 ? "-150px" : "100px",
    //         position: "absolute",
    //         cursor: "pointer",
    //       }}
    //     ></div>
    //     <img
    //       style={{ borderRadius: "30px", height: "650px" }}
    //       src={
    //         window.innerWidth <= 700
    //           ? "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20792%20(2).png?alt=media&token=40921be0-4539-41d8-983a-9cfed32c46ef"
    //           : "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20812.png?alt=media&token=efd781ba-1762-45ce-98d7-faeba727455a"
    //       }
    //       height={"650px"}
    //     />
    //   </div>
    //   <div
    //     style={{
    //       padding: "15px",
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //     }}
    //   >
    //     <div
    //       onClick={() => navigate("/Productmsg/handembroidery_caro")}
    //       style={{
    //         backgroundColor: "transparent",
    //         width: "350px",
    //         height: "300px",
    //         marginTop: window.innerWidth <= 700 ? "-150px" : "100px",
    //         position: "absolute",
    //         cursor: "pointer",
    //       }}
    //     ></div>
    //     <img
    //       style={{ borderRadius: "30px", height: "650px" }}
    //       src={
    //         window.innerWidth <= 700
    //           ? "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20824.png?alt=media&token=b65945e8-4ad2-4884-986b-6679ff73bfbb"
    //           : "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20811.png?alt=media&token=c5c28e92-9f2f-4e37-ad2c-bf8c82d6651d"
    //       }
    //       height={"650px"}
    //     />
    //   </div>
    //   <div
    //     style={{
    //       padding: "15px",
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //     }}
    //   >
    //     <div
    //       onClick={() => navigate("/Productmsg/organic_wear_caro")}
    //       style={{
    //         backgroundColor: "transparent",
    //         width: "350px",
    //         height: "300px",
    //         marginTop: window.innerWidth <= 700 ? "-150px" : "100px",
    //         position: "absolute",
    //         cursor: "pointer",
    //       }}
    //     ></div>
    //     <img
    //       style={{ borderRadius: "30px", height: "650px" }}
    //       src={
    //         window.innerWidth <= 700
    //           ? "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20794.png?alt=media&token=21c4eb42-8726-43d2-97c6-b1067590fae4"
    //           : "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/881.png?alt=media&token=18f30af8-f282-4413-bcb5-c51f59cdee75"
    //       }
    //       height={"650px"}
    //     />
    //   </div>
    //   <div
    //     style={{
    //       padding: "15px",
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //     }}
    //   >
    //     <div
    //       onClick={() => navigate("/Productmsg/laskshna_caro")}
    //       style={{
    //         backgroundColor: "transparent",
    //         width: "350px",
    //         height: "300px",
    //         marginTop: window.innerWidth <= 700 ? "-150px" : "100px",
    //         position: "absolute",
    //         cursor: "pointer",
    //       }}
    //     ></div>
    //     <img
    //       style={{ borderRadius: "30px", height: "650px" }}
    //       src={
    //         window.innerWidth <= 700
    //           ? "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20795.png?alt=media&token=4499857c-acd0-4f65-acac-36851e895037"
    //           : "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/878.png?alt=media&token=94c867a3-6eae-465f-b94f-1f64ba14af90"
    //       }
    //       height={"650px"}
    //     />
    //   </div>
    //   <div
    //     style={{
    //       padding: "15px",
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //     }}
    //   >
    //     <div
    //       onClick={() => navigate("/Productmsg/Rambai_caro")}
    //       style={{
    //         backgroundColor: "transparent",
    //         width: "350px",
    //         height: "300px",
    //         marginTop: window.innerWidth <= 700 ? "-150px" : "100px",
    //         position: "absolute",
    //         cursor: "pointer",
    //       }}
    //     ></div>
    //     <img
    //       style={{ borderRadius: "30px", height: "650px" }}
    //       src={
    //         window.innerWidth <= 700
    //           ? "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20827.png?alt=media&token=9da239af-2426-43c5-92f0-468026d4dcfa"
    //           : "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20808.png?alt=media&token=239ff70b-b01d-4bef-bf80-c59cf6faf343"
    //       }
    //       height={"650px"}
    //     />
    //   </div>
    // </Carousel>

    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div
              onClick={() => navigate("/Productmsg/Jodha_Caro")}
              style={{
                backgroundColor: "transparent",
                width: window.innerWidth <= 700 ? "100px" : "350px",
                height: window.innerWidth <= 700 ? "70px" : "100px",
                marginTop: window.innerWidth <= 700 ? "-150px" : "120px",
                position: "absolute",
                cursor: "pointer",
              }}
            ></div>
            <img
              style={{
                borderRadius: "30px",
                height: window.innerWidth <= 700 ? "500px" : "630px",
                zIndex:200
              }}
              src={
                window.innerWidth <= 700
                  ? "https://firebasestorage.googleapis.com/v0/b/tinarosario-41753.appspot.com/o/CAROUSEL%20-%20MOBILE%2F1.jpg?alt=media&token=057c0bb3-8b7e-4a33-8876-e598e33fd955"
                  : "https://firebasestorage.googleapis.com/v0/b/tinarosario-41753.appspot.com/o/CAROUSEL%20-%20WEBSITE%2F1.jpg?alt=media&token=038ed0c5-80e5-4798-81e7-1fc44fa97eb5"
              }
            />
          </div>
        </div>
        <div class="carousel-item ">
          <div style={{ borderRadius: "30px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div
              onClick={() => navigate("/Productmsg/Mendesigner_Caro")}
              style={{
                backgroundColor: "transparent",
                width: window.innerWidth <= 700 ? "100px" : "350px",
                height: window.innerWidth <= 700 ? "70px" : "120px",
                marginTop: window.innerWidth <= 700 ? "-150px" : "200px",
                position: "absolute",
                cursor: "pointer",
              }}
            ></div>
            <img
              style={{
                borderRadius: "30px",
                height: window.innerWidth <= 700 ? "350px" : "630px",
              }}
              src={
                window.innerWidth <= 700
                  ? "https://firebasestorage.googleapis.com/v0/b/tinarosario-41753.appspot.com/o/CAROUSEL%20-%20MOBILE%2F2.jpg?alt=media&token=e0dd56c8-af05-45a8-83a1-7c5fad5f38ff"
                  : "https://firebasestorage.googleapis.com/v0/b/tinarosario-41753.appspot.com/o/CAROUSEL%20-%20WEBSITE%2F3.jpg?alt=media&token=a2170558-70cc-4b0c-a4a3-4f6b38a9c25c"
              }
            />
          </div>
        </div>
        <div class="carousel-item">
          <div style={{ borderRadius: "30px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div
              onClick={() => navigate("/Productmsg/Deshna_caro")}
              style={{
                backgroundColor: "transparent",
                width: window.innerWidth <= 700 ? "100px" : "350px",
                height: window.innerWidth <= 700 ? "70px" : "100px",
                marginTop: window.innerWidth <= 700 ? "-150px" : "200px",
                position: "absolute",
                cursor: "pointer",
              }}
            ></div>
            <img
              style={{
                borderRadius: "30px",
                height: window.innerWidth <= 700 ? "350px" : "630px",
              }}
              src={
                window.innerWidth <= 700
                  ? "https://firebasestorage.googleapis.com/v0/b/tinarosario-41753.appspot.com/o/CAROUSEL%20-%20MOBILE%2F4.jpg?alt=media&token=a3bfa5e3-109f-471e-bb39-70ebfd6cadb0"
                  : "https://firebasestorage.googleapis.com/v0/b/tinarosario-41753.appspot.com/o/CAROUSEL%20-%20WEBSITE%2F4.jpg?alt=media&token=8aa4a7a9-ced7-4c98-8239-d122407e550b"
              }
            />
          </div>
        </div>
        <div class="carousel-item">
          <div style={{ borderRadius: "30px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div
              onClick={() => navigate("/Productmsg/handembroidery_caro")}
              style={{
                backgroundColor: "transparent",
                width: window.innerWidth <= 700 ? "100px" : "350px",
                height: window.innerWidth <= 700 ? "70px" : "100px",
                marginLeft: window.innerWidth <= 700 ? "0px" : "150px",
                marginTop: window.innerWidth <= 700 ? "-150px" : "200px",
                position: "absolute",
                cursor: "pointer",
              }}
            ></div>
            <img
              style={{
                borderRadius: "30px",
                height: window.innerWidth <= 700 ? "350px" : "630px",
              }}
              src={
                window.innerWidth <= 700
                  ? "https://firebasestorage.googleapis.com/v0/b/tinarosario-41753.appspot.com/o/CAROUSEL%20-%20MOBILE%2F7.jpg?alt=media&token=850a6e65-7bcb-468b-a098-56dddb578355"
                  : "https://firebasestorage.googleapis.com/v0/b/tinarosario-41753.appspot.com/o/CAROUSEL%20-%20WEBSITE%2F5.jpg?alt=media&token=f60b5e24-9eb4-414c-896e-ce5cdb0b698d"
              }
            />
          </div>
        </div>
        <div class="carousel-item">
          <div style={{ borderRadius: "30px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div
              onClick={() => navigate("/Productmsg/organic_wear_caro")}
              style={{
                backgroundColor: "transparent",
                width: window.innerWidth <= 700 ? "100px" : "350px",
                height: window.innerWidth <= 700 ? "70px" : "100px",
                marginLeft: window.innerWidth <= 700 ? "0px" : "50px",
                marginTop: window.innerWidth <= 700 ? "-150px" : "200px",
                position: "absolute",
                cursor: "pointer",
              }}
            ></div>
            <img
              style={{
                borderRadius: "30px",
                height: window.innerWidth <= 700 ? "350px" : "630px",
              }}
              src={
                window.innerWidth <= 700
                  ? "https://firebasestorage.googleapis.com/v0/b/tinarosario-41753.appspot.com/o/CAROUSEL%20-%20MOBILE%2F5.jpg?alt=media&token=e52e3777-28de-4475-86db-04c8a8adf2cc"
                  : "https://firebasestorage.googleapis.com/v0/b/tinarosario-41753.appspot.com/o/CAROUSEL%20-%20WEBSITE%2F6.jpg?alt=media&token=cfffdedb-5017-418f-bf47-e8996d06c1d6"
              }
            />
          </div>
        </div>
        <div class="carousel-item">
          <div style={{ borderRadius: "30px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div
              onClick={() => navigate("/Productmsg/laskshna_caro")}
              style={{
                backgroundColor: "transparent",
                width: window.innerWidth <= 700 ? "100px" : "350px",
                height: window.innerWidth <= 700 ? "70px" : "100px",
                marginLeft: window.innerWidth <= 700 ? "0px" : "50px",
                marginTop: window.innerWidth <= 700 ? "-150px" : "200px",
                position: "absolute",
                cursor: "pointer",
              }}
            ></div>
            <img
              style={{
                borderRadius: "30px",
                height: window.innerWidth <= 700 ? "350px" : "630px",
              }}
              src={
                window.innerWidth <= 700
                  ? "https://firebasestorage.googleapis.com/v0/b/tinarosario-41753.appspot.com/o/CAROUSEL%20-%20MOBILE%2F8.jpg?alt=media&token=54160b1c-fa3a-4197-ad4c-a290b43ada8b"
                  : "https://firebasestorage.googleapis.com/v0/b/tinarosario-41753.appspot.com/o/CAROUSEL%20-%20WEBSITE%2F7.jpg?alt=media&token=f0aa1fdf-1dd7-4dce-9191-d0a39e7ee3fb"
              }
            />
          </div>
        </div>
        {/* <div class="carousel-item">
          <div style={{ borderRadius: "30px" }}>
            <img
              style={{
                borderRadius: "30px",
                height: window.innerWidth <= 700 ? "300px" : "630px",
              }}
              src={
                window.innerWidth <= 700
                  ? joda
                  : "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/881.png?alt=media&token=18f30af8-f282-4413-bcb5-c51f59cdee75"
              }
            />
          </div>
        </div> */}
        <div class="carousel-item">
          <div style={{ borderRadius: "30px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div
              onClick={() => navigate("/Productmsg/Rambai_caro")}
              style={{
                backgroundColor: "transparent",
                width: window.innerWidth <= 700 ? "100px" : "350px",
                height: window.innerWidth <= 700 ? "70px" : "100px",
                marginLeft: window.innerWidth <= 700 ? "0px" : "0px",
                marginTop: window.innerWidth <= 700 ? "-150px" : "200px",
                position: "absolute",
                cursor: "pointer",
              }}
            ></div>
            <img
              style={{
                borderRadius: "30px",
                height: window.innerWidth <= 700 ? "350px" : "630px",
              }}
              src={
                window.innerWidth <= 700
                  ? "https://firebasestorage.googleapis.com/v0/b/tinarosario-41753.appspot.com/o/CAROUSEL%20-%20MOBILE%2F6.jpg?alt=media&token=11efa811-26e6-4323-bbe1-8f794830872c"
                  : "https://firebasestorage.googleapis.com/v0/b/tinarosario-41753.appspot.com/o/CAROUSEL%20-%20WEBSITE%2F8.jpg?alt=media&token=0e3b1d1f-26d3-4645-8651-17d6f5efa360"
              }
            />
          </div>
        </div>
      </div>
      <a
        style={{ marginLeft: "20px" }}
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        style={{ marginRight: "20px" }}
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
};
