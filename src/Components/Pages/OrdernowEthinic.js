import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { TextField, Button } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate } from "react-router-dom";
import validator from "validator";

import "./ordernow.css";
export const OrdernowEthinic = () => {
	const navigate = useNavigate();
	const [imginputloader, setImginputloader] = useState(false);
	const [stepper, setStepper] = useState(0);
	const { type } = useParams();
	const [imageBase64, setImageBase64] = useState("");

	const [stylingfor, setStylingfor] = useState("");
	const [Fabric, setFabric] = useState("");
	const [clothing, setClothing] = useState("");
	const [customnote, setcustomnote] = useState("");

	const [errorstylingofr, setErrorstylingofr] = useState(false);
	const [errorfabric, seterrorFabric] = useState(false);
	const [errorclothing, seterrorclothing] = useState(false);
	const [imageerror, setImageerror] = useState(false);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [contactno, setContactno] = useState("");

	const [errorname, seterrorName] = useState(false);
	const [erroremail, seterrorEmail] = useState(false);
	const [errorcontact, seterrorContact] = useState(false);

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

		if (imageBase64 == "") {
			setImageerror(true);
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
		const sendreq = await fetch("http://184.72.184.140:8080/formdata", {
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
				category: "Ethnic",
				image: imageBase64
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

	const fileonchange = (e) => {
		// setImginputloader(true);
		const files = e.target.files;
		const file = files[0];
		console.log(file);

		getBase64(file);
	};

	const onload = (fileString) => {
		setImageBase64(fileString);
		setImginputloader(true);
		// console.log(imageBase64);
		// console.log(fileString);
	};

	const getBase64 = (file) => {
		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => {
			onload(reader.result);
		};
	};

	return (
		<div>
			<div className="ordernowcontainer">
				<span className="wdorheading">Ethnic Collections</span>
				{stepper == 0 ? (
					<div className="ordernowcontainer">
						<span className="wdorh2">Customisation</span>
						<div
							style={{
								display: "flex"
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
										onChange={(e) => {
											setErrorstylingofr(false);
											setStylingfor(e.target.value);
										}}
										label="Gender"
										color="primary"
										value={stylingfor}
										error={errorstylingofr}
									/>
									<FormHelperText>Eg: Male, Female</FormHelperText>
								</div>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										marginBottom: "30px"
									}}
								>
									<TextField
										onChange={(e) => {
											if (e.target.value != "") {
												seterrorclothing(false);
											}
											setClothing(e.target.value);
										}}
										label="Clothing choice ?"
										color="primary"
										value={clothing}
										error={errorclothing}
									/>
									<FormHelperText>Eg: Kurta, Salwar, Anarkali</FormHelperText>
								</div>
								<LoadingButton
									// loading={imginputloader}
									style={{
										// backgroundColor: "rgb(82, 0, 57)",
										fontSize: "12px"
									}}
									variant="outlined"
									component="label"
									color={imageerror ? "error" : "primary"}
								>
									{imginputloader ? (
										<i style={{ color: "blue" }} class="fa-solid fa-check"></i>
									) : (
										"Upload Design"
									)}

									<input
										hidden
										accept="image/*"
										multiple
										type="file"
										onChange={(e) => {
											setImageerror(false);
											fileonchange(e);
										}}
									/>
								</LoadingButton>
								<FormHelperText>Size {"<"} 2mb, .jpg .png .jpeg</FormHelperText>
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
										label="Fabric"
										color="primary"
										value={Fabric}
										error={errorfabric}
										onChange={(e) => {
											if (e.target.value != "") {
												seterrorFabric(false);
											}
											setFabric(e.target.value);
										}}
									/>
									<FormHelperText>Eg: Cotton, Linen, Silk</FormHelperText>
								</div>
								<TextField
									color="primary"
									id="outlined-multiline-static"
									label="Custom Note"
									multiline
									rows={5}
									placeholder="If any"
									value={customnote}
									onChange={(e) => {
										setcustomnote(e.target.value);
									}}

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
										label="Name"
										color="primary"
										value={name}
										error={errorname}
										onChange={(e) => {
											if (e.target.value != "") {
												seterrorName(false);
											}
											setName(e.target.value);
										}}
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
										label="Email"
										color="primary"
										error={erroremail}
										value={email}
										onChange={(e) => {
											if (e.target.value != "") {
												seterrorEmail(false);
											}
											setEmail(e.target.value);
										}}
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
										label="Contact"
										color="primary"
										value={contactno}
										error={errorcontact}
										onChange={(e) => {
											if (e.target.value != "") {
												seterrorContact(false);
											}
											setContactno(e.target.value);
										}}
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
