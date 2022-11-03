import React from "react";
import "./Gallery.css";
import happyclient from "./happyclients.svg";
import startstud from "./starstud.svg";
import talkies from "./talkies.svg";
import jingles from "./Jingles.svg";
import { useNavigate } from "react-router-dom";

export const Gallery = () => {
	const navigate = useNavigate();

	return (
		<div className="gallerypage">
			<span className="gallerytitle">Choose Category</span>
			<div className="gal1">
				<img src={happyclient} alt="" className="galimg1" />
				<img src={startstud} alt="" className="galimg2" />
			</div>
			<div className="gal2">
				<img src={talkies} alt="" className="galimg3" />
				<img src={jingles} alt="" className="galimg4" />
			</div>
		</div>
	);
};
