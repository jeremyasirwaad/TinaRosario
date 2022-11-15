import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import Sidebar from "../sidebar/Sidebar";
import HomeIcon from "@mui/icons-material/Home";
import navlogo from "./navlogo.svg";
import Select from "react-select";
import searchoptions from "./searchoptions.json";

export const Navbar = () => {
	const navigate = useNavigate();

	// const searchoptions = [
	//   { value: "Kurta", label: "Kurta" },
	//   { value: "Saree", label: "Saree" },
	//   { value: "Lehenga", label: "Lehenga" },
	//   { value: "Dress", label: "Dress" },
	//   { value: "vanilla", label: "Handloom dress" },
	//   { value: "vanilla", label: "Pant" },
	//   { value: "vanilla", label: "Shirt" },
	//   { value: "vanilla", label: "Trouser" },
	//   { value: "vanilla", label: "Blouse,Designer blouses" },
	//   { value: "vanilla", label: "Aari work" },
	//   { value: "vanilla", label: "Dresses" },
	//   { value: "vanilla", label: "Accessories" },
	//   { value: "vanilla", label: "Blazer" },
	//   { value: "vanilla", label: "Customised clothes" },
	//   { value: "vanilla", label: "Ready made garments" },
	//   { value: "vanilla", label: "Chanderi" },
	//   { value: "vanilla", label: "Cotton" },
	//   { value: "vanilla", label: "Umberalla cut" },
	//   { value: "vanilla", label: "Bridegroom" },
	//   { value: "vanilla", label: "Wedding" },
	// ];

	return (
		<div className="navcontainer">
			<div className="navinnercontainer">
				<div
					className="navlogocontainer"
					onClick={() => {
						navigate("/");
					}}
				>
					<img
						style={{ width: "300px", padding: "10px", cursor: "pointer" }}
						src={navlogo}
					/>
				</div>
				<div className="navoptions">
					<span
						className="navlink1"
						onClick={() => {
							navigate("/");
						}}
					>
						<HomeIcon />
					</span>
					<span
						className="navlink3"
						onClick={() => {
							navigate("/about");
						}}
					>
						About Us
					</span>
					<span
						className="navlink1"
						onClick={() => {
							navigate("/gallerycaro");
						}}
					>
						Gallery
					</span>
					<span
						className="navlink5"
						onClick={async () => {
							await navigate("/");
							// document.getElementById("contactusdiv").scrollIntoView();
							document.getElementById("services").scrollIntoView({
								behavior: "smooth"
							});
						}}
					>
						Services
					</span>
					<span
						className="navlink5"
						onClick={async () => {
							await navigate("/");
							// document.getElementById("contactusdiv").scrollIntoView();
							document.getElementById("products").scrollIntoView({
								behavior: "smooth"
							});
						}}
					>
						Products
					</span>
					<span
						className="navlink2"
						onClick={async () => {
							await navigate("/");
							// document.getElementById("contactusdiv").scrollIntoView();
							document.getElementById("Landingtesti").scrollIntoView({
								behavior: "smooth"
							});
						}}
					>
						Testimonials
					</span>
					<span
						onClick={async () => {
							await navigate("/contact");
							// document.getElementById("contactusdiv").scrollIntoView();
							document.getElementById("contactusdiv").scrollIntoView({
								behavior: "smooth"
							});
						}}
						className="navlink4"
					>
						Contact Us
					</span>
					{/* <span className="navlink5">Testimonials</span> */}
				</div>
				<div className="navicons">
					<i
						class="fa-solid fa-magnifying-glass"
						style={{ marginRight: "10px" }}
					></i>
					<Select
						options={searchoptions}
						onChange={(e) => {
							if (e.value == "Saree") {
								navigate("/handloom");
							}
							if (e.value == "Kurta") {
								navigate("/womenswear");
							}
							if (e.value == "Lehanga") {
								navigate("/DesignerCollections");
							}
							if (e.value == "Dress") {
								navigate("/DesignerCollections");
							}
							if (e.value == "Handloom") {
								navigate("/handloom");
							}
							if (e.value == "Shirt") {
								navigate("/Menswear");
							}
							if (e.value == "Accessories") {
								navigate("/exclusiveaccessories");
							}
							if (e.value == "Hoodies") {
								navigate("/Menswear");
							}
							if (e.value == "T- Shirt") {
								navigate("/Menswear");
							}
							if (e.value == "Kids' Collection") {
								navigate("/kidswear");
							}
							if (e.value == "Blazer") {
								navigate("/DesignerCollections");
							}
							if (e.value == "Salwar") {
								navigate("/womenswear");
							}
							if (e.value == "Western wear") {
								navigate("/womenswear");
							}
							if (e.value == "Gown") {
								navigate("/womenswear");
							}
							if (e.value == "blouse") {
								navigate("/womenswear");
							}
							if (e.value == "Men's Collection") {
								navigate("/Menswear");
							}
							if (e.value == "Women's Collection") {
								navigate("/womenswear");
							}
							if (e.value == "Pant") {
								navigate("/DesignerCollections");
							}
							if (e.value == "Skirt") {
								navigate("/DesignerCollections");
							}
						}}
					></Select>
					{/* <input
						type="text"
						style={{
							width: "500px",
							height: "40px",
							borderRadius: "10px",
							border: "1px solid black"
						}}
					/> */}
					{/* <select>
						<option value="A">Apple</option>
						<option value="B">Banana</option>
						<option value="C">Cranberry</option>
					</select> */}
					{/* <i class="fa-solid fa-cart-shopping"></i> */}
					{/* <i class="fa-solid fa-user"></i> */}
				</div>

				<div
					style={{
						"@media (min-width: 700px)": {
							display: "none"
						}
					}}
				>
					<Sidebar />
				</div>
			</div>
		</div>
	);
};
