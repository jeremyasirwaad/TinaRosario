import React from "react";

export const Prodcard = (props) => {
	return (
		<div className="prodcard">
			<img src={props.img} alt="" />
			{/* <span>{props.}</span> */}
			<div className="prodcarddetails">
				<span className="prodcardtitle">{props.title}</span>
				<span className="prodcarddiscription">
					{props.description.slice(0, 30)}
				</span>
			</div>
		</div>
	);
};
