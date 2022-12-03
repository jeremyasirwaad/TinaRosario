import React from "react";
import "./popup.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const Popup = (props) => {
	return props.trigger ? (
		<div className="popuppage">
			<div className="popupinner">
				<AiOutlineCloseCircle
					size={24}
					className="popupclose"
					color="white"
					onClick={() => {
						props.close(false);
					}}
				/>
				<img src={props.url} alt="" />
			</div>
		</div>
	) : (
		""
	);
};
