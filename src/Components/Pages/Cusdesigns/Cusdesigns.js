import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import { Navbar } from "../../Navbar/Navbar";
import { Footer } from "../../Footer/Footer";
import "../Wedding.css";
import "../ImageCons/ImageCons.css";
import { TextField } from "@mui/material";
import dayjs from "dayjs";
import validator from "validator";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import FormHelperText from "@mui/material/FormHelperText";

import steps from "./steps.svg";
import smilebar from "./4.png";
import AOS from "aos";
import img1 from "./img1.svg";
import img2 from "./img2.svg";
import img3 from "./img3.svg";
import resimg from "./resimg.png";
import "./cusforms.css";
import { LoadingButton } from "@mui/lab";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import FormData from "form-data";
import { MuiTelInput } from "mui-tel-input";
import video from "./video.svg";

export const Cusdesigns = () => {
	const url = "http://3.88.157.171:8080";
	// const url = "http://localhost:3001";
	const navigate = useNavigate();
	const [agecat1, setagecat1] = useState(false);
	const [agecat2, setagecat2] = useState(false);
	const [agecat3, setagecat3] = useState(false);

	const [isownfab1, setIsownfab1] = useState(false);
	const [isownfab2, setIsownfab2] = useState(false);

	const [owndesign1, setOwndesign1] = useState(false);
	const [owndesign2, setOwndesign2] = useState(false);

	const [value, setValue] = React.useState(dayjs());

	const [imginputloader, setImginputloader] = useState(false);
	const [file, setfile] = useState();
	const [imageerror, setImageerror] = useState(false);

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	const [formData, setformData] = useState({
		gender: "",
		ageCategory: 1,
		typeOfAttire: "",
		fabric: "own",
		name: "",
		email: "",
		contact: "",
		note: "",
		ownDesign: "false"
	});

	const fileonchange = (e) => {
		const files = e.target.files;
		const file = files[0];
		console.log(file.name);
		if (
			file.name.endsWith(".jpeg") ||
			file.name.endsWith(".jpg") ||
			file.name.endsWith(".png")
		) {
			setfile(file);
			setImginputloader(true);
			console.log(file);
		} else {
			setfile();
			toast.error("Only allowed formats - jpeg, jpg, png");
			return false;
		}
	};

	console.log(file);

	const [nameerr, setNameerr] = useState(false);
	const [emailerr, setEmailerr] = useState(false);
	const [contacterr, setContacterr] = useState(false);
	const [gendererr, setGendererr] = useState(false);
	const [typeofattireerr, setTypeofattireerr] = useState(false);

	const handleFormSubmit = async () => {
		if (formData.gender == "") {
			setGendererr(true);
		}

		if (formData.typeOfAttire == "") {
			setTypeofattireerr(true);
		}

		if (formData.name == "") {
			setNameerr(true);
		}

		if (formData.email == "") {
			setEmailerr(true);
		}

		if (formData.contact == "") {
			setContacterr(true);
		}

		// if () {
		//   toast.error("Please fill in mandatory fields");
		// }

		if (
			(agecat1 == false && agecat2 == false && agecat3 == false) ||
			(isownfab1 == false && isownfab2 == false) ||
			(owndesign1 == false && owndesign2 == false)
		) {
			toast.error("Please fill in mandatory fields");
		}

		if (!validator.isEmail(formData.email)) {
			setEmailerr(true);
		}

		if (formData.ownDesign == "true") {
			if (file === undefined || file == null) {
				toast.error("Upload Design");
				return 0;
			}
		}

		if (
			formData.name == "" ||
			formData.email == "" ||
			formData.contact == "" ||
			formData.gender == "" ||
			formData.typeOfAttire == "" ||
			!validator.isEmail(formData.email) ||
			(isownfab1 == false && isownfab2 == false) ||
			(owndesign1 == false && owndesign2 == false) ||
			(agecat1 == false && agecat2 == false && agecat3 == false)
		) {
			return 0;
		}

		const data = await axios.post(`${url}/formData`, {
			category: "customized design",
			...formData
		});
		console.log(data);
		if (data) {
			if (data.data.ownDesign == "true") {
				const postImage = async () => {
					let formData = new FormData();
					let blob = file.slice(0, file.size, "image/png");
					let newFile = new File([blob], "name.png", { type: "image/png" });
					console.log(newFile);
					formData.set("file", newFile);
					try {
						const result = await axios.post(
							`${url}/formData/photo/${data.data._id}`,
							formData,
							{
								headers: {
									"content-type": "multipart/form-data"
								}
							}
						);
						if (result) {
							console.log(result.data);
							navigate(`/orderfinish/customized/${data.data.name}/d/m/y`);
						}
					} catch (error) {
						console.log("error in posting image", error);
					}
				};
				postImage();
			}
			navigate(`/orderfinish/customized/${data.data.name}/d/m/y`);
		}
	};

	window.addEventListener("load", () => {
		setfile();
	});

	console.log(formData);
	const [contact, setcontact] = React.useState("+91");

	const handleContact = (newValue) => {
		if (newValue.length > 4) {
			setContacterr(false);
		}
		setcontact(newValue);
		setformData({ ...formData, contact: newValue });
	};
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
				display: "flex",
				flexDirection: "column",
				alignItems: "center"

				// backgroundColor: "black"
			}}
		>
			<div
				style={{
					minHeight: "250px",
					maxHeight: "550px",
					width: "100%",
					height: width - height + 120
				}}
				className="weddingbanner"
			>
				<img
					className="caroimg1"
					style={{
						"@media (max-width: 700px)": {
							display: "none"
						},
						width: "97%",
						height: "96%"
					}}
					src="https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/header.png?alt=media&token=6f9cb77f-ed1f-4c1b-ac49-1401cf530e29"
				/>
				<img className="caroimg2" src={resimg} />
			</div>

			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					width: "100%"
				}}
				className="weddingbg"
			>
				<div style={{ marginTop: "10px" }} className="icons">
					<div className="icon-holder">
						<img src={img1} />
						<span>Bored of repeating trends?</span>
					</div>
					<div className="icon-holder">
						<img src={img2} />
						<span>Struggling to find a perfect fit?</span>
					</div>
					<div className="icon-holder">
						<img src={img3} />
						<span>Trouble finding elegant, eco-friendly fabric?</span>
					</div>
				</div>
				<div className="img-row1">
					<img
						style={{ height: "400px" }}
						src={
							"https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20706.png?alt=media&token=f531cd3b-455f-491d-975a-035ffa6fec61"
						}
					/>
					<p
						style={{
							marginRight: "60px",
							alignContent: "flex-end",
							textAlign: "center"
						}}
					>
						We believe each individual’s notion of style is different. Often
						deciding the right platform can satiate all your needs. Choose THE
						DESIGN HOUSE to discover it.
					</p>
				</div>

				<div className="steps">
					<img style={{ zIndex: "100" }} src={steps} />
					<div style={{ marginBottom: "150px", marginTop: "20px" }}>
						<a
							style={{ marginTop: "30px" }}
							href="https://drive.google.com/drive/folders/11rt0ZtpV2LcEn1QNiMfsmyKbYriKuXma?usp=sharing"
							target="_blank"
						>
							<img
								style={{
									marginLeft: "-20px",

									zIndex: "100"
								}}
								src={video}
							/>
						</a>
					</div>
				</div>
				<div style={{ marginTop: "70px" }} className="steps smile">
					<img src={smilebar} />
				</div>
				<div style={{ marginTop: "-20px" }} className="weddingforms imageform">
					<span className="weddingt2">To discuss further...</span>
					<TextField
						error={gendererr}
						className="image-textfield"
						id="outlined-basic"
						label="Who are we styling for ? *"
						variant="outlined"
						sx={{
							"@media (max-width: 700px)": {
								width: "90%"
							},
							width: "500px",
							marginTop: "30px"
						}}
						placeholder={"Enter your Gender"}
						value={formData.gender}
						onChange={(e) => {
							if (e.target.value != "") {
								setGendererr(false);
							}
							setformData({ ...formData, gender: e.target.value });
						}}
					/>
					<div className="optionsdiv">
						<span className="optionstitle">Age Category *</span>
						<div className="optionsbtndiv">
							<button
								className={
									agecat1 ? "optionsbtn optionsbtnselected" : "optionsbtn"
								}
								onClick={() => {
									setagecat2(false);
									setagecat3(false);
									setagecat1(true);
									setformData({ ...formData, ageCategory: 1 });
								}}
							>
								Below 10
							</button>
							<button
								className={
									agecat2 ? "optionsbtn optionsbtnselected" : "optionsbtn"
								}
								style={{ marginLeft: "15px" }}
								onClick={() => {
									setagecat2(true);
									setagecat3(false);
									setagecat1(false);
									setformData({ ...formData, ageCategory: 2 });
								}}
							>
								11 - 20
							</button>
							<button
								className={
									agecat3 ? "optionsbtn optionsbtnselected" : "optionsbtn"
								}
								style={{ marginLeft: "15px" }}
								onClick={() => {
									setagecat2(false);
									setagecat3(true);
									setagecat1(false);
									setformData({ ...formData, ageCategory: 3 });
								}}
							>
								Above 20
							</button>
						</div>
					</div>
					<TextField
						error={typeofattireerr}
						className="image-textfield"
						id="outlined-basic"
						label="What kind of attire you want customized ? *"
						variant="outlined"
						sx={{
							"@media (max-width: 700px)": {
								width: "90%"
							},
							width: "500px",
							marginTop: "30px"
						}}
						placeholder={"Eg: Suit, Lehenga, Gown"}
						value={formData.typeOfAttire}
						onChange={(e) => {
							if (e.target.value != "") {
								setTypeofattireerr(false);
							}
							setformData({ ...formData, typeOfAttire: e.target.value });
						}}
					/>
					<div className="optionsdiv">
						<span className="optionstitle">Do you have your own fabric? *</span>
						<div className="optionsbtndiv">
							<button
								className={
									isownfab1 ? "optionsbtn optionsbtnselected" : "optionsbtn"
								}
								onClick={() => {
									setIsownfab1(true);
									setIsownfab2(false);
									setformData({ ...formData, fabric: "own" });
								}}
							>
								Yes
							</button>
							<button
								className={
									!isownfab2 ? "optionsbtn" : "optionsbtn optionsbtnselected"
								}
								onClick={() => {
									setIsownfab2(true);
									setIsownfab1(false);
									setformData({ ...formData, fabric: "provide some options" });
								}}
								style={{ marginLeft: "15px" }}
							>
								Provide some options
							</button>
						</div>
					</div>
					<div className="optionsdiv">
						<span className="optionstitle">Do you have your own design? *</span>
						<div className="optionsbtndiv">
							<button
								className={
									owndesign1 ? "optionsbtn optionsbtnselected" : "optionsbtn"
								}
								onClick={() => {
									setOwndesign1(true);
									setOwndesign2(false);
									setfile();
									setformData({ ...formData, ownDesign: "true" });
								}}
							>
								Yes
							</button>
							<button
								className={
									!owndesign2 ? "optionsbtn" : "optionsbtn optionsbtnselected"
								}
								onClick={() => {
									setOwndesign2(true);
									setOwndesign1(false);

									setImginputloader(false);
									setformData({ ...formData, ownDesign: "false" });
								}}
								style={{ marginLeft: "15px" }}
							>
								Discuss design options
							</button>
						</div>
						<LoadingButton
							// loading={imginputloader}
							style={{ marginTop: "15px" }}
							className={
								owndesign1 ? "optionsbtn optionsbtnselected" : "optionsbtn"
							}
							onClick={() => {
								setOwndesign1(true);
								setOwndesign2(false);
							}}
							variant="outlined"
							component="label"
							color={imageerror ? "error" : "primary"}
						>
							{owndesign1 ? (
								file ? (
									<i style={{ color: "black" }} class="fa-solid fa-check"></i>
								) : (
									"Upload Design"
								)
							) : (
								"Upload Design"
							)}

							<input
								hidden
								accept="image/png,image/jpeg"
								multiple
								type="file"
								onChange={(e) => {
									setImageerror(false);
									fileonchange(e);
								}}
							/>
						</LoadingButton>
						{/* <button
              style={{ marginTop: "15px" }}
              className={owndesign ? "optionsbtn optionsbtnselected" : "optionsbtn"}
              onClick={() => {
                setOwndesign(true);
              }}
            >
              Upload your design
            </button> */}
					</div>
					{/* <FormHelperText>Eg: Suit, Lehenga, Gown</FormHelperText> */}
					<TextField
						error={nameerr}
						className="image-textfield"
						id="outlined-basic"
						label="Name *"
						variant="outlined"
						sx={{
							"@media (max-width: 700px)": {
								width: "90%"
							},
							width: "500px",
							marginTop: "30px"
						}}
						value={formData.name}
						onChange={(e) => {
							if (e.target.value != "") {
								setNameerr(false);
							}
							setformData({ ...formData, name: e.target.value });
						}}
					/>
					<TextField
						error={emailerr}
						className="image-textfield"
						id="outlined-basic"
						label="Email *"
						variant="outlined"
						sx={{
							"@media (max-width: 700px)": {
								width: "90%"
							},
							width: "500px",
							marginTop: "30px"
						}}
						value={formData.email}
						onChange={(e) => {
							if (e.target.value != "") {
								setEmailerr(false);
							}

							setformData({ ...formData, email: e.target.value });
						}}
					/>
					{/* <TextField
            error={contacterr}
            className="image-textfield datewidth"
            id="outlined-basic"
            label="Contact"
            variant="outlined"
            style={{ marginTop: "30px" }}
            value={formData.contact}
            onChange={(e) => {
              if (e.target.value != "") {
                setContacterr(false);
              }
              setformData({ ...formData, contact: e.target.value });
            }}
          /> */}
					<MuiTelInput
						label="Contact *"
						error={contacterr}
						sx={{
							"@media (max-width: 700px)": {
								width: "90%"
							},
							width: "500px",
							marginTop: "30px"
						}}
						value={contact}
						variant="outlined"
						onChange={handleContact}
					/>
					<TextField
						className="image-textfield datewidth"
						id="outlined-basic"
						label="Your note..."
						variant="outlined"
						style={{ marginTop: "30px" }}
						value={formData.note}
						onChange={(e) => setformData({ ...formData, note: e.target.value })}
					/>

					{/* <LocalizationProvider
						dateAdapter={AdapterDayjs}
						className="datewidth"
					>
						<Stack spacing={3} className="datewidth">
							<MobileDatePicker
								className="image-textfield datewidth"
								label="Appointment Date"
								inputFormat="MM/DD/YYYY"
								value={value}
								onChange={handleChange}
								renderInput={(params) => <TextField {...params} />}
								disablePast
							/>
						</Stack>
					</LocalizationProvider> */}
					<p>* Mandatory Fields</p>
					<button
						style={{ cursor: "pointer" }}
						className="weddingbookbtn"
						onClick={handleFormSubmit}
					>
						Book
					</button>
				</div>
			</div>
			<Toaster />
		</div>
	);
};
