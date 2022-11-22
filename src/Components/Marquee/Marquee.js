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
				backgroundColor: "#9ADCE1"
			}}
		>
			<Marquee gradient={false} style={{ color: "black" }} speed={80}>
				Welcome! Third-party payment options will be launched shortly.
				Meanwhile, explore and contact us if you like an outfit. Avail
				10% Off on your first order
				<div style={{ width: "400px" }}></div>
			</Marquee>
			{/* <h1>Hello</h1> */}
		</div>
	);
};
