import React, { useState, useEffect } from "react";
import "./DesignerCollections.css";

import { Prodcard } from "./Prodcard";
import MoonLoader from "react-spinners/ClipLoader";

export const DesignerCollections = () => {
	const [subcatoptions, setSubcatoptions] = useState(false);
	const [subpriceoptions, setSubpriceoptions] = useState(true);
	const [subfabric, setSubfabric] = useState(true);
	const [subcolor, setSubcolor] = useState(true);
	const [pagedata, setPagedata] = useState([]);
	const [backupagedata, setBackupagedata] = useState([]);
	const [loading, setLoading] = useState(true);
	const [pricefilter, setpricefilter] = useState(0);

	const [subcatfilter, setSubcatfilter] = useState("");

	const getdata = async () => {
		const data = await fetch("http://products.tinarosario.com/api/Products")
			.then((res) => res.json())
			.then((result) => {
				const temp = result.data;
				const data = temp.filter(
					(e) => e.attributes.Main_Category == "Designer Wear"
				);
				setPagedata(data);
				setBackupagedata(data);
				setLoading(false);
			});
	};
	console.log(pagedata);

	useEffect(() => {
		getdata();
	}, []);

	useEffect(() => {
		if (subcatfilter != "") {
			const data = pagedata.filter((e) => {
				return e.attributes.Gender == subcatfilter;
			});
			console.log(data);
			setPagedata(data);
		}

		if (pricefilter != 0) {
			if (pricefilter == 1) {
				const data = pagedata.filter((e) => {
					return parseInt(e.attributes.price) < 5000;
				});

				setPagedata(data);
			}
			if (pricefilter == 2) {
				const data = pagedata.filter((e) => {
					return (
						parseInt(e.attributes.price) > 5000 &&
						parseInt(e.attributes.price) < 10000
					);
				});

				setPagedata(data);
			}
			if (pricefilter == 3) {
				const data = pagedata.filter((e) => {
					return (
						parseInt(e.attributes.price) > 10000 &&
						parseInt(e.attributes.price) < 15000
					);
				});

				setPagedata(data);
			}
			if (pricefilter == 4) {
				const data = pagedata.filter((e) => {
					return (
						parseInt(e.attributes.price) > 15000 &&
						parseInt(e.attributes.price) < 20000
					);
				});

				setPagedata(data);
			}
			if (pricefilter == 5) {
				const data = pagedata.filter((e) => {
					return parseInt(e.attributes.price) > 20000;
				});

				setPagedata(data);
			}
		}

		// console.log(pagedata);
	}, [subcatfilter, pricefilter]);

	return (
		<div className="designercollections">
			<div className="filter">
				<div className="subfilter">
					<div className="subinner">
						<div
							className="subinner2"
							onClick={() => {
								setSubcatoptions(!subcatoptions);
							}}
						>
							<span className="subinnertitle">Gender</span>

							<i
								class={
									subcatoptions
										? "fa-solid fa-chevron-up rotate"
										: "fa-solid fa-chevron-up "
								}
							></i>
						</div>
						<div
							className={subcatoptions ? "fildiv displaynone" : "fildiv"}
						></div>
						<div
							className={
								subcatoptions
									? "fliterchoicediv displaynone"
									: "fliterchoicediv"
							}
						>
							<div className="fliterchoice" style={{ marginTop: "10px" }}>
								<input
									type="checkbox"
									name="subcat"
									checked={subcatfilter == "Male"}
									onChange={() => {
										if (subcatfilter == "Male") {
											setSubcatfilter("");
											setPagedata(backupagedata);
										} else {
											setSubcatfilter("Male");
										}
									}}
								/>
								<span style={{ marginLeft: "10px", marginTop: "2px" }}>
									Men
								</span>
							</div>
							<div className="fliterchoice">
								<input
									type="checkbox"
									name="subcat"
									checked={subcatfilter == "Female"}
									onChange={() => {
										if (subcatfilter == "Female") {
											setSubcatfilter("");
											setPagedata(backupagedata);
										} else {
											setSubcatfilter("Female");
										}
									}}
								/>
								<span style={{ marginLeft: "10px", marginTop: "2px" }}>
									Women
								</span>
							</div>
							<div className="fliterchoice">
								<input
									type="checkbox"
									name="subcat"
									checked={subcatfilter == "Kid's"}
									onChange={() => {
										if (subcatfilter == "Kid's") {
											setSubcatfilter("");
											setPagedata(backupagedata);
										} else {
											setSubcatfilter("Kid's");
										}
									}}
								/>
								<span style={{ marginLeft: "10px", marginTop: "2px" }}>
									Kid's
								</span>
							</div>
						</div>
					</div>
				</div>
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
									Less than 5000
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
									5001 - 10000
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
									10,001-15,000
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
									15,001 - 20,000
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
									More than 20,000
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="subfilter">
					<div className="subinner">
						<div
							className="subinner2"
							onClick={() => {
								setSubfabric(!subfabric);
							}}
						>
							<span className="subinnertitle">Fabric</span>

							<i
								class={
									subfabric
										? "fa-solid fa-chevron-up rotate"
										: "fa-solid fa-chevron-up "
								}
							></i>
						</div>
						<div className={subfabric ? "fildiv displaynone" : "fildiv"}></div>
						<div
							className={
								subfabric ? "fliterchoicediv displaynone" : "fliterchoicediv"
							}
						>
							<div className="fliterchoice" style={{ marginTop: "10px" }}>
								<input type="radio" />
								<span style={{ marginLeft: "10px", marginTop: "2px" }}>
									Cotton
								</span>
							</div>
							<div className="fliterchoice">
								<input type="radio" />
								<span style={{ marginLeft: "10px", marginTop: "2px" }}>
									Linen
								</span>
							</div>
							<div className="fliterchoice">
								<input type="radio" />
								<span style={{ marginLeft: "10px", marginTop: "2px" }}>
									Handloom
								</span>
							</div>
							<div className="fliterchoice">
								<input type="radio" />
								<span style={{ marginLeft: "10px", marginTop: "2px" }}>
									Chanderi
								</span>
							</div>
							<div className="fliterchoice">
								<input type="radio" />
								<span style={{ marginLeft: "10px", marginTop: "2px" }}>
									Khadi
								</span>
							</div>
							<div className="fliterchoice">
								<input type="radio" />
								<span style={{ marginLeft: "10px", marginTop: "2px" }}>
									Flannel
								</span>
							</div>
							<div className="fliterchoice">
								<input type="radio" />
								<span style={{ marginLeft: "10px", marginTop: "2px" }}>
									Banana Silk
								</span>
							</div>
							<div className="fliterchoice">
								<input type="radio" />
								<span style={{ marginLeft: "10px", marginTop: "2px" }}>
									Jute
								</span>
							</div>
						</div>
					</div>
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
							<div className="fliterchoice" style={{ marginTop: "10px" }}>
								<input type="radio" />
								<span style={{ marginLeft: "10px", marginTop: "2px" }}>
									White
								</span>
							</div>
							<div className="fliterchoice">
								<input type="radio" />
								<span style={{ marginLeft: "10px", marginTop: "2px" }}>
									Black
								</span>
							</div>
							<div className="fliterchoice">
								<input type="radio" />
								<span style={{ marginLeft: "10px", marginTop: "2px" }}>
									Gold
								</span>
							</div>
							<div className="fliterchoice">
								<input type="radio" />
								<span style={{ marginLeft: "10px", marginTop: "2px" }}>
									Silver
								</span>
							</div>
							<div className="fliterchoice">
								<input type="radio" />
								<span style={{ marginLeft: "10px", marginTop: "2px" }}>
									Shades of Red
								</span>
							</div>
							<div className="fliterchoice">
								<input type="radio" />
								<span style={{ marginLeft: "10px", marginTop: "2px" }}>
									Shades of Orange
								</span>
							</div>
							<div className="fliterchoice">
								<input type="radio" />
								<span style={{ marginLeft: "10px", marginTop: "2px" }}>
									Shades of Green
								</span>
							</div>
							<div className="fliterchoice">
								<input type="radio" />
								<span style={{ marginLeft: "10px", marginTop: "2px" }}>
									Shades of Yellow
								</span>
							</div>
							<div className="fliterchoice">
								<input type="radio" />
								<span style={{ marginLeft: "10px", marginTop: "2px" }}>
									Shades of Blue
								</span>
							</div>
							<div className="fliterchoice">
								<input type="radio" />
								<span style={{ marginLeft: "10px", marginTop: "2px" }}>
									Shades of Purple
								</span>
							</div>
							<div className="fliterchoice">
								<input type="radio" />
								<span style={{ marginLeft: "10px", marginTop: "2px" }}>
									Shades of Pink
								</span>
							</div>
							<div className="fliterchoice">
								<input type="radio" />
								<span style={{ marginLeft: "10px", marginTop: "2px" }}>
									Shades of Grey
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="prodpage">
				<span className="prodpaget1">Designer Collections</span>
				<span className="prodpaget2">Specially made for you</span>
				{loading ? (
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
