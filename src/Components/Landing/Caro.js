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
						marginTop: "100px",
						position: "absolute",
						cursor: "pointer"
					}}
				></div>
				<img
					style={{ borderRadius: "30px", height: "650px" }}
					src={
						window.innerWidth <= 600
							? "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20790.png?alt=media&token=b14cabdb-6fd7-455e-bbf8-72dc10e4a04a"
							: "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/875%20(1).png?alt=media&token=35b5cb14-4625-4bf6-b6fb-10fb10024bf1"
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
						marginTop: "100px",
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
						marginTop: "100px",
						position: "absolute",
						cursor: "pointer"
					}}
				></div>
				<img
					style={{ borderRadius: "30px", height: "650px" }}
					src={
						window.innerWidth <= 600
							? "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20792.png?alt=media&token=1a7dd386-6a62-44e2-8e8c-c7e170b50028"
							: "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/876.png?alt=media&token=eae68b41-d032-4ee7-9c00-887932c7ce23"
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
						marginTop: "100px",
						position: "absolute",
						cursor: "pointer"
					}}
				></div>
				<img
					style={{ borderRadius: "30px", height: "650px" }}
					src={
						window.innerWidth <= 600
							? "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20793.png?alt=media&token=2db012e6-5a5e-43a5-b5ba-88fd0d7fd183"
							: "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/879.png?alt=media&token=02658554-1e8b-4531-a93d-809a059f15d2"
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
						marginTop: "100px",
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
						marginTop: "100px",
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
						marginTop: "100px",
						position: "absolute",
						cursor: "pointer"
					}}
				></div>
				<img
					style={{ borderRadius: "30px", height: "650px" }}
					src={
						window.innerWidth <= 600
							? "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20796.png?alt=media&token=f3b5b869-a3a3-4116-bf3b-b5b0f82a4173"
							: "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/877.png?alt=media&token=f668b848-e98e-4b9f-9bd0-beb9f0f68377"
					}
					height={"650px"}
				/>
			</div>
		</Carousel>
	);
};
