import React from "react";
import "./Fabrics.css";
import img1 from "./img1.svg";

export const Fabrics = () => {
	return (
		<div>
			<div className="bgFabrics">
				<span className="fabricsheader">Know your Fabrics</span>
				<div className="fabricscaro"></div>
				<span className="fabricsheader2">
					Why use sustainable eco friendly Fabric
				</span>
				<div className="textcontainer">
					<p>
						Did you ever know that textile production contributes to around 20%
						of the world's water pollution?
					</p>
					<p>
						Thus, as an attentive resident of the planet, isn't it our duty to
						do our part in saving it ? Hence, we have come up with the
						quintessential idea of moving to the concept of sustainable fabrics
						this era. Throughout their lifecycle of design, making and any
						subsequent use, they cause no harm to the mother planet. Apart from
						being versatile and user-friend
					</p>
				</div>
				<button className="fabbutton">Fabrics</button>
				<div className="imgfabrows">
					<div className="imgfabrow1">
						<img src={img1} alt="" />
						<div className="imgfabrowinner">
							<span>Khadi</span>
							<p>
								We understand wedding chores overwhelm you, Here we are to take
								off your burden of how you're going to look.
							</p>
						</div>
					</div>
					<div className="imgfabrow2">
						<img alt="" src={img1} />
						<div className="imgfabrowinner">
							<span>Cotton</span>
							<p>
								We understand wedding chores overwhelm you, Here we are to take
								off your burden of how you're going to look.
							</p>
						</div>
					</div>
					<div className="imgfabrow1">
						<img src={img1} alt="" />
						<div className="imgfabrowinner">
							<span>Linen</span>
							<p>
								We understand wedding chores overwhelm you, Here we are to take
								off your burden of how you're going to look.
							</p>
						</div>
					</div>
					<div className="imgfabrow2">
						<img alt="" src={img1} />
						<div className="imgfabrowinner">
							<span>Jute</span>
							<p>
								We understand wedding chores overwhelm you, Here we are to take
								off your burden of how you're going to look.
							</p>
						</div>
					</div>
					<div className="imgfabrow1">
						<img src={img1} alt="" />
						<div className="imgfabrowinner">
							<span>Banana Silk</span>
							<p>
								We understand wedding chores overwhelm you, Here we are to take
								off your burden of how you're going to look.
							</p>
						</div>
					</div>
				</div>
				<button className="fabbutton" style={{ marginTop: "80px" }}>
					Patterns
				</button>
				<div className="imgfabrows" style={{ marginBottom: "90px" }}>
					<div className="imgfabrow2">
						<img alt="" src={img1} />
						<div className="imgfabrowinner">
							<span>Ikat</span>
							<p>
								We understand wedding chores overwhelm you, Here we are to take
								off your burden of how you're going to look.
							</p>
						</div>
					</div>
					<div className="imgfabrow1">
						<img src={img1} alt="" />
						<div className="imgfabrowinner">
							<span>Kalamkari</span>
							<p>
								We understand wedding chores overwhelm you, Here we are to take
								off your burden of how you're going to look.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
