import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { TextField } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import "./ordernow.css";
export const Ordernow = () => {
	const [stepper, setStepper] = useState(0);
	const { type } = useParams();

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
									<TextField label="styling for ?" color="primary" />
									<FormHelperText>Eg: Bride, Groom</FormHelperText>
								</div>
								<div style={{ display: "flex", flexDirection: "column" }}>
									<TextField label="Clothing choice ?" color="primary" />
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
									<TextField label="Fabric" color="primary" />
									<FormHelperText>Eg: Silk, Satin, Linen</FormHelperText>
								</div>
								<TextField
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
								setStepper(1);
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
									<TextField label="Name" color="primary" />
								</div>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										marginBottom: "20px"
									}}
								>
									<TextField label="Email" color="primary" />
								</div>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										marginBottom: "20px"
									}}
								>
									<TextField label="Contact" color="primary" />
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
							<div className="wdsubbt">
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