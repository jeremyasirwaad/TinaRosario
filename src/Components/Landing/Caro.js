import React, { useEffect, useState } from "react";
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
import AOS from "aos";

export const Caro = () => {
	const [pagedata, setPagedata] = useState([]);
	const [loading, setLoading] = useState(true);
	const getdata = async () => {
		const data = await fetch("https://tinarosario.com/api/caros")
			.then((res) => res.json())
			.then((result) => {
				const data = result.data;
				// const data = temp.filter(
				// 	(e) => e.attributes.Main_Category == "Designer Collection"
				// );

				setPagedata(data);
				setLoading(false);
			});
	};

	useEffect(() => {
		getdata();
		console.log("hi");
	}, []);

	const navigate = useNavigate();
	return (
		<div
			id="carouselExampleIndicators"
			class="carousel slide"
			data-ride="carousel"
		>
			{!loading && (
				<div class="carousel-inner">
					<div class="carousel-item active">
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center"
							}}
						>
							<img
								style={{
									borderRadius: "30px",
									height: window.innerWidth <= 700 ? "500px" : "630px",
									zIndex: 200
								}}
								src={
									window.innerWidth <= 700
										? pagedata[0].attributes.mobimg
										: pagedata[0].attributes.pcimg
								}
							/>
						</div>
					</div>
					{pagedata.slice(1).map((e) => {
						return (
							<div class="carousel-item ">
								<div
									style={{
										borderRadius: "30px",
										display: "flex",
										justifyContent: "center",
										alignItems: "center"
									}}
								>
									<img
										style={{
											borderRadius: "30px",
											height: window.innerWidth <= 700 ? "500px" : "630px"
										}}
										src={
											window.innerWidth <= 700
												? e.attributes.mobimg
												: e.attributes.pcimg
										}
									/>
								</div>
							</div>
						);
					})}
				</div>
			)}

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
