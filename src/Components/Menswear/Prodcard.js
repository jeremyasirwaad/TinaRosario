import React from "react";
import { useNavigate } from "react-router-dom";

export const Prodcard = (props) => {
	const navigate = useNavigate();

	return (
		<div
			className="prodcard"
			onClick={() => {
				navigate("/product/" + props.id);
			}}
		>
			<img src={props.img} alt="" />
			{/* <span>{props.}</span> */}
			<div className="prodcarddetails">
				<span className="prodcardtitle">{props.title}</span>
				<span className="prodcarddiscription">{props.Subtitle}</span>
			</div>
		</div>
	);
};
