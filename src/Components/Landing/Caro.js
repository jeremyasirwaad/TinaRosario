import React from "react";
import img1 from "./l1-min.jpg";
import img4 from "./l4-min.jpg";
import img5 from "./l5-min.jpg";
import landingtext from "./caroimg1.png";
import text2 from "./caroimg2.png";
import text3 from "./caroimg3.png";
import text4 from "./caroimg4.png";
import text5 from "./caroimg5.png";

import text6 from "./caroimg6.png";

import text7 from "./caroimg7.png";

import caro from "./caro.svg";
import "./newlanding.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Caro = () => {
	// return (
	//   <div
	//     className="caro-container caro"
	//     style={{
	//       display: "flex",
	//       justifyContent: "center",
	//       alignItems: "center",
	//     }}
	//   >
	//     <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
	//       <ol class="carousel-indicators">
	//         <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
	//         <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
	//         <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
	//       </ol>
	//       <div className="" style={{ borderRadius: "30px", width: "100%" }} class="carousel-inner">
	//         <div class="carousel-item active">
	//           <img class="" src={caro} alt="First slide" />
	//         </div>
	//         <div class="carousel-item">
	//           <img class="" src={caro} alt="Second slide" />
	//         </div>
	//         <div class="carousel-item">
	//           <img class="" src={caro} alt="Third slide" />
	//         </div>
	//       </div>
	//       <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
	//         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
	//         <span class="sr-only">Previous</span>
	//       </a>
	//       <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
	//         <span class="carousel-control-next-icon" aria-hidden="true"></span>
	//         <span class="sr-only">Next</span>
	//       </a>
	//     </div>
	//   </div>
	// );

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
					src={landingtext}
					height={"650px"}
				/>
			</div>
			<div style={{ padding: "15px" }}>
				<img style={{ borderRadius: "30px" }} src={text2} height={"650px"} />
			</div>
			<div style={{ padding: "15px" }}>
				<img style={{ borderRadius: "30px" }} src={text3} height={"650px"} />
			</div>
			<div style={{ padding: "15px" }}>
				<img style={{ borderRadius: "30px" }} src={text4} height={"650px"} />
			</div>
			<div style={{ padding: "15px" }}>
				<img style={{ borderRadius: "30px" }} src={text5} height={"650px"} />
			</div>
			<div style={{ padding: "15px" }}>
				<img style={{ borderRadius: "30px" }} src={text6} height={"650px"} />
			</div>
			<div style={{ padding: "15px" }}>
				<img style={{ borderRadius: "30px" }} src={text7} height={"650px"} />
			</div>
			{/* <div style={{ padding: "15px" }}>
        <img style={{ borderRadius: "30px" }} src={text8} height={"650px"} />
      </div> */}
			{/* <div style={{ padding: "15px" }}>
				<img style={{ borderRadius: "30px" }} src={text9} height={"650px"} />
			</div> */}
		</Carousel>
	);
};
