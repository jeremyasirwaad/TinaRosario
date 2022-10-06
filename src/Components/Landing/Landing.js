import React from "react";
import { OurBestSellers } from "./OurBestSellers";
import "./landing.css";
import { Caro } from "./Caro";
import { Testimonials } from "./Testimonials";
import { Contactus } from "./Contactus";
import { Footer } from "../Footer/Footer";
export const Landing = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column"
			}}
		>
			<Caro />
			<OurBestSellers />
			<div style={{ height: "250px" }}></div>
			{/* <Testimonials></Testimonials> */}
			{/* <Contactus></Contactus> */}
			<Footer></Footer>
		</div>
	);
};
