import React, { useState, useEffect } from "react";
// import "./DesignerCollections.css";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import rectimg from "./Rectimg.svg";
import { Prodcard } from "./Prodcard";
import MoonLoader from "react-spinners/ClipLoader";
import { height } from "@mui/system";
import axios from "axios";
import { AiFillFilter, AiOutlineArrowLeft } from "react-icons/ai";

export const Handloom = () => {
	const [subcatoptions, setSubcatoptions] = useState(false);
	const [subpriceoptions, setSubpriceoptions] = useState(true);
	const [subfabric, setSubfabric] = useState(true);
	const [subcolor, setSubcolor] = useState(true);
	const [pagedata, setPagedata] = useState([]);
	const [backupagedata, setBackupagedata] = useState([]);
	const [loading, setLoading] = useState(true);
	const [pricefilter, setpricefilter] = useState(0);
	const [colorfilter, setColorfilter] = useState("");
	const [loading2, setLoading2] = useState(true);
	const [filteropen, setFilteropen] = useState(false);
	const [subcatfilter, setSubcatfilter] = useState("");
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
			"http://products.tinarosario.com/api/Products?filters[Main_Category][$eq]=Handloom Sarees"
		)
			.then((res) => res.json())
			.then((result) => {
				const data = result.data;
				// const data = temp.filter(
				// 	(e) => e.attributes.Main_Category == "Handloom Sarees"
				// );
				setPagedata(data);
				setBackupagedata(data);
				setLoading(false);
			});
	};
	console.log(pagedata);

	useEffect(() => {
		getdata();
		getGeoInfo();
	}, []);

	useEffect(() => {
		if (state.countryName == "India") {
			if (pricefilter != 0) {
				if (pricefilter == 1) {
					const data = backupagedata.filter((e) => {
						return parseInt(e.attributes.price) < 2000;
					});

					setPagedata(data);
				}
				if (pricefilter == 2) {
					const data = backupagedata.filter((e) => {
						return (
							parseInt(e.attributes.price) > 2000 &&
							parseInt(e.attributes.price) <= 4000
						);
					});

					setPagedata(data);
				}
				if (pricefilter == 3) {
					const data = backupagedata.filter((e) => {
						return (
							parseInt(e.attributes.price) > 4000 &&
							parseInt(e.attributes.price) <= 6000
						);
					});

					setPagedata(data);
				}
				if (pricefilter == 4) {
					const data = backupagedata.filter((e) => {
						return parseInt(e.attributes.price) > 6000;
					});

					setPagedata(data);
				}
			}
		} else {
			if (pricefilter != 0) {
				if (pricefilter == 1) {
					const data = backupagedata.filter((e) => {
						return parseInt(e.attributes.priceinUSD) < 50;
					});

					setPagedata(data);
				}
				if (pricefilter == 2) {
					const data = backupagedata.filter((e) => {
						return (
							parseInt(e.attributes.priceinUSD) > 50 &&
							parseInt(e.attributes.priceinUSD) <= 100
						);
					});

					setPagedata(data);
				}
				if (pricefilter == 3) {
					const data = backupagedata.filter((e) => {
						return (
							parseInt(e.attributes.priceinUSD) > 100 &&
							parseInt(e.attributes.priceinUSD) <= 150
						);
					});

					setPagedata(data);
				}
				if (pricefilter == 4) {
					const data = backupagedata.filter((e) => {
						return (
							parseInt(e.attributes.priceinUSD) > 150 &&
							parseInt(e.attributes.priceinUSD) <= 200
						);
					});

					setPagedata(data);
				}
				if (pricefilter == 5) {
					const data = backupagedata.filter((e) => {
						return parseInt(e.attributes.priceinUSD) > 200;
					});

					setPagedata(data);
				}
			}
		}

		if (colorfilter != "") {
			const data = backupagedata.filter((e) => {
				return e.attributes.Color == colorfilter;
			});
			console.log(data);
			setPagedata(data);
		}

		// console.log(pagedata);
	}, [pricefilter, colorfilter]);

	return (
		<div className="designercollections">
			<div className={filteropen ? "filter filteropen" : "filter"}>
				<div
					className="filtercloser"
					onClick={() => {
						setFilteropen(false);
					}}
				>
					<AiOutlineArrowLeft />
				</div>
				{state.countryName == "India" ? (
					<div className="subfilter">
						<div className="subinner">
							<div
								className="subinner2"
								onClick={() => {
									setSubpriceoptions(!subpriceoptions);
								}}
							>
								<span className="subinnertitle">Price</span>

								<i
									class={
										subpriceoptions
											? "fa-solid fa-chevron-up rotate"
											: "fa-solid fa-chevron-up "
									}
								></i>
							</div>
							<div
								className={subpriceoptions ? "fildiv displaynone" : "fildiv"}
							></div>
							<div
								className={
									subpriceoptions
										? "fliterchoicediv displaynone"
										: "fliterchoicediv"
								}
							>
								<div className="fliterchoice" style={{ marginTop: "10px" }}>
									<input
										type="checkbox"
										name="pricebox"
										checked={pricefilter == 1}
										onChange={() => {
											if (pricefilter == 1) {
												setpricefilter(0);
												setPagedata(backupagedata);
											} else {
												setpricefilter(1);
											}
										}}
									/>
									<span style={{ marginLeft: "10px", marginTop: "2px" }}>
										Less than 2000
									</span>
								</div>
								<div className="fliterchoice">
									<input
										type="checkbox"
										name="pricebox"
										checked={pricefilter == 2}
										onChange={() => {
											if (pricefilter == 2) {
												setpricefilter(0);
												setPagedata(backupagedata);
											} else {
												setpricefilter(2);
											}
										}}
									/>
									<span style={{ marginLeft: "10px", marginTop: "2px" }}>
										2001 - 4000
									</span>
								</div>
								<div className="fliterchoice">
									<input
										type="checkbox"
										name="pricebox"
										checked={pricefilter == 3}
										onChange={() => {
											if (pricefilter == 3) {
												setpricefilter(0);
												setPagedata(backupagedata);
											} else {
												setpricefilter(3);
											}
										}}
									/>
									<span style={{ marginLeft: "10px", marginTop: "2px" }}>
										4000 - 6000
									</span>
								</div>
								<div className="fliterchoice">
									<input
										type="checkbox"
										name="pricebox"
										checked={pricefilter == 4}
										onChange={() => {
											if (pricefilter == 4) {
												setpricefilter(0);
												setPagedata(backupagedata);
											} else {
												setpricefilter(4);
											}
										}}
									/>
									<span style={{ marginLeft: "10px", marginTop: "2px" }}>
										More than 6000
									</span>
								</div>
							</div>
						</div>
					</div>
				) : (
					<div className="subfilter">
						<div className="subinner">
							<div
								className="subinner2"
								onClick={() => {
									setSubpriceoptions(!subpriceoptions);
								}}
							>
								<span className="subinnertitle">Price($)</span>

								<i
									class={
										subpriceoptions
											? "fa-solid fa-chevron-up rotate"
											: "fa-solid fa-chevron-up "
									}
								></i>
							</div>
							<div
								className={subpriceoptions ? "fildiv displaynone" : "fildiv"}
							></div>
							<div
								className={
									subpriceoptions
										? "fliterchoicediv displaynone"
										: "fliterchoicediv"
								}
							>
								<div className="fliterchoice" style={{ marginTop: "10px" }}>
									<input
										type="checkbox"
										name="pricebox"
										checked={pricefilter == 1}
										onChange={() => {
											if (pricefilter == 1) {
												setpricefilter(0);
												setPagedata(backupagedata);
											} else {
												setpricefilter(1);
											}
										}}
									/>
									<span style={{ marginLeft: "10px", marginTop: "2px" }}>
										Less than 50
									</span>
								</div>
								<div className="fliterchoice">
									<input
										type="checkbox"
										name="pricebox"
										checked={pricefilter == 2}
										onChange={() => {
											if (pricefilter == 2) {
												setpricefilter(0);
												setPagedata(backupagedata);
											} else {
												setpricefilter(2);
											}
										}}
									/>
									<span style={{ marginLeft: "10px", marginTop: "2px" }}>
										51 - 100
									</span>
								</div>
								<div className="fliterchoice">
									<input
										type="checkbox"
										name="pricebox"
										checked={pricefilter == 3}
										onChange={() => {
											if (pricefilter == 3) {
												setpricefilter(0);
												setPagedata(backupagedata);
											} else {
												setpricefilter(3);
											}
										}}
									/>
									<span style={{ marginLeft: "10px", marginTop: "2px" }}>
										101 - 150
									</span>
								</div>
								<div className="fliterchoice">
									<input
										type="checkbox"
										name="pricebox"
										checked={pricefilter == 4}
										onChange={() => {
											if (pricefilter == 4) {
												setpricefilter(0);
												setPagedata(backupagedata);
											} else {
												setpricefilter(4);
											}
										}}
									/>
									<span style={{ marginLeft: "10px", marginTop: "2px" }}>
										151-200
									</span>
								</div>
								<div className="fliterchoice">
									<input
										type="checkbox"
										name="pricebox"
										checked={pricefilter == 5}
										onChange={() => {
											if (pricefilter == 5) {
												setpricefilter(0);
												setPagedata(backupagedata);
											} else {
												setpricefilter(5);
											}
										}}
									/>
									<span style={{ marginLeft: "10px", marginTop: "2px" }}>
										More than 200
									</span>
								</div>
							</div>
						</div>
					</div>
				)}

				<div className="subfilter">
					<div className="subinner">
						<div
							className="subinner2"
							onClick={() => {
								setSubcolor(!subcolor);
							}}
						>
							<span className="subinnertitle">Color</span>

							<i
								class={
									subcolor
										? "fa-solid fa-chevron-up rotate"
										: "fa-solid fa-chevron-up "
								}
							></i>
						</div>
						<div className={subcolor ? "fildiv displaynone" : "fildiv"}></div>
						<div
							className={
								subcolor ? "fliterchoicediv displaynone" : "fliterchoicediv"
							}
						>
							<div className="fliterchoice" style={{ marginTop: "10px" }}>
								<input
									type="checkbox"
									name="colorfilter"
									checked={colorfilter == "White"}
									onChange={() => {
										if (colorfilter == "White") {
											setColorfilter("");
											setPagedata(backupagedata);
										} else {
											setColorfilter("White");
										}
									}}
								/>
								<span style={{ marginLeft: "10px", marginTop: "2px" }}>
									White
								</span>
							</div>
							<div className="fliterchoice">
								<input
									type="checkbox"
									name="colorfilter"
									checked={colorfilter == "Black"}
									onChange={() => {
										if (colorfilter == "Black") {
											setColorfilter("");
											setPagedata(backupagedata);
										} else {
											setColorfilter("Black");
										}
									}}
								/>
								<span style={{ marginLeft: "10px", marginTop: "2px" }}>
									Black
								</span>
							</div>
							<div className="fliterchoice">
								<input
									type="checkbox"
									name="colorfilter"
									checked={colorfilter == "Gold"}
									onChange={() => {
										if (colorfilter == "Gold") {
											setColorfilter("");
											setPagedata(backupagedata);
										} else {
											setColorfilter("Gold");
										}
									}}
								/>
								<span style={{ marginLeft: "10px", marginTop: "2px" }}>
									Gold
								</span>
							</div>
							<div className="fliterchoice">
								<input
									type="checkbox"
									name="colorfilter"
									checked={colorfilter == "Silver"}
									onChange={() => {
										if (colorfilter == "Silver") {
											setColorfilter("");
											setPagedata(backupagedata);
										} else {
											setColorfilter("Silver");
										}
									}}
								/>
								<span style={{ marginLeft: "10px", marginTop: "2px" }}>
									Silver
								</span>
							</div>
							<div className="fliterchoice">
								<input
									type="checkbox"
									name="colorfilter"
									checked={colorfilter == "Shades of Red"}
									onChange={() => {
										if (colorfilter == "Shades of Red") {
											setColorfilter("");
											setPagedata(backupagedata);
										} else {
											setColorfilter("Shades of Red");
										}
									}}
								/>
								<span style={{ marginLeft: "10px", marginTop: "2px" }}>
									Shades of Red
								</span>
							</div>
							<div className="fliterchoice">
								<input
									type="checkbox"
									name="colorfilter"
									checked={colorfilter == "Shades of Orange"}
									onChange={() => {
										if (colorfilter == "Shades of Orange") {
											setColorfilter("");
											setPagedata(backupagedata);
										} else {
											setColorfilter("Shades of Orange");
										}
									}}
								/>
								<span style={{ marginLeft: "10px", marginTop: "2px" }}>
									Shades of Orange
								</span>
							</div>
							<div className="fliterchoice">
								<input
									type="checkbox"
									name="colorfilter"
									checked={colorfilter == "Shades of Green"}
									onChange={() => {
										if (colorfilter == "Shades of Green") {
											setColorfilter("");
											setPagedata(backupagedata);
										} else {
											setColorfilter("Shades of Green");
										}
									}}
								/>
								<span style={{ marginLeft: "10px", marginTop: "2px" }}>
									Shades of Green
								</span>
							</div>
							<div className="fliterchoice">
								<input
									type="checkbox"
									name="colorfilter"
									checked={colorfilter == "Shades of Yellow"}
									onChange={() => {
										if (colorfilter == "Shades of Yellow") {
											setColorfilter("");
											setPagedata(backupagedata);
										} else {
											setColorfilter("Shades of Yellow");
										}
									}}
								/>
								<span style={{ marginLeft: "10px", marginTop: "2px" }}>
									Shades of Yellow
								</span>
							</div>
							<div className="fliterchoice">
								<input
									type="checkbox"
									name="colorfilter"
									checked={colorfilter == "Shades of Blue"}
									onChange={() => {
										if (colorfilter == "Shades of Blue") {
											setColorfilter("");
											setPagedata(backupagedata);
										} else {
											setColorfilter("Shades of Blue");
										}
									}}
								/>
								<span style={{ marginLeft: "10px", marginTop: "2px" }}>
									Shades of Blue
								</span>
							</div>
							<div className="fliterchoice">
								<input
									type="checkbox"
									name="colorfilter"
									checked={colorfilter == "Shades of Purple"}
									onChange={() => {
										if (colorfilter == "Shades of Purple") {
											setColorfilter("");
											setPagedata(backupagedata);
										} else {
											setColorfilter("Shades of Purple");
										}
									}}
								/>
								<span style={{ marginLeft: "10px", marginTop: "2px" }}>
									Shades of Purple
								</span>
							</div>
							<div className="fliterchoice">
								<input
									type="checkbox"
									name="colorfilter"
									checked={colorfilter == "Shades of Pink"}
									onChange={() => {
										if (colorfilter == "Shades of Pink") {
											setColorfilter("");
											setPagedata(backupagedata);
										} else {
											setColorfilter("Shades of Pink");
										}
									}}
								/>
								<span style={{ marginLeft: "10px", marginTop: "2px" }}>
									Shades of Pink
								</span>
							</div>
							<div className="fliterchoice">
								<input
									type="checkbox"
									name="colorfilter"
									checked={colorfilter == "Shades of Grey"}
									onChange={() => {
										if (colorfilter == "Shades of Grey") {
											setColorfilter("");
											setPagedata(backupagedata);
										} else {
											setColorfilter("Shades of Grey");
										}
									}}
								/>
								<span style={{ marginLeft: "10px", marginTop: "2px" }}>
									Shades of Grey
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="prodpage">
				<div
					style={{
						display: "flex",
						justifyContent: "flex-start",
						alignItems: "center"
					}}
					className="prodpaget1div"
				>
					<div
						className="filtericon"
						onClick={() => {
							setFilteropen(true);
						}}
					>
						<AiFillFilter />
					</div>
					<span className="prodpaget1">Handloom Sarees - </span>
					<span className="prodpaget2">“Drape yourself in a comfy fabric”</span>
				</div>

				{loading == true || loading2 == true ? (
					<div
						style={{
							display: "flex",
							width: "100%",
							alignItems: "center",
							justifyContent: "center",
							height: "30vh"
						}}
					>
						<MoonLoader color="#4C2A76" size={50} />
					</div>
				) : (
					<div className="prodcardgrid">
						{pagedata.map((data) => {
							return (
								<Prodcard
									img={data.attributes.Img_1}
									title={data.attributes.Product_name}
									description={data.attributes.Subtitle}
									id={data.attributes.Product_id}
								/>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
};
