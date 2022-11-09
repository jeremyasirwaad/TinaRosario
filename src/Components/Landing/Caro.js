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


