import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";

import "./Wedding.css";
import { TextField } from "@mui/material";
import dayjs from "dayjs";
import validator from "validator";
import Stack from "@mui/material/Stack";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import resimg from "./Group 786.png";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import wed1 from "./wedd1.svg";
import wed2 from "./wed2.svg";
import wed3 from "./wed3.svg";
import AOS from "aos";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { MuiTelInput } from "mui-tel-input";

export const Wedding = () => {
	const url = "https://tinarosario.com/route";
	// const url = "http://localhost:3001";
	const navigate = useNavigate();

	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true
		});
	}, []);

	const days = dayjs();

	const [dday, setdday] = React.useState(days.format("MM/DD/YYYY"));
	const [appointDate, setappointDate] = React.useState(
		days.format("MM/DD/YYYY")
	);

	const selectdday = (newLocale) => {
		setdday(newLocale);
		setformData({ ...formData, dday: dayjs(newLocale).format("DD/MM/YYYY") });
	};

	const selectappoint = (newLocale) => {
		setappointDate(newLocale);
		setformData({
			...formData,
			appointDate: dayjs(newLocale).format("DD/MM/YYYY")
		});
	};

	const [formData, setformData] = useState({
		name: "",
		email: "",
		dday: dday,
		note: "",
		appointDate: appointDate,
		contact: "",
		ownDesign: "false"
	});

	const [nameerr, setNameerr] = useState(false);
	const [emailerr, setEmailerr] = useState(false);
	const [contacterr, setContacterr] = useState(false);

	const handleFormSubmit = async () => {
		if (formData.name == "") {
			setNameerr(true);
		}

		if (formData.email == "") {
			setEmailerr(true);
		}
		if (formData.contact == "") {
			setContacterr(true);
		}

		if (!validator.isEmail(formData.email)) {
			setEmailerr(true);
		}

		if (
			formData.name == "" ||
			formData.email == "" ||
			formData.contact == "" ||
			!validator.isEmail(formData.email)
		) {
			return 0;
		}

		const data = await axios.post(`${url}/formData`, {
			category: "wedding collection",
			...formData
		});
		if (data) {
			navigate(
				`/orderfinish/wedding/${data.data.name}/${data.data.appointDate}`
			);
			toast.success("Thank you! Your response if saved with us!");
			console.log(data);
		}
	};

	const [value, setValue] = React.useState("+91");

	const handleChange = (newValue) => {
		if (newValue.length > 4) {
			setContacterr(false);
		}
		setValue(newValue);
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

	let date = new Date();
	function disableWeekends(params) {
		console.log(params);
		return params.getDay() === 0 || params.getDay() === 6;
	}

	function disableRandomDates() {
		return Math.random() > 0.7;
	}

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				width: "100%",
				backgroundColor: "black"
			}}
		>
			<Toaster />

			<div
				style={{
					minHeight: "350px",
					maxHeight: "700px",
					width: "100%",
					height: width - height + 420
				}}
				className="weddingbanner"
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
					src="https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/weddingbg.png?alt=media&token=d13637f2-e687-4904-8d47-3271c0bf1109"
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
				<div className="wedsec1" style={{ marginTop: "70px" }}>
					<div className="wedsec1img">
						<img src={wed1} alt="" />
					</div>

					<div className="wedsec1cont" style={{ fontSize: "20px" }}>
						We understand wedding chores could overwhelm you.
						<br /> Here we are to take off your burden of how you're going to
						look.
					</div>
				</div>
				<div className="wedsec2">
					<div className="wedsec1img">
						<img style={{ height: "350px" }} src={wed2} alt="" />
					</div>

					<div className="wedsec2cont" style={{ fontSize: "20px" }}>
						Get in touch and allow us to unfold
						<br /> your dream attire.
					</div>
				</div>
				<div className="wedsec1">
					<div className="wedsec1img">
						<img src={wed3} alt="" />
					</div>

					<div className="wedsec1cont" style={{ fontSize: "20px" }}>
						A few ounces of personal attention along with some love and care. We
						assure you a perfect attire that'll be spoken about, forever.
					</div>
				</div>
				<div className="weddingforms">
					<span className="weddingt2" style={{ fontSize: "30px" }}>
						To discuss further...
					</span>
					<TextField
						fluid
						id="outlined-basic"
						label="Name *"
						value={formData.name}
						error={nameerr}
						onChange={(e) => {
							if (e.target.value != "") {
								setNameerr(false);
							}
							setformData({ ...formData, name: e.target.value });
						}}
						variant="outlined"
						sx={{
							"@media (max-width: 700px)": {
								width: "90%"
							},
							width: "500px",
							marginTop: "30px"
						}}
					/>
					<TextField
						id="outlined-basic"
						label="Email *"
						error={emailerr}
						value={formData.email}
						onChange={(e) => {
							if (e.target.value != "") {
								setEmailerr(false);
							}

							setformData({ ...formData, email: e.target.value });
						}}
						variant="outlined"
						sx={{
							"@media (max-width: 700px)": {
								width: "90%"
							},
							width: "500px",
							marginTop: "30px"
						}}
					/>

					<MuiTelInput
						error={contacterr}
						label="Contact *"
						sx={{
							"@media (max-width: 700px)": {
								width: "90%"
							},
							width: "500px",
							marginTop: "30px"
						}}
						value={value}
						variant="outlined"
						onChange={handleChange}
					/>
					<LocalizationProvider
						dateAdapter={AdapterDayjs}
						className="datewidth"
					>
						<Stack spacing={3} className="datewidth">
							<MobileDatePicker
								label="When is the big day *?"
								inputFormat="DD/MM/YYYY"
								value={dday}
								onChange={selectdday}
								renderInput={(params) => <TextField {...params} />}
								className="datewidth"
								disablePast
							/>
						</Stack>
					</LocalizationProvider>
					<TextField
						id="outlined-basic"
						label="Your note...	"
						variant="outlined"
						className="datewidth"
						value={formData.note}
						onChange={(e) => setformData({ ...formData, note: e.target.value })}
						sx={{
							"@media (max-width: 700px)": {
								width: "90%"
							},
							width: "500px",
							marginTop: "30px"
						}}
					/>
					<LocalizationProvider
						dateAdapter={AdapterDayjs}
						className="datewidth"
					>
						<Stack spacing={3} className="datewidth">
							<MobileDatePicker
								label="Appointment Date *"
								inputFormat="DD/MM/YYYY"
								value={appointDate}
								maxDate={dayjs().add(2, "months")}
								onChange={selectappoint}
								renderInput={(params) => <TextField {...params} />}
								className="datewidth"
								disablePast
							/>
						</Stack>
					</LocalizationProvider>
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
		</div>
	);
};
