import React from "react";
import "./About.css";
import arrow from "./Vector 5.png";
import { RiRulerLine } from "react-icons/ri";
import { BsArrowsFullscreen } from "react-icons/bs";
import { HiHand } from "react-icons/hi";
import { BsEmojiSmile } from "react-icons/bs";
import img1 from "./Rectangle 46.png";
import { Footer } from "../Footer/Footer";
import svg1 from "./Group 36.svg";
import { useNavigate } from "react-router-dom";
import zoom from "./zoom.svg";
import glove from "./glove.svg";
import scale from "./scale.svg";
import face from "./face.svg";
import photo from "./photo.png";
import s1 from "./slider1.svg";
import s2 from "./slider2.svg";
import s3 from "./slider3.svg";

export const About = () => {
	const navigate = useNavigate();
	return (
		<div
			style={{
				backgroundColor: "#DDFDFF",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				backgroundImage: "./bg1.png"
			}}
		>
			<div className="imagesection">
				<span className="t1">
					About <span className="t1-1">Us</span>{" "}
				</span>
				<span className="t2">
					" Creating customized designs using sustainable fabric "
				</span>
				<img src={arrow} alt="" style={{ height: "auto", width: "25px" }} />
			</div>
			<div className="aboutContainer">
				<div className="abtussec2">
					<span className="sec2t1">
						{" "}
						<span className="sec2t11">Why </span>The Design House ?
					</span>
					<div className="sec2box">
						<div className="box1">
							<div className="rect">
								{/* <BsArrowsFullscreen color="white" size={40}></BsArrowsFullscreen> */}
								<img src={zoom} />
							</div>
							<p>Have you tried various sizes and still felt uncomfortable?</p>
						</div>
						<div className="box1">
							<div className="rect">
								{/* <RiRulerLine color="white" size={40} /> */}
								<img src={scale} />
							</div>
							<p>Do the standard measurements bother you?</p>
						</div>
						<div className="box1">
							<div className="rect">
								{/* <HiHand color="white" size={40}></HiHand> */}
								<img src={glove} />
							</div>
							<p>How about something that fits like a glove?</p>
						</div>
						<div className="box1">
							<div className="rect">
								{/* <BsEmojiSmile color="white" size={40}></BsEmojiSmile> */}
								<img src={face} />
							</div>
							<p>
								Would you want to express your persona through your clothing?
							</p>
						</div>
					</div>
				</div>
				<div className="sec3abtus">
					<div className="lsec3">
						<img
							src={svg1}
							alt=""
							style={{ height: "310px", width: "400px" }}
						/>
					</div>
					<div className="rsec3">
						<p style={{ fontSize: "18px" }}>
							<span style={{ fontWeight: "600", fontSize: "25px" }}>
								Tina Rosario
							</span>{" "}
							and her team have been thinking about it for a while. Machinated
							clothing and broad patterns did not interest them. In fact, they
							believe that proper attire and personality based designs makes an
							individual look elegant, enhances confidence and allows to
							communicate better.
						</p>
					</div>
				</div>
				<div className="sec4abtus">
					<span>What’s Inside?</span>
					<p>
						The Design House, your one-stop customized online clothing platform
						is an ideal choice for you to decide and design the attire of your
						dreams. We literally mean it. Identifying the cultural fusion you
						want to blend into, choosing the type of fabric you want to don
						upon, providing specific designs, we guarantee satisfactory
						outcomes.
					</p>
					<p>
						We also have a list of exquisite patterns modeled in the finest of
						fabrics and available for display in our store. Hop in and check it
						out yourself
					</p>
				</div>
				<div className="abtussmallcaro">
					<div
						className="abtin1"
						onClick={() => {
							navigate("/customiseddesigns");
						}}
					></div>
					<div
						className="abtin2"
						onClick={() => {
							navigate("/imagecons");
						}}
					></div>
					<div
						className="abtin3"
						onClick={() => {
							navigate("/fabrics");
						}}
					></div>
					{/* <img src={s1} alt="" />
					<img src={s2} alt="" />
					<img src={s3} alt="" /> */}
				</div>
				<div className="abtussec5">
					<span className="abtus5title">
						{" "}
						<span className="abtus5titlesub">The Pioneer</span> behind the label
					</span>
					<img
						src={photo}
						className="divimg"
						style={{
							width: "230px",
							height: "350px",
							backgroundColor: "#4C2A76"
						}}
					></img>
					<p className="CCC">Creative | Curious | Committed </p>
					<p>
						Tina Rosario, an accomplished celebrity stylist and fashion
						designer, who is well known for her exquisite works in the film
						industry. She has played a key role in styling made-to-measure
						costumes for numerous movies, TV Commercials and web series.
						Currently, through The Design House she has taken a revolutionary
						attempt to redefine fashion in the customer's point of view.
					</p>

					<button
						style={{ cursor: "pointer" }}
						onClick={() => navigate("/contact")}
						className="getintouch"
					>
						Get in Touch
					</button>
				</div>
			</div>
		</div>
	);
};
