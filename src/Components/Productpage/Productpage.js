import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import washicon from "./washcareicon.svg";
import "./Productpage.css";
import productimg from "./productimg.svg";
import MoonLoader from "react-spinners/ClipLoader";
import delivery from "./delivery.svg";
import fabricsicon from "./fabricsimg.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Productpage() {
	const { prodid } = useParams();
	const navigate = useNavigate();
	const [pagedata, setPagedata] = useState([]);
	const [loading, setLoading] = useState(true);
	const [loading2, setLoading2] = useState(true);
	const [showimg1, setShowimg1] = useState(true);
	const [showimg2, setShowimg2] = useState(false);
	const [showimg3, setShowimg3] = useState(false);

	const [state, setState] = useState({
		ip: "",
		countryName: "",
		countryCode: "",
		city: "",
		timezone: ""
	});

	const getGeoInfo = () => {
		axios
			.get("https://ipapi.co/json/")
			.then((response) => {
				let data = response.data;
				setState({
					...state,
					ip: data.ip,
					countryName: data.country_name,
					countryCode: data.country_calling_code,
					city: data.city,
					timezone: data.timezone
				});
				setLoading2(false);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const getdata = async () => {
		const data = await fetch(
			"http://products.tinarosario.com/api/Products?filters[Product_id][$eq]=" +
				prodid
		)
			.then((res) => res.json())
			.then((result) => {
				const temp = result.data[0];
				// console.log(temp);
				// const data = temp.filter((e) => e.attributes.Product_id == prodid);
				// console.log(data);
				setPagedata(temp);
				setLoading(false);
			});
	};

	console.log(pagedata);

	useEffect(() => {
		getGeoInfo();
		getdata();
	}, []);

	return (
		<div className="productspages">
			{loading == false && loading2 == false ? (
				<div>
					<div className="responsiveTitle">
						<span className="productname1">
							{pagedata.attributes.Product_name}
						</span>
						{state.countryName == "India" ? (
							<span className="productprice1">
								INR {pagedata.attributes.price}
							</span>
						) : (
							<span>USD {pagedata.attributes.priceinUSD}</span>
						)}
					</div>
					<div className="productspages">
						<div className="prodpagegalsection">
							<div className="imgselection">
								<img
									src={pagedata.attributes.Img_1}
									alt=""
									onClick={() => {
										setShowimg2(false);
										setShowimg3(false);
										setShowimg1(true);
									}}
								/>
								<img
									src={pagedata.attributes.Img_2}
									alt=""
									onClick={() => {
										setShowimg2(true);
										setShowimg3(false);
										setShowimg1(false);
									}}
								/>
								<img
									src={pagedata.attributes.Img_3}
									alt=""
									onClick={() => {
										setShowimg2(false);
										setShowimg3(true);
										setShowimg1(false);
									}}
								/>
							</div>
							<div style={{ display: "flex", flexDirection: "column" }}>
								{showimg1 && (
									<img
										className="mainimg"
										src={pagedata.attributes.Img_1}
										alt=""
									/>
								)}

								{showimg2 && (
									<img
										className="mainimg"
										src={pagedata.attributes.Img_2}
										alt=""
									/>
								)}

								{showimg3 && (
									<img
										className="mainimg"
										src={pagedata.attributes.Img_3}
										alt=""
									/>
								)}
								<span
									style={{
										marginTop: "10px",
										display: "flex"
										// alignItems: "flex-start"
									}}
								>
									{" "}
									<span style={{ fontSize: "12px" }}># </span> Image color may
									vary
								</span>
							</div>
						</div>
						<div className="prodpagedatasection">
							<span className="productname">
								{pagedata.attributes.Product_name}
							</span>
							{state.countryName == "India" ? (
								<span className="productprice">
									INR {pagedata.attributes.price}
								</span>
							) : (
								<span className="productprice">
									USD {pagedata.attributes.priceinUSD}
								</span>
							)}

							<span className="productdescriptiontitle">
								Product Description
							</span>
							<span className="productdescription">
								{pagedata.attributes.description}
							</span>
							<div
								style={{
									display: "flex",
									width: "350px",
									justifyContent: "space-between"
								}}
								className="resclass"
							>
								<div className="washcarediv">
									<img
										className="washcareimg"
										src={fabricsicon}
										alt=""
										style={{ marginRight: "10px" }}
									/>
									<span className="washcare">{pagedata.attributes.Fabric}</span>
								</div>
							</div>
							<div
								style={{
									display: "flex",
									width: "350px",
									justifyContent: "space-between"
								}}
								className="resclass"
							>
								<div className="washcarediv" style={{ width: "115px" }}>
									<img
										className="washcareimg"
										src={washicon}
										alt=""
										style={{
											marginRight: "10px",
											width: "18px",
											height: "auto"
										}}
									/>
									<span className="washcare">
										{pagedata.attributes.Wash_Care}
									</span>
								</div>
							</div>
							<div
								style={{
									display: "flex",
									width: "350px",
									justifyContent: "space-between"
								}}
								className="resclass"
							>
								<div
									className="washcarediv"
									style={{ width: "150px", marginTop: "25px" }}
								>
									<img
										className="washcareimg"
										src={delivery}
										alt=""
										style={{ width: "25px", height: "auto" }}
									/>
									<span className="washcare">1 Week Delivery*</span>
								</div>
								{/* <div className="washcarediv" style={{ width: "150px" }}>
								<img
									className="washcareimg"
									src={fabricsicon}
									alt=""
									style={{ marginRight: "10px" }}
								/>
								<span className="washcare">{pagedata.attributes.Fabric}</span>
							</div> */}
							</div>

							<span className="sku">SKU: {pagedata.attributes.Product_id}</span>
							<span className="producttabs">
								{pagedata.attributes.Main_Category} |{" "}
								{pagedata.attributes.Sub_Category} | {pagedata.attributes.Color}
							</span>
							<button
								className="Interestedbutton"
								onClick={() => {
									navigate("/Productmsg/" + pagedata.attributes.Product_name);
								}}
							>
								Customize
							</button>
							<span className="internationaldelivery">
								* Customized orders & International Delivery timeline may vary
							</span>
						</div>
					</div>
				</div>
			) : (
				<MoonLoader color="#4C2A76" size={50} />
			)}
		</div>
	);
}
