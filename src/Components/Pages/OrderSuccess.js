import React from "react";
import { Footer } from "../Footer/Footer";
import { useParams } from "react-router-dom";
import "./success.css";

export const OrderSuccess = () => {
	const { id } = useParams();

	return (
		<div>
			<div className="successpage">
				<div className="successpageinner">
					<img
						src="https://i.pinimg.com/736x/4f/eb/e3/4febe30cb91a2650d94053af0cba3e02.jpg"
						alt=""
					/>
					<span className="successheader">Thanks For Getting in touch</span>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
						modi repudiandae perferendis cumque officia harum sint reprehenderit
						similique iste, quisquam veritatis dolores, molestiae accusamus rem
						omnis sit, iusto veniam reiciendis.
					</p>
					<p>Order Id : {id}</p>
				</div>
			</div>
			
		</div>
	);
};
