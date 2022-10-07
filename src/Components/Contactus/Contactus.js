import React, { useState, useEffect } from "react";
import { Footer } from "../Footer/Footer";
import "./contact.css";
import { TextField } from "@mui/material";
// import { MuiTelInput } from "mui-tel-input";
import MuiPhoneNumber from "material-ui-phone-number";
import logoforcontact from "./Frame.png";
import indflag from "./Flag_of_India.png";
import usflag from "./2560px-Flag_of_the_United_States.svg.png";
import axios from "axios";

export const Contactus = () => {
	const [contact, setContact] = useState({
		name: "",
		email: "",
		contact: "",
		note: ""
	});
	const [mailSent, setmailSent] = useState(false);

	const sendMessage = async () => {
		const result = await axios
			.post("http://3.84.74.187:8080/mail", {
				from: contact.email,
				to: "design@tinarosario.com",
				subject: `Mail from ${contact.name} - ${contact.email} `,
				text: `Sender's Mail - ${contact.email} \nSender Contact - ${contact.contact} \n\n Note: \n ${contact.note}`
			})
			.then((data) => {
				if (data.status) {
					setmailSent(true);
				}
			});
		// if (result.data.status) {
		// 	setmailSent(true);
		// }
	};
	useEffect(() => {
		if (mailSent == true) {
			setTimeout(() => {
				setmailSent(false);
			}, 5000);
		}
	}, [mailSent]);

	return (
		<div className="contactuspage">
			<div className="contactbanner">
				<div className="contactbannerinner">
					<span className="cuT">
						{" "}
						<span className="cu1">Contact</span> Us
					</span>
					<span className="CuU">To Design your style</span>
				</div>
			</div>
			<div className="bgcontact">
				<div className="mainsection">
					<div className="mainsectionleft">
						<span className="msl1">Get in Touch</span>
						{/* <span className="msl2">Tina Rosario</span> */}
						<img style={{ marginTop: "60px" }} src={logoforcontact} alt="" />
						<span className="msl3">THE DESIGN HOUSE</span>
						<div className="loca">
							<div className="locainner">
								<i class="fa-solid fa-location-pin"></i>
								<span>112a Nehru street Alwar thiru nagar Chennai 600087</span>
							</div>
							<div className="locainner">
								<i class="fa-solid fa-phone"></i>
								<div className="locainner2">
									<div>
										<img src={indflag} alt="" />
										<span>+91 7200060540</span>
									</div>
									<div>
										<img src={usflag} alt="" />
										<span>+1 412-251-1363</span>
									</div>
								</div>
							</div>
							<div className="locainner">
								<i class="fa-regular fa-envelope"></i>
								<span> design@tinarosario.com</span>
							</div>
						</div>
					</div>
					<div className="mainsectionright">
						<div className="mainsecheader">
							<span>Write to Us</span>
						</div>
						<TextField
							label="Name"
							color="primary"
							value={contact.name}
							onChange={(e) => {
								setContact({ ...contact, name: e.target.value });
							}}
						/>
						<TextField
							label="Email"
							color="primary"
							value={contact.email}
							onChange={(e) => {
								setContact({ ...contact, email: e.target.value });
							}}
						></TextField>
						<TextField
							color="primary"
							label="Contact Number"
							value={contact.contact}
							onChange={(e) => {
								setContact({ ...contact, contact: e.target.value });
							}}

							// placeholder="If any"

							// defaultValue="Default Value"
						/>

						<TextField
							color="primary"
							id="outlined-multiline-static"
							label="Custom Note"
							multiline
							rows={5}
							value={contact.note}
							onChange={(e) => {
								setContact({ ...contact, note: e.target.value });
							}}
							// placeholder="If any"

							// defaultValue="Default Value"
						/>
						{mailSent ? (
							<button className="contactsend">Mail Sent successfully</button>
						) : (
							<button className="contactsend" onClick={sendMessage}>
								{mailSent ? <i class="fa-solid fa-check"></i> : " Send Message"}
							</button>
						)}
					</div>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};
