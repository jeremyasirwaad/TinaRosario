import React from "react";
import Marquee from "react-fast-marquee";

export const Marqueeline = () => {
	return (
		<div
			style={{
				width: "100%",
				height: "30px",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "rgb(47, 0, 33)"
			}}
		>
			<Marquee gradient={false} style={{ color: "white" }} speed={80}>
				Welcome! Payment integration will be launched shortly. Meanwhile explore
				our services and products
			</Marquee>
			{/* <h1>Hello</h1> */}
		</div>
	);
};
