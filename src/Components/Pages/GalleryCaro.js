import React, { useState, useEffect } from "react";
import "./GalleryCaro.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MoonLoader from "react-spinners/ClipLoader";

const GalleryCaro = () => {
	const [loading, setLoading] = useState(true);
	const [pagedata, setPagedata] = useState([]);

	const getdata = async () => {
		const data = await fetch(
			"http://products.tinarosario.com/api/Gallery-images"
		)
			.then((res) => res.json())
			.then((result) => {
				// console.log(result.data[0].attributes.galleryimages.gallery);
				const temp = result.data[0].attributes.galleryimages.gallery;
				setPagedata(temp);
				setLoading(false);
			});
	};
	console.log(pagedata);

	useEffect(() => {
		getdata();
	}, []);

	return (
		<div className="galleryCont">
			{loading ? (
				<div
					style={{
						display: "flex",
						width: "100%",
						alignItems: "center",
						justifyContent: "center",
						height: "100vh"
					}}
				>
					<MoonLoader color="#4C2A76" size={50} />
				</div>
			) : (
				<div className="galleryCont">
					<h2 className="gallerytitle">By the House</h2>
					<div className="galleryCaro" style={{ marginBottom: "80px" }}>
						<Carousel
							dynamicHeight={true}
							infiniteLoop
							useKeyboardArrows
							autoPlay
							showThumbs={false}
							showStatus={false}
							showIndicators={false}
							swipeable={true}
							// transitionTime={0.1}
						>
							{pagedata.map((img) => {
								return <img src={img} alt="" />;
							})}
						</Carousel>
					</div>
				</div>
			)}
		</div>
	);
};

export default GalleryCaro;
