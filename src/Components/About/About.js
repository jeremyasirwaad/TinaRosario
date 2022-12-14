import React from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";
import zoom from "./zoom.png";
import glove from "./glove.png";
import scale from "./scale.png";
import face from "./smile.png";
import photo from "./photo.png";
import img1 from "./img1.svg";
import img2 from "./img2.svg";
import resimg from "./resbg.png";

export const About = () => {
	const navigate = useNavigate();

	const [width, setWidth] = React.useState(window.innerWidth);
	const [height, setHeight] = React.useState(window.innerHeight);
	const updateWidthAndHeight = () => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	};
	React.useEffect(() => {
		window.addEventListener("resize", updateWidthAndHeight);
		return () => window.removeEventListener("resize", updateWidthAndHeight);
	});
	return (
		<div
			style={{
				backgroundColor: "#DDFDFF",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				backgroundImage: "./bg1.png",
				width: "100%",
				height: "100%"
			}}
		>
			{/* <div className="imagesection"></div> */}
			<div
				style={{
					minHeight: "350px",
					maxHeight: "500px",
					width: "100%",
					height: width - height + 420,
					backgroundColor: "#1A032C",
          border: "4px solid #97D9DE",
					marginTop: "8px"
				}}
				className="weddingbanner1"
			>
				<img
					className="caroimg1"
					style={{
						"@media (max-width: 700px)": {
							display: "none"
						},
						width: "96%",
						height: "95%"
					}}
					src="https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20674.png?alt=media&token=c74e9073-6954-4e64-96a9-e3e5b48b8d167"
				/>
				<img className="caroimg2" src={resimg} />
			</div>
			<div className="aboutContainer">
				<div className="abtussec2">
					<span className="abtus5title">
						{" "}
						<span className="abtus5titlesub"> Why</span> The Design House ?
					</span>


					<div className="sec2box">
						<div className="sec2row">
							<div className="box1">
								{/* <BsArrowsFullscreen color="white" size={40}></BsArrowsFullscreen> */}
								<img src={zoom} />

								<p style={{ fontSize: "20px" }}>
									Have you tried various sizes and still felt uncomfortable?
								</p>
							</div>
							<div className="box1">
								{/* <RiRulerLine color="white" size={40} /> */}
								<img src={scale} />

								<p style={{ fontSize: "20px" }}>
									Do standard measurements bother you?
								</p>
							</div>
						</div>
						<div className="sec2row">
							<div className="box1">
								{/* <HiHand color="white" size={40}></HiHand> */}
								<img src={glove} />

								<p style={{ fontSize: "20px" }}>
									How about something that fits like a glove?
								</p>
							</div>
							<div className="box1">
								{/* <BsEmojiSmile color="white" size={40}></BsEmojiSmile> */}
								<img src={face} />

								<p style={{ fontSize: "20px" }}>
									Would you want to express your persona through your clothing?
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="sec3abtus">
					<div className="lsec3">
						<img
							src={img1}
							alt=""
							style={{ height: "310px", width: "400px" }}
						/>
					</div>
					<div className="rsec3">
						<p style={{ fontSize: "20px", color: "#270641" }}>
							<span style={{ fontWeight: "600", fontSize: "25px" }}>
								Tina Rosario
							</span>{" "}
							and her team have been thinking about it for a while. Machinated
							clothing and broad patterns did not interest them. In fact, they
							believe that proper attire and personality based designs makes an
							individual look elegant, enhances confidence, and allows to
							communicate better.
						</p>
					</div>
				</div>
				<div className="sec4abtus">
					<span style={{ fontSize: "30px" }}>What???s Inside?</span>
					<img
						src={img2}
						alt=""
						style={{ height: "310px", width: "400px", marginBottom: "40px" }}
					/>
					<p style={{ fontSize: "20px", color: "#270641", marginTop: "20px" }}>
						The Design House, your one-stop customized online clothing platform
						is an ideal choice for you to decide and design the attire of your
						dreams. We literally mean it. Identifying the cultural fusion you
						want to blend into, choosing the type of fabric you want to don
						upon, providing specific designs, we guarantee satisfactory
						outcomes.
					</p>
					<p style={{ fontSize: "20px", color: "#270641" }}>
						We also have a list of exquisite patterns modeled in the finest of
						fabrics and available for display in our store. Hop in and check it
						out yourself.
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
						className="abtin3"
						onClick={() => {
							navigate("/imagecons");
						}}
					></div>
					<div
						className="abtin2"
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
						<span className="abtus5titlesub">
							The Pioneer
						</span>{" "}
						behind the label
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
					<p className="CCC" style={{ color: "#270641", fontSize: "2rem" }}>
						Creative | Curious | Committed{" "}
					</p>
					<p style={{ fontSize: "20px", color: "#270641" }}>
						Tina Rosario, an accomplished celebrity stylist and fashion
						designer, is well known for her exquisite works in the film
						industry. She has played a key role in styling made-to-measure
						costumes for numerous movies, TV commercials, and web series.
						Currently, through The Design House she has taken a revolutionary
						attempt to redefine fashion from the customer's point of view.
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
