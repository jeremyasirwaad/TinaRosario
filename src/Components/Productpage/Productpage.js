import React from "react";
import { useParams } from "react-router-dom";
import washicon from "./washcareicon.svg";
import "./Productpage.css";

export default function Productpage() {
	const { prodid } = useParams();

	return (
		<div className="productspages">
			<div className="prodpagegalsection">
				<div className="imgselection">
					<img src="" alt="" />
					<img src="" alt="" />
					<img src="" alt="" />
				</div>
				<img src="" alt="" />
			</div>
			<div className="prodpagedatasection">
				<span>Product Name</span>
				<span>9999 Rs.</span>
				<span>Product Description</span>
				<span>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type
				</span>
				<div>
					<div>
						<img src={washicon} alt="" />
						<span>Wash Care</span>
					</div>
				</div>
				<span>SKU: AAAA111</span>
				<span>Designer Collections | Lehenga | Color</span>
				<button className="Interestedbutton">Interested ?</button>
			</div>
		</div>
	);
}
