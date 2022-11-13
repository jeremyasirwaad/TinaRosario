import { AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import React from "react";
import Accordion from "@mui/material/Accordion";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import "./policies.css";
import ana from "./ana.svg";
import payment from "./payment.svg";
import wash from "./wash.svg";
import fabric from "./fabric.svg";
import alter from "./alter.svg";
import returns from "./return.svg";
import esti from "./esti.svg";
import shipping from "./shipping.svg";
import gift from "./gift.svg";

export const Policies = () => {
	const [expand1, setExpand1] = React.useState(false);
	const [expand2, setExpand2] = React.useState(false);
	const [expand3, setExpand3] = React.useState(false);
	const [expand4, setExpand4] = React.useState(false);
	const [expand5, setExpand5] = React.useState(false);
	const [expand6, setExpand6] = React.useState(false);
	const [expand7, setExpand7] = React.useState(false);
	const [expand8, setExpand8] = React.useState(false);
	const [expand9, setExpand9] = React.useState(false);
	const inneraccordionStyle1 = {
		borderRadius: "20px",
		// backgroundColor: expand1 ? "#270641" : "transparent",
		// color: expand1 ? "#FFB8BC" : "#270641",
		backgroundColor: "transparent",
		background: "rgba( 255, 255, 255, 0.1 )",
		boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
		backdropFilter: "blur( 7.5px )",

		borderRadius: "40px",
		border: "1px solid rgba( 255, 255, 255, 0.18 )",
		color: "#270641",
		marginBottom: "20px",
		"&:before": {
			display: "none",
			border: "none"
		},
		width: "90%"
	};

	const accordionDetail = {
		backgroundColor: "transparent",
		// color: "#FFB8BC",
		color: "#270641",
		borderRadius: "20px",
		margin: "0px 20px 20px 20px"
	};

	return (
		<div className="policontainer">
			<h2
				style={{
					marginTop: "60px",
					marginBottom: "40px",
					color: "#270641",
					fontSize: "45px",
					fontWeight: "600"
				}}
			>
				OUR POLICIES
			</h2>
			<Accordion sx={{ display: "none" }} className="outeraccordion">
				<AccordionSummary
					expandIcon={<ControlPointIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				></AccordionSummary>
				<AccordionDetails></AccordionDetails>
			</Accordion>

			<Accordion sx={inneraccordionStyle1} className="accordion">
				<AccordionSummary
					onClick={() => setExpand1(!expand1)}
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}
					expandIcon={<ControlPointIcon sx={{ color: "#270641" }} />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<img
						style={{
							height: "25px",
							marginRight: "10px",
							color: expand1 ? "#FFB8BC" : "#270641"
						}}
						src={ana}
					/>
					<Typography
						sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}
					>
						ANALYTICS / COOKIES
					</Typography>
				</AccordionSummary>
				<AccordionDetails sx={accordionDetail}>
					<Typography sx={{ fontSize: "18px" }}>
						The data collected by us from your side have been used for analytics
						purposes, to improve your interface and experience with us in the
						future and receive a better version of our services each time. For
						this purpose, we use cookies, that is a small file that can be
						placed on your device only with your permission. The acceptance of
						the cookie can be changed in your browser settings. If you do not
						accept a cookie we shall not use any of your information for further
						analytics purposes. Besides, disabling the cookies may limit your
						use of certain features or functions of services.
						<br /> We assure that usage of your data would surely be done
						without any encroachment of your privacy.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion sx={inneraccordionStyle1} className="accordion">
				<AccordionSummary
					onClick={() => setExpand2(!expand2)}
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}
					expandIcon={<ControlPointIcon sx={{ color: "#270641" }} />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<img style={{ height: "25px", marginRight: "10px" }} src={payment} />
					<Typography
						sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}
					>
						PAYMENT
					</Typography>
				</AccordionSummary>
				<AccordionDetails sx={accordionDetail}>
					<Typography sx={{ fontSize: "18px" }}>
						We offer the following payment methods: <br />
						<ul>
							<li>Account transfer</li>
							<li>UPI (Unified Payment Interface)</li>
							<li>Cash (Only @ store)</li>
							<li>Store credit (In case of return)</li>
						</ul>
						50% of the total amount is due at the time of ordering. The
						remaining has to be paid at the time of pickup or before dispatch.
						<br />
						<br /> For electronic payments, we will not be responsible for
						transaction mishaps that occur. However, we will be glad to assist
						with your queries and resolve payment issues.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion sx={inneraccordionStyle1} className="accordion">
				<AccordionSummary
					onClick={() => setExpand6(!expand6)}
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}
					expandIcon={<ControlPointIcon sx={{ color: "#270641" }} />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<img style={{ height: "25px", marginRight: "10px" }} src={returns} />
					<Typography
						sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}
					>
						RETURNS
					</Typography>
				</AccordionSummary>
				<AccordionDetails sx={accordionDetail}>
					<Typography sx={{ fontSize: "18px" }}>
						We do not encourage cancellations or refund requests as our products
						are of premium quality and workmanship. However in special cases,
						you shall request for an exchange via email
						<a href="mailto:design@tinarosario.com"> design@tinarosario.com </a>
						. The exchange request should be made within two (2) days of
						receiving your product. After verification (an unboxing video as
						evidence) exchanges will be processed within a 15 day period. Please
						note, shipping charges should be borne by the customer for
						exchanges. In rare cases, we might
						<b> not honor exchange requests.</b>
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion sx={inneraccordionStyle1} className="accordion">
				<AccordionSummary
					onClick={() => setExpand7(!expand7)}
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}
					expandIcon={<ControlPointIcon sx={{ color: "#270641" }} />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<img style={{ height: "25px", marginRight: "10px" }} src={shipping} />
					<Typography
						sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}
					>
						DELIVERY & SHIPPING{" "}
					</Typography>
				</AccordionSummary>
				<AccordionDetails sx={accordionDetail}>
					<Typography sx={{ fontSize: "18px" }}>
						We, at The Design House, value our customer’s time and attempt to
						deliver the product within the requested date
						<br />
						<br />
						For ready to ship products, we will be able to deliver within the
						following business days:
						<br />
						Domestic: 5 - 7days <br />
						International: 10 - 12 days <br />
						<br />
						For customized orders, it might take a bit longer as mentioned
						below.
						<br />
						Domestic: 10 - 15 days
						<br /> International: 15 - 25 days
						<br />
						<br />
						We cater to pan India and various overseas destinations. Shipping
						charges are to be borne by the customer and may include taxes and
						duties levied by the respective jurisdiction. Shipments and courier
						services are done using reputed companies for a hassle-free delivery
						process. If shipment is delayed, we will notify you immediately via
						email or phone.
						<br />
						<br />
						No extra handling charges will be applicable at the time of
						delivery. Please do not make payments to anyone when your product is
						delivered.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion sx={inneraccordionStyle1} className="accordion">
				<AccordionSummary
					onClick={() => setExpand8(!expand8)}
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}
					expandIcon={<ControlPointIcon sx={{ color: "#270641" }} />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<img style={{ height: "25px", marginRight: "10px" }} src={alter} />
					<Typography
						sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}
					>
						ALTERATION
					</Typography>
				</AccordionSummary>
				<AccordionDetails sx={accordionDetail}>
					<Typography sx={{ fontSize: "18px" }}>
						We, at The Design House strive to complete your customized orders
						with utmost care. Our designer will ensure that the final product
						satisfies the original requirements. Alteration if any should be
						communicated within a day of receiving the outfit. A nominal fee may
						be charged depending on the nature of the alteration. If you are
						unable to bring the outfit, we offer pick-up and delivery for an
						extra charge.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion sx={inneraccordionStyle1} className="accordion">
				<AccordionSummary
					onClick={() => setExpand3(!expand3)}
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}
					expandIcon={<ControlPointIcon sx={{ color: "#270641" }} />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<img style={{ height: "25px", marginRight: "10px" }} src={wash} />
					<Typography
						sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}
					>
						WASHCARE
					</Typography>
				</AccordionSummary>
				<AccordionDetails sx={accordionDetail}>
					<Typography sx={{ fontSize: "18px" }}>
						Our products are mostly designed with the notion of being easy to
						maintain. Clothing tags would indicate if the fabric can be dry
						cleaned or hand washed.
						<br />
						<b>For hand washed fabric: </b>
						<ul>
							<li>Use mild detergent.</li>
							<li>Use cold water</li>
							<li>Wash like colors together (Red and blue tend to run)</li>
							<li>Dry inside out in the shade.</li>
							<li>Airing the clothes after every wash.</li>
							<li>Gentle squeeze</li>
						</ul>
						<b>Kindly avoid</b>
						<ul>
							<li>Machine wash</li>
							<li>Mixing of white with colored clothes</li>
						</ul>
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion sx={inneraccordionStyle1} className="accordion">
				<AccordionSummary
					onClick={() => setExpand4(!expand4)}
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}
					expandIcon={<ControlPointIcon sx={{ color: "#270641" }} />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<img style={{ height: "25px", marginRight: "10px" }} src={fabric} />
					<Typography
						sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}
					>
						FABRIC AND FABRIC COLORS
					</Typography>
				</AccordionSummary>
				<AccordionDetails sx={accordionDetail}>
					<Typography sx={{ fontSize: "18px" }}>
						The photographs and videos are shot by professionals to display
						specifications and nuances of the garment. In reality, the color and
						appearance could vary slightly from what is present on our website.
						<br /> Moderate shrinkage can be expected depending on the type of
						fabric.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion sx={inneraccordionStyle1} className="accordion">
				<AccordionSummary
					onClick={() => setExpand9(!expand9)}
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}
					expandIcon={<ControlPointIcon sx={{ color: "#270641" }} />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<img style={{ height: "25px", marginRight: "10px" }} src={gift} />
					<Typography
						sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}
					>
						GIFT WRAP
					</Typography>
				</AccordionSummary>
				<AccordionDetails sx={accordionDetail}>
					<Typography sx={{ fontSize: "18px" }}>
						We take utmost care to make your loved ones feel special. Gift wrap
						services are available at a nominal charge and can be done
						eco-friendly upon request. Please let us know if the purchase is a
						gift along with your special note. The product is sent along with
						the tags, as they signify a new product and would be helpful for
						future verification.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion sx={{ display: "none" }} className="outeraccordion">
				<AccordionSummary
					expandIcon={<ControlPointIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				></AccordionSummary>
				<AccordionDetails></AccordionDetails>
			</Accordion>
			<div style={{ width: "100%", height: "60px " }}></div>
		</div>
	);
};
