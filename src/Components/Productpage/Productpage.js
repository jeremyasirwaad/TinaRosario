import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import washicon from "./washcareicon.svg";
import "./Productpage.css";
import productimg from "./productimg.svg";

export default function Productpage() {
	const { prodid } = useParams();
	const [pagedata, setPagedata] = useState([]);
	const [loading, setLoading] = useState(true);

	const getdata = async () => {
		const data = await fetch("http://products.tinarosario.com/api/Products")
			.then((res) => res.json())
			.then((result) => {
				const temp = result.data;
				const data = temp.filter((e) => e.attributes.Product_id == prodid);
				setPagedata(data[0]);
				setLoading(false);
			});
	};

	console.log(pagedata);

	useEffect(() => {
		getdata();
	}, []);

	return (
		<div className="productspages">
			{loading == false ? (
				<div className="productspages">
					<div className="prodpagegalsection">
						<div className="imgselection">
							<img src={pagedata.attributes.Img_1} alt="" />
							<img src={pagedata.attributes.Img_2} alt="" />
							<img src={pagedata.attributes.Img_3} alt="" />
						</div>
						<img className="mainimg" src={pagedata.attributes.Img_1} alt="" />
					</div>
					<div className="prodpagedatasection">
						<span className="productname">
							{pagedata.attributes.Product_name}
						</span>
						<span className="productprice">{pagedata.attributes.price}</span>
						<span className="productdescriptiontitle">Product Description</span>
						<span className="productdescription">
							{pagedata.attributes.description}
						</span>
						<div>
							<div className="washcarediv">
								<img className="washcareimg" src={washicon} alt="" />
								<span className="washcare">
									{pagedata.attributes.Wash_Care}
								</span>
							</div>
						</div>
						<span className="sku">SKU: {pagedata.attributes.Product_id}</span>
						<span className="producttabs">
							{pagedata.attributes.Main_Category} |{" "}
							{pagedata.attributes.Sub_Category} | {pagedata.attributes.Color}
						</span>
						<button className="Interestedbutton">Interested ?</button>
						<span className="internationaldelivery">
							* - International Delivery timeline may vary
						</span>
					</div>
				</div>
			) : (
				"Loading"
			)}
		</div>
	);
}
