import React from "react";
import logo from "./logo.svg";
import banner from "./banner.svg";
import whatsapp from "./whatsapplogo.svg";
import insta from "./installogo.svg";
import brower from "./browserlogo.svg";
import "./Evisiting.css";

export default function () {
	return (
		<div className="evisitingpage">
			<span className="evisitingtitle">The Design House</span>
			<span className="evisitingt2">by</span>
			<img className="evistinglogoimg" src={logo} alt="" />
			<img className="evisitingbannerim2" src={banner} alt="" />
			<div className="buttondivevisiting">
				<img src={whatsapp} alt="" onClick={() => {}} />
				<img src={insta} alt="" onClick={() => {}} />
				<img src={brower} alt="" onClick={() => {}} />
			</div>
		</div>
	);
}
