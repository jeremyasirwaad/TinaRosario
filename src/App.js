import logo from "./logo.svg";
import "./App.css";
import { Landing } from "./Components/Landing/Landing";
import { Navbar } from "./Components/Navbar/Navbar";
import { PreNav } from "./Components/PreNav/PreNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Wedding } from "./Components/Pages/Wedding";
import { Fabrics } from "./Components/Pages/fabrics/Fabrics";
import { Ordernow } from "./Components/Pages/Ordernow";
import Scrolltotop from "./Scrolltotop";
import { Ethnic } from "./Components/Pages/Ethinic";
import { OrdernowEthinic } from "./Components/Pages/OrdernowEthinic";
import { Partywear } from "./Components/Pages/Partywear";
import { Ordernowparty } from "./Components/Pages/OrdernowParty";
import { Indo } from "./Components/Pages/Indo";
import { Ordernowindo } from "./Components/Pages/Ordernowindo";
import Sidebar from "./Components/sidebar/Sidebar";
import { OrderSuccess } from "./Components/Pages/OrderSuccess";
import { About } from "./Components/About/About";
import Faq from "./Components/Pages/Faq/Faq";
import { Contactus } from "./Components/Contactus/Contactus";
import { Footer } from "./Components/Footer/Footer";
import ImageCons from "./Components/Pages/ImageCons/ImageCons";
import OrderFinish from "./Components/orderdone/OrderFinish";
import { Cusdesigns } from "./Components/Pages/Cusdesigns/Cusdesigns";
import { Getpampered } from "./Components/Pages/Getpampered/Getpampered";
import { Policies } from "./Components/Policies/Policies";
import Productpage from "./Components/Productpage/Productpage";
import { Handloom } from "./Components/Handloom/Handloom";
import { Causalwear } from "./Components/Casual Wear/Casualwear";
import { Kidswear } from "./Components/KidsWear/Kidswear";
import { Productmsg } from "./Components/Productpage/ProductMessgage/Productmsg";
import { Gallery } from "./Components/Gallery/Gallery";
import Jingles from "./Components/Gallery/Jingles/Jingles";
import HappyClients from "./Components/Gallery/HappyClients/HappyClients";
import { StartStud } from "./Components/Gallery/StarStud/StartStud";
import { Talkies } from "./Components/Gallery/Talkies/Talkies";
import { Feedback } from "./Components/Feedback/Feedback";
import Evisiting from "./Components/evisitingcard/Evisiting";

import { DesignerCollections } from "./Components/DesignerCollections/DesignerCollections";
import React from "react";

