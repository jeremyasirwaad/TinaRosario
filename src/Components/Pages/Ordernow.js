import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { TextField } from "@mui/material";
import { Navigate } from "react-router-dom";
import validator from "validator";
import FormHelperText from "@mui/material/FormHelperText";
import "./ordernow.css";
export const Ordernow = () => {
	const [stepper, setStepper] = useState(0);
	const { type } = useParams();
	const [stylingfor, setStylingfor] = useState("");
	const [Fabric, setFabric] = useState("");
	const [clothing, setClothing] = useState("");
	const [customnote, setcustomnote] = useState("");

	const [errorstylingofr, setErrorstylingofr] = useState(false);
	const [errorfabric, seterrorFabric] = useState(false);
	const [errorclothing, seterrorclothing] = useState(false);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [contactno, setContactno] = useState("");

	const [errorname, seterrorName] = useState(false);
	const [erroremail, seterrorEmail] = useState(false);
	const [errorcontact, seterrorContact] = useState(false);

	const navigate = useNavigate();

	const firstsubhandler = () => {
		if (stylingfor == "") {
			setErrorstylingofr(true);
		}
		if (Fabric == "") {
			seterrorFabric(true);
		}
		if (clothing == "") {
			seterrorclothing(true);
		}
		if (stylingfor == "" || Fabric == "" || clothing == "") {
			return;
		}

		setStepper(1);
	};

	const secondhandler = () => {
		if (name == "") {
			seterrorName(true);
		}
		if (email == "") {
			seterrorEmail(true);
		}

		if (!validator.isEmail(email)) {
			seterrorEmail(true);
		}
		if (contactno == "") {
			seterrorContact(true);
		}

		if (
			name == "" ||
			email == "" ||
			contactno == "" ||
			!validator.isEmail(email)
		) {
			return;
		} else {
			placeorder();
		}
	};

	const placeorder = async () => {
		const sendreq = await fetch("http://localhost:8080/formdata", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				gender: stylingfor,
				fabric: Fabric,
				clothingChoice: clothing,
				note: customnote,
				name: name,
				email: email,
				contact: contactno,
				category: "Wedding",
				image: "noimgforwedding"
			})
		})
			.then((body) => body.json())
			.then((res) => {
				console.log(res);
				if (res.status == true) {
					navigate("/ordernow/success/" + res.id);
					// alert("Request has been noted");
					// console.log(res);
				} else {
					// alert("internal Error");
				}
			});
	};

	return (
		<div>
			<div className="ordernowcontainer">
				<span className="wdorheading">Wedding Collections</span>
				{stepper == 0 ? (
					<div className="ordernowcontainer">
						<span className="wdorh2">Customisation</span>
						<div
							style={{
								// width: "500px",
								display: "flex"
								// justifyContent: "space-between"
							}}
						>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									marginRight: "20px"
								}}
							>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										marginBottom: "20px"
									}}
								>
									<TextField
										error={errorstylingofr}
										onChange={(e) => {
											setErrorstylingofr(false);
											setStylingfor(e.target.value);
										}}
										value={stylingfor}
										label="styling for ?"
										color="primary"
									/>
									<FormHelperText>Eg: Bride, Groom</FormHelperText>
								</div>
								<div style={{ display: "flex", flexDirection: "column" }}>
									<TextField
										error={errorclothing}
										onChange={(e) => {
											if (e.target.value != "") {
												seterrorclothing(false);
											}
											setClothing(e.target.value);
										}}
										value={clothing}
										label="Clothing choice ?"
										color="primary"
									/>
									<FormHelperText>Eg: Lehanga, Saree, Dothi</FormHelperText>
								</div>
							</div>
							<div style={{ display: "flex", flexDirection: "column" }}>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										marginBottom: "20px"
									}}
								>
									<TextField
										value={Fabric}
										error={errorfabric}
										onChange={(e) => {
											if (e.target.value != "") {
												seterrorFabric(false);
											}
											setFabric(e.target.value);
										}}
										label="Fabric"
										color="primary"
									/>
									<FormHelperText>Eg: Silk, Satin, Linen</FormHelperText>
								</div>
								<TextField
									value={customnote}
									onChange={(e) => {
										setcustomnote(e.target.value);
									}}
									color="primary"
									id="outlined-multiline-static"
									label="Custom Note"
									multiline
									rows={4}
									placeholder="If any"
									// defaultValue="Default Value"
								/>
							</div>
						</div>
						<div
							className="wdsubbt"
							onClick={() => {
								firstsubhandler();
							}}
						>
							<span>Next</span>
							<i class="fa-solid fa-arrow-right"></i>
						</div>
					</div>
				) : (
					<div className="ordernowcontainer">
						<span className="wdorh2">Contact Info</span>
						<div
							style={{
								width: "350px",
								display: "flex",
								// alignItems: "center"
								justifyContent: "center"
								// justifyContent: "space-between"
							}}
						>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									width: "100%"
								}}
							>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										marginBottom: "20px",
										width: "100%"
									}}
								>
									<TextField
										value={name}
										error={errorname}
										onChange={(e) => {
											if (e.target.value != "") {
												seterrorName(false);
											}
											setName(e.target.value);
										}}
										label="Name"
										color="primary"
									/>
								</div>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										marginBottom: "20px"
									}}
								>
									<TextField
										error={erroremail}
										value={email}
										onChange={(e) => {
											if (e.target.value != "") {
												seterrorEmail(false);
											}
											setEmail(e.target.value);
										}}
										label="Email"
										color="primary"
									/>
								</div>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										marginBottom: "20px"
									}}
								>
									<TextField
										value={contactno}
										error={errorcontact}
										onChange={(e) => {
											if (e.target.value != "") {
												seterrorContact(false);
											}
											setContactno(e.target.value);
										}}
										label="Contact"
										color="primary"
									/>
								</div>
							</div>
						</div>

						<div
							style={{
								display: "flex",
								width: "410px",
								justifyContent: "space-between"
							}}
						>
							<div
								className="wdsubbt"
								onClick={() => {
									setStepper(0);
								}}
							>
								<i
									class="fa-solid fa-arrow-left"
									style={{ marginRight: "10px" }}
								></i>
								<span>Back</span>
							</div>
							<div
								className="wdsubbt"
								onClick={() => {
									secondhandler();
								}}
							>
								<span>Place Order</span>
								<i class="fa-solid fa-arrow-right"></i>
							</div>
						</div>
					</div>
				)}
			</div>
			<Footer></Footer>
		</div>
	);
};
