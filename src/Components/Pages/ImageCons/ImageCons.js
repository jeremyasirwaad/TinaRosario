import React from "react";
import back from "./back.svg";
import "./ImageCons.css";
import img1 from "./img1.svg";
import img2 from "./img2.svg";
import img3 from "./img3.svg";
import steps from "./steps.svg";
import smilebar from "./smilebar.svg";
import { TextField } from "@mui/material";
import dayjs from "dayjs";
import { MobileDatePicker } from "@mui/x-date-pickers";
import { Stack } from "@mui/system";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const ImageCons = () => {
	const [value, setValue] = React.useState(dayjs());

	const handleChange = (newValue) => {
		setValue(newValue);
	};
	return (
		<div className="imagecons">
			<div className="topbar">
				<div className="background">
					<span className="wb1">Image Consulting</span>
					<span className="wb2">"Pride in the new look"</span>
				</div>
			</div>
			<div className="weddingbg">
				<div className="icons">
					<div className="icon-holder">
						<img src={img1} />
						<span>Confused what looks good on you?</span>
					</div>
					<div className="icon-holder">
						<img src={img2} />
						<span>Unsure which dress suits your personality?</span>
					</div>
					<div className="icon-holder">
						<img src={img3} />
						<span>Trouble identifying the right color choices?</span>
					</div>
				</div>
				<div className="img-row">
					<img src={back} />
					<p>
						While we hold In-depth conversations to understand you better.
						<br /> It is important we Fashion is mostly an individual choice.
						Uncover your aspirations in THE DESIGN HOUSE.
					</p>
				</div>

				<div className="steps">
					<img src={steps} />
				</div>
				<div className="steps">
					<img src={smilebar} />
				</div>
				<div style={{}} className="weddingforms imageform">
					<span className="weddingt2">To discuss further, provide your </span>
					<TextField
						className="image-textfield"
						id="outlined-basic"
						label="Name"
						variant="outlined"
						style={{ width: "500px", marginTop: "30px" }}
					/>
					<TextField
						className="image-textfield"
						id="outlined-basic"
						label="Email"
						variant="outlined"
						style={{ width: "500px", marginTop: "30px" }}
					/>
					<TextField
						className="image-textfield datewidth"
						id="outlined-basic"
						label="Any special note	"
						variant="outlined"
						style={{ marginTop: "30px" }}
					/>

					<LocalizationProvider
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
					</LocalizationProvider>
					<button style={{ marginBottom: "50px" }} className="weddingbookbtn">
						Book
					</button>
				</div>
			</div>
		</div>
	);
};

export default ImageCons;