const faqs = [
	{
		q: "How to place an order?",
		a: "' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blanditleo lobortis eget'"
	},
	{
		q: "How to place an order?",
		a: "' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blanditleo lobortis eget'"
	},
	{
		q: "How to place an order?",
		a: "' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blanditleo lobortis eget'"
	},
	{
		q: "How to place an order?",
		a: "' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blanditleo lobortis eget'"
	},
	{
		q: "How to place an order?",
		a: "' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blanditleo lobortis eget'"
	},
	{
		q: "How to place an order?",
		a: "' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blanditleo lobortis eget'"
	}
];

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Scrolltotop></Scrolltotop>

				<Routes>
					<Route
						path="/feedback"
						element={
							<>
								<PreNav></PreNav>
								<Navbar></Navbar>
								<Feedback />
								<Footer></Footer>
							</>
						}
					></Route>
					<Route
						path="/"
						element={
							<>
								<PreNav></PreNav>
								<Navbar></Navbar>
								<Landing />
								<Footer></Footer>
							</>
						}
					></Route>
					<Route
						path="/gallery"
						element={
							<>
								<PreNav></PreNav>
								<Navbar></Navbar>
								<Gallery />
								<Footer></Footer>
							</>
						}
					></Route>
					<Route
						path="/about"
						element={
							<>
								<PreNav></PreNav>
								<Navbar></Navbar>
								<About />
								<Footer></Footer>
							</>
						}
					></Route>
					<Route
						path="/wedding"
						element={
							<>
								<PreNav></PreNav>
								<Navbar></Navbar>
								<Wedding />
								<Footer></Footer>
							</>
						}
					></Route>
					<Route
						path="/fabrics"
						element={
							<>
								<PreNav></PreNav>
								<Navbar></Navbar>
								<Fabrics></Fabrics>
								<Footer></Footer>
							</>
						}
					></Route>
					<Route
						path="/customiseddesigns"
						element={
							<>
								<PreNav></PreNav>
								<Navbar></Navbar>
								<Cusdesigns />
								<Footer></Footer>
							</>
						}
					></Route>
					<Route
						path="/imagecons"
						element={
							<>
								<PreNav></PreNav>
								<Navbar></Navbar>
								<ImageCons />
								<Footer></Footer>
							</>
						}
					></Route>
					<Route
						path="/getpampered"
						element={
							<>
								<PreNav></PreNav>
								<Navbar></Navbar>
								<Getpampered />
								<Footer></Footer>
							</>
						}
					></Route>
					<Route
						path="/policies"
						element={
							<>
								<PreNav></PreNav>
								<Navbar></Navbar>
								<Policies />
								<Footer></Footer>
							</>
						}
					></Route>
					<Route
						path="/Productmsg/:type"
						element={
							<>
								<PreNav></PreNav>
								<Navbar></Navbar>
								<Productmsg />
								<Footer></Footer>
							</>
						}
					></Route>
					<Route
						path="/DesignerCollections"
						element={
							<>
								<PreNav></PreNav>
								<Navbar></Navbar>
								<DesignerCollections />
								<Footer></Footer>
							</>
						}
					></Route>
					<Route
						path="/Handloom"
						element={
							<>
								<PreNav></PreNav>
								<Navbar></Navbar>
								<Handloom />
								<Footer></Footer>
							</>
						}
					></Route>
					<Route
						path="/Casualwear"
						element={
							<>
								<PreNav></PreNav>
								<Navbar></Navbar>
								<Causalwear />
								<Footer></Footer>
							</>
						}
					></Route>
					<Route
						path="/Kidswear"
						element={
							<>
								<PreNav></PreNav>
								<Navbar></Navbar>
								<Kidswear />
								<Footer></Footer>
							</>
						}
					></Route>
					<Route
						path="/Contact"
						element={
							<>
								<PreNav></PreNav>
								<Navbar></Navbar>
								<Contactus></Contactus>
								<Footer></Footer>
							</>
						}
					>
						{" "}
					</Route>
					<Route
						path="/ordernow/wedding"
						element={
							<>
								<PreNav></PreNav>
								<Navbar></Navbar>
								<Ordernow />
								<Footer></Footer>
							</>
						}
					></Route>
					<Route
						path="/ordernow/Ethnic"
						element={
							<>
								<PreNav></PreNav>
								<Navbar></Navbar>
								<OrdernowEthinic />
								<Footer></Footer>
							</>
						}
					></Route>
					<Route
						path="/ordernow/Party"
						element={
							<>
								<PreNav></PreNav>
								<Navbar></Navbar>
								<Ordernowparty />
								<Footer></Footer>
							</>
						}
					></Route>
					<Route
						path="/ordernow/indo"
						element={
							<>
								<PreNav></PreNav>
								<Navbar></Navbar>
								<Ordernowindo />
								<Footer></Footer>
							</>
						}
					></Route>
					<Route
						path="/ordernow/success/:id"
						element={
							<>
								<PreNav></PreNav>
								<Navbar></Navbar>
								<OrderSuccess />
								<Footer></Footer>
							</>
						}
					></Route>
					<Route
						path="/sidebar"
						element={
							<>
								<PreNav></PreNav>
								<Navbar></Navbar>
								<Sidebar />
								<Footer></Footer>
							</>
						}
					></Route>

					<Route
						path="/faq_reg"
						element={
							<>
								<PreNav></PreNav>
								<Navbar></Navbar>
								<Faq faqs={faqs} heading={"Registration & Payment"} />
								<Footer></Footer>
							</>
						}
					></Route>
					<Route
						path="/faq_order"
						element={
							<>
								<PreNav></PreNav>
								<Navbar></Navbar>
								<Faq faqs={faqs} heading={"Order &  Customization"} />
								<Footer></Footer>
							</>
						}
					></Route>
					<Route
						path="/faq_deli"
						element={
							<>
								<PreNav></PreNav>
								<Navbar></Navbar>
								<Faq faqs={faqs} heading={"Delivery, Return and refunds"} />
								<Footer></Footer>
							</>
						}
					></Route>
					<Route
						path="/faq_ship"
						element={
							<>
								<PreNav></PreNav>
								<Navbar></Navbar>
								<Faq faqs={faqs} heading={"Shipping and tracking"} />
								<Footer></Footer>
							</>
						}
					></Route>
					<Route
						path="/orderfinish/:type/:name/:d/:m/:y"
						element={
							<>
								<PreNav></PreNav>
								<Navbar></Navbar>
								<OrderFinish />
								<Footer></Footer>
							</>
						}
					></Route>
					<Route
						path="/product/:prodid"
						element={
							<>
								<PreNav></PreNav>
								<Navbar></Navbar>
								<Productpage />
								<Footer></Footer>
							</>
						}
					></Route>
					<Route
						path="/visiting/ecard"
						element={<Evisiting></Evisiting>}
					></Route>
					<Route
						path="*"
						element={<div>{/* <h2>404 Page not found</h2> */}</div>}
					/>
				</Routes>
				{/* <Footer></Footer> */}
			</BrowserRouter>
		</div>
	);
}

export default App;
