import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import "./Wedding.css";
import { TextField } from "@mui/material";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

import img1 from "./Group 36 (1).svg";
import AOS from "aos";
export const Wedding = () => {
	const navigate = useNavigate();

	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true
		});
	}, []);

	const [value, setValue] = React.useState(dayjs());

	const handleChange = (newValue) => {
		setValue(newValue);
	};
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center"
				// backgroundColor: "black"
			}}
		>
			<div className="weddingbanner">
				<div className="weddingbannerinner">
					<span className="wb1">Wedding Collections</span>
					<span className="wb2">
						As you hold hands and shine together and promise to live as one
						forever, you need to look your best as you've always dreamt.
					</span>
				</div>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center"
				}}
				className="weddingbg"
			>
				<div className="wedsec1" style={{ marginTop: "100px" }}>
					<div className="wedsec1img">
						<img src={img1} alt="" />
					</div>

					<div className="wedsec1cont">
						<span>
							We understand wedding chores could overwhelm you, Here we are to
							take off your burden of how you're going to look.
						</span>
						<span style={{ marginTop: "10px" }}>
							Here we are to take off your burden of how you're going to look.
						</span>
					</div>
				</div>
				<div className="wedsec2">
					<div className="wedsec1img">
						<img src={img1} alt="" />
					</div>

					<div className="wedsec2cont">
						<span>Get in touch and allow us to unfold</span>
						<span>your dream attire</span>
					</div>
				</div>
				<div className="wedsec1" style={{ marginTop: "80px" }}>
					<div className="wedsec1img">
						<img src={img1} alt="" />
					</div>

					<div className="wedsec1cont">
						<span>
							A few ounces of personal attention along with some love and care.
						</span>
						<span style={{ marginTop: "10px" }}>
							We assure you a perfect attire that'll be spoken about, forever.
						</span>
					</div>
				</div>
				<div className="weddingforms">
					<span className="weddingt2">To discuss further, provide your </span>
					<TextField
						id="outlined-basic"
						label="Name"
						variant="outlined"
						style={{ width: "500px", marginTop: "30px" }}
					/>
					<TextField
						id="outlined-basic"
						label="Email"
						variant="outlined"
						style={{ width: "500px", marginTop: "30px" }}
					/>
					<LocalizationProvider
						dateAdapter={AdapterDayjs}
						className="datewidth"
					>
						<Stack spacing={3} className="datewidth">
							<MobileDatePicker
								label="When is the big day ?"
								inputFormat="MM/DD/YYYY"
								value={value}
								onChange={handleChange}
								renderInput={(params) => <TextField {...params} />}
								className="datewidth"
								disablePast
							/>
						</Stack>
					</LocalizationProvider>
					<TextField
						id="outlined-basic"
						label="Any special note	"
						variant="outlined"
						className="datewidth"
						style={{ marginTop: "30px" }}
					/>
					<LocalizationProvider
						dateAdapter={AdapterDayjs}
						className="datewidth"
					>
						<Stack spacing={3} className="datewidth">
							<MobileDatePicker
								label="Appointment Date"
								inputFormat="MM/DD/YYYY"
								value={value}
								onChange={handleChange}
								renderInput={(params) => <TextField {...params} />}
								className="datewidth"
								disablePast
							/>
						</Stack>
					</LocalizationProvider>
					<button className="weddingbookbtn">Book</button>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};
