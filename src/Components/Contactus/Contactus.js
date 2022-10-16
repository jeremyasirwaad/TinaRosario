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
import toast, { Toaster } from "react-hot-toast";
import validator from "validator";

export const Contactus = () => {
	const notify = () => toast.success("Message sent successfully");
	const notify1 = () =>
		toast("Message sent already", {
			icon: "👍"
		});

	const [contact, setContact] = useState({
		name: "",
		email: "",
		contact: "",
		note: ""
	});
	const [mailSent, setmailSent] = useState(false);

	const [nameerror, setnameerror] = useState(false);
	const [emailerror, setemailerror] = useState(false);
	const [contacterror, setContacterror] = useState(false);

	const sendMessage = async () => {
		if (contact.name == "") {
			setnameerror(true);
		}
		if (contact.email == "") {
			setemailerror(true);
		}
		if (contact.contact == "") {
			setContacterror(true);
		}
		if (!validator.isEmail(contact.email)) {
			setemailerror(true);
		}
		if (
			contact.name == "" ||
			contact.email == "" ||
			contact.contact == "" ||
			!validator.isEmail(contact.email)
		) {
			return;
		}

		const result = await axios
			.post("http://localhost:8080/mail", {
				from: contact.email,
				to: "design@tinarosario.com",
				subject: `Mail from ${contact.name} - ${contact.email} `,
				text: `Sender's Mail - ${contact.email} \nSender Contact - ${contact.contact} \n\n Note: \n ${contact.note}`
			})
			.then((data) => {
				if (data.status) {
					setmailSent(true);
					notify();
				}
			});
		// if (result.data.status) {
		// 	setmailSent(true);
		// }
	};
	// useEffect(() => {
	// 	if (mailSent == true) {
	// 		setTimeout(() => {
	// 			setmailSent(false);
	// 		}, 5000);
	// 	}
	// }, [mailSent]);

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
								<i class="fa-brands fa-whatsapp"></i>
								<span>+1 801-808-2273</span>
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
								if (e.target.value != "") {
									setnameerror(false);
								}
								setContact({ ...contact, name: e.target.value });
							}}
							error={nameerror}
						/>
						<TextField
							label="Email"
							color="primary"
							value={contact.email}
							error={emailerror}
							onChange={(e) => {
								if (e.target.value != "") {
									setemailerror(false);
								}
								setContact({ ...contact, email: e.target.value });
							}}
						></TextField>
						<TextField
							error={contacterror}
							color="primary"
							label="Contact Number"
							value={contact.contact}
							onChange={(e) => {
								if (e.target.value != "") {
									setContacterror(false);
								}
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
							<button className="contactsend" onClick={notify1}>
								<i class="fa-solid fa-check"></i>{" "}
							</button>
						) : (
							<button className="contactsend" onClick={sendMessage}>
								Send Message
							</button>
						)}
					</div>
				</div>
			</div>
			
			<Toaster />
		</div>
	);
};
