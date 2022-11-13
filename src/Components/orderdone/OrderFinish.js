import React from "react";
import { useParams } from "react-router-dom";
import tick from "./tick.svg";
import "./OrderFinish.css";
import bottomLogo from "./bottomLogo.svg";
const OrderFinish = () => {
	const { type, name, d, m, y } = useParams();
	return (
		<div className="order-bg">
			{type == "wedding" && (
				<div className="order-card">
					<div className="icon">
						<img src={tick} />
					</div>
					<div className="details">
						Hello {name} , <br /> Welcome to “The Design House” family <br />
						by Tina Rosario. <br /> Appreciate your confidence in us. <br /> -{" "}
						<br />
						Your appointment has been confirmed. <br /> Looking forward to
						discuss further to make your day <br /> “look” special <br /> <br />
						Our Designer will contact you on {d}/{m}/{y}, <br />
						between 11am to 7pm.
					</div>
				</div>
			)}
			{type == "customized" && (
				<div className="order-card">
					<div className="icon">
						<img src={tick} />
					</div>
					<div className="details">
						Hello {name} , <br /> Welcome to “The Design House” family <br /> by
						Tina Rosario. <br /> Appreciate your confidence in us. <br /> <br />
						Looking forward to customise your comfort attire. <br /> <br />
						Our Designer will contact you to discuss fabric, design, and
						measurement details.
					</div>
				</div>
			)}
			{type == "image" && (
				<div className="order-card">
					<div className="icon">
						<img src={tick} />
					</div>
					<div className="details">
						Hello {name} , <br /> Welcome to “The Design House” family
						<br />
						by Tina Rosario. <br /> Appreciate your confidence in us. <br />{" "}
						<br />
						Your Consultation has been confirmed. Our Designer <br /> will send
						you an email with details <br /> <br />
						Looking forward to understand you and create a garm of your choice.
					</div>
				</div>
			)}
			{type == "getpam" && (
				<div className="order-card">
					<div className="icon">
						<img src={tick} />
					</div>
					<div className="details">
						Hello {name} , <br /> Welcome to “The Design House” family
						<br />
						by Tina Rosario. <br /> Appreciate your confidence in us. <br />
						<br />
						Looking forward to satisfy your needs from the comfort of your home.
						<br />
						<br />
						Our Designer will contact you to confirm a date and time.
					</div>
				</div>
			)}
			<div className="bottomLogo">
				<img src={bottomLogo} />
			</div>
		</div>
	);
};

export default OrderFinish;
