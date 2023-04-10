import React, { useState, useEffect } from "react";
// import "./DesignerCollections.css";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import rectimg from "./Rectimg.svg";
import { Prodcard } from "./Prodcard";
import MoonLoader from "react-spinners/ClipLoader";
import { height } from "@mui/system";
import axios from "axios";
import { AiFillFilter, AiOutlineArrowLeft } from "react-icons/ai";

export const Womanswear = () => {
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
			"https://tinarosario.com/api/Products?filters[Main_Category][$eq]=Women's Wear"
		)
			.then((res) => res.json())
			.then((result) => {
				const data = result.data;
				// const data = temp.filter(
				// 	(e) => e.attributes.Main_Category == "Men's Wear"
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
						return parseInt(e.attributes.price) < 5000;
					});

					setPagedata(data);
				}
				if (pricefilter == 2) {
					const data = backupagedata.filter((e) => {
						return (
							parseInt(e.attributes.price) > 5000 &&
							parseInt(e.attributes.price) <= 10000
						);
					});

					setPagedata(data);
				}
				if (pricefilter == 3) {
					const data = backupagedata.filter((e) => {
						return parseInt(e.attributes.price) > 10000;
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
							<div className="fliterchoice">
								<input
									type="checkbox"
									name="colorfilter"
									checked={colorfilter == "Shades of Gold"}
									onChange={() => {
										if (colorfilter == "Shades of Gold") {
											setColorfilter("");
											setPagedata(backupagedata);
										} else {
											setColorfilter("Shades of Gold");
										}
									}}
								/>
								<span style={{ marginLeft: "10px", marginTop: "2px" }}>
									Shades of Gold
								</span>
							</div>
							<div className="fliterchoice">
								<input
									type="checkbox"
									name="colorfilter"
									checked={colorfilter == "Shades of Silver"}
									onChange={() => {
										if (colorfilter == "Shades of Silver") {
											setColorfilter("");
											setPagedata(backupagedata);
										} else {
											setColorfilter("Shades of Silver");
										}
									}}
								/>
								<span style={{ marginLeft: "10px", marginTop: "2px" }}>
									Shades of Silver
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
							<div className="fliterchoice">
								<input
									type="checkbox"
									name="colorfilter"
									checked={colorfilter == "Shades of Black"}
									onChange={() => {
										if (colorfilter == "Shades of Black") {
											setColorfilter("");
											setPagedata(backupagedata);
										} else {
											setColorfilter("Shades of Black");
										}
									}}
								/>
								<span style={{ marginLeft: "10px", marginTop: "2px" }}>
									Shades of Black
								</span>
							</div>
							<div className="fliterchoice">
								<input
									type="checkbox"
									name="colorfilter"
									checked={colorfilter == "Shades of White"}
									onChange={() => {
										if (colorfilter == "Shades of White") {
											setColorfilter("");
											setPagedata(backupagedata);
										} else {
											setColorfilter("Shades of White");
										}
									}}
								/>
								<span style={{ marginLeft: "10px", marginTop: "2px" }}>
									Shades of White
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
						alignItems: "center",
						flexDirection: "column"
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
					<span className="prodpaget1">Women's Wear</span>
					<span style={{ marginTop: "10px" }} className="prodpaget2">
						"Specially designed to enhance your style"
					</span>
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
