import React from "react";
import "./newlanding.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, useNavigate } from "react-router-dom";

export const Caro = () => {
	const navigate = useNavigate();
	return (
		<Carousel
			swipeable={false}
			emulateTouch={false}
			style={{ height: "650px", maxHeight: "650px" }}
			dynamicHeight={true}
			infiniteLoop
			useKeyboardArrows
			autoPlay
			showThumbs={false}
			showStatus={false}
			showIndicators={false}
		>
			<div
				style={{
					padding: "15px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center"
				}}
			>
				<div
					onClick={() => navigate("/Productmsg/Jodha_Caro")}
					style={{
						backgroundColor: "transparent",
						width: "350px",
						height: "300px",
						marginTop: window.innerWidth <= 600 ? "-150px" : "100px",
						position: "absolute",
						cursor: "pointer"
					}}
				></div>
				<img
					style={{ borderRadius: "30px", height: "650px" }}
					src={
						window.innerWidth <= 600
							? "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20790.png?alt=media&token=b14cabdb-6fd7-455e-bbf8-72dc10e4a04a"
							: "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20814.png?alt=media&token=ff728c49-e8c9-4674-ab3b-70d88504c199"
					}
					height={"650px"}
				/>
			</div>
			<div
				style={{
					padding: "15px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center"
				}}
			>
				<div
					onClick={() => navigate("/Productmsg/Mendesigner_Caro")}
					style={{
						backgroundColor: "transparent",
						width: "350px",
						height: "300px",
						marginTop: window.innerWidth <= 600 ? "-150px" : "100px",
						position: "absolute",
						cursor: "pointer"
					}}
				></div>
				<img
					style={{ borderRadius: "30px", height: "650px" }}
					src={
						window.innerWidth <= 600
							? "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20791.png?alt=media&token=13dd502f-c112-4529-bc54-f64b8d11acca"
							: "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/880.png?alt=media&token=a852ba99-208a-41be-a685-cc9c0714aa32"
					}
					height={"650px"}
				/>
			</div>
			<div
				style={{
					padding: "15px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center"
				}}
			>
				<div
					onClick={() => navigate("/Productmsg/Deshna_caro")}
					style={{
						backgroundColor: "transparent",
						width: "350px",
						height: "300px",
						marginTop: window.innerWidth <= 600 ? "-150px" : "100px",
						position: "absolute",
						cursor: "pointer"
					}}
				></div>
				<img
					style={{ borderRadius: "30px", height: "650px" }}
					src={
						window.innerWidth <= 600
							? "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20792%20(2).png?alt=media&token=40921be0-4539-41d8-983a-9cfed32c46ef"
							: "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20812.png?alt=media&token=efd781ba-1762-45ce-98d7-faeba727455a"
					}
					height={"650px"}
				/>
			</div>
			<div
				style={{
					padding: "15px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center"
				}}
			>
				<div
					onClick={() => navigate("/Productmsg/handembroidery_caro")}
					style={{
						backgroundColor: "transparent",
						width: "350px",
						height: "300px",
						marginTop: window.innerWidth <= 600 ? "-150px" : "100px",
						position: "absolute",
						cursor: "pointer"
					}}
				></div>
				<img
					style={{ borderRadius: "30px", height: "650px" }}
					src={
						window.innerWidth <= 600
							? "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20824.png?alt=media&token=b65945e8-4ad2-4884-986b-6679ff73bfbb"
							: "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20811.png?alt=media&token=c5c28e92-9f2f-4e37-ad2c-bf8c82d6651d"
					}
					height={"650px"}
				/>
			</div>
			<div
				style={{
					padding: "15px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center"
				}}
			>
				<div
					onClick={() => navigate("/Productmsg/organic_wear_caro")}
					style={{
						backgroundColor: "transparent",
						width: "350px",
						height: "300px",
						marginTop: window.innerWidth <= 600 ? "-150px" : "100px",
						position: "absolute",
						cursor: "pointer"
					}}
				></div>
				<img
					style={{ borderRadius: "30px", height: "650px" }}
					src={
						window.innerWidth <= 600
							? "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20794.png?alt=media&token=21c4eb42-8726-43d2-97c6-b1067590fae4"
							: "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/881.png?alt=media&token=18f30af8-f282-4413-bcb5-c51f59cdee75"
					}
					height={"650px"}
				/>
			</div>
			<div
				style={{
					padding: "15px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center"
				}}
			>
				<div
					onClick={() => navigate("/Productmsg/laskshna_caro")}
					style={{
						backgroundColor: "transparent",
						width: "350px",
						height: "300px",
						marginTop: window.innerWidth <= 600 ? "-150px" : "100px",
						position: "absolute",
						cursor: "pointer"
					}}
				></div>
				<img
					style={{ borderRadius: "30px", height: "650px" }}
					src={
						window.innerWidth <= 600
							? "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20795.png?alt=media&token=4499857c-acd0-4f65-acac-36851e895037"
							: "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/878.png?alt=media&token=94c867a3-6eae-465f-b94f-1f64ba14af90"
					}
					height={"650px"}
				/>
			</div>
			<div
				style={{
					padding: "15px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center"
				}}
			>
				<div
					onClick={() => navigate("/Productmsg/Rambai_caro")}
					style={{
						backgroundColor: "transparent",
						width: "350px",
						height: "300px",
						marginTop: window.innerWidth <= 600 ? "-150px" : "100px",
						position: "absolute",
						cursor: "pointer"
					}}
				></div>
				<img
					style={{ borderRadius: "30px", height: "650px" }}
					src={
						window.innerWidth <= 600
							? "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20827.png?alt=media&token=9da239af-2426-43c5-92f0-468026d4dcfa"
							: "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20808.png?alt=media&token=239ff70b-b01d-4bef-bf80-c59cf6faf343"
					}
					height={"650px"}
				/>
			</div>
		</Carousel>
	);
};
