import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

export const Marqueeline = () => {
	const [pagedata, setPagedata] = useState("");
	const [loading, setLoading] = useState(true);

	const getdata = async () => {
		const data = await fetch("https://tinarosario.com/api/marque")
			.then((res) => res.json())
			.then((result) => {
				const data = result.data;
				// const data = temp.filter(
				// 	(e) => e.attributes.Main_Category == "Designer Collection"
				// );
				// console.log(data);
				setPagedata(data.attributes.text);
				setLoading(false);
			});
	};

	useEffect(() => {
		getdata();
		// console.log("hi");
	}, []);

	return (
		<div
			style={{
				width: "100%",
				height: "30px",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "#9ADCE1",
				position: "fixed",
				top: 0,
				zIndex: 1000
			}}
		>
			{!loading && (
				<Marquee
					gradient={false}
					style={{
						color: "black",
						fontSize: "16px",
						fontFamily: "'Poppins', sans-serif"
					}}
					speed={80}
				>
					{pagedata}
					<div style={{ width: "400px" }}></div>
				</Marquee>
			)}

			{/* <h1>Hello</h1> */}
		</div>
	);
};
