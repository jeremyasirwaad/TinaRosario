import "./App.css";
import { Landing } from "./Components/Landing/Landing";
import { Navbar } from "./Components/Navbar/Navbar";
import { PreNav } from "./Components/PreNav/PreNav";
import { Marqueeline } from "./Components/Marquee/Marquee";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Wedding } from "./Components/Pages/Wedding";
import { Fabrics } from "./Components/Pages/fabrics/Fabrics";

import Scrolltotop from "./Scrolltotop";

import Sidebar from "./Components/sidebar/Sidebar";

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
import { Terms } from "./Components/Pages/terms/Terms";
import GalleryCaro from "./Components/Pages/GalleryCaro";
import { Weddingcollections } from "./Components/weddingCollections/Weddingcollections";
import { Womanswear } from "./Components/womenswear/Womanswear";
import { Menswear } from "./Components/Menswear/Menswear";
import { Maternity } from "./Components/Maternity/Maternity";
import { Exclusiveaccessory } from "./Components/Exclusiveacc/Exclusiveaccessory";

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
								<Marqueeline />

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
								<Marqueeline />
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
								<Marqueeline />

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
								<Marqueeline />

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
								<Marqueeline />

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
								<Marqueeline />

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
								<Marqueeline />

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
								<Marqueeline />

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
								<Marqueeline />

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
								<Marqueeline />

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
								<Marqueeline />

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
								<Marqueeline />

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
								<Marqueeline />

								<PreNav></PreNav>
								<Navbar></Navbar>
								<Handloom />
								<Footer></Footer>
							</>
						}
					></Route>
					<Route
						path="/weddingproduct"
						element={
							<>
								<Marqueeline />

								<PreNav></PreNav>
								<Navbar></Navbar>
								<Weddingcollections />
								<Footer></Footer>
							</>
						}
					></Route>
					<Route
						path="/Kidswear"
						element={
							<>
								<Marqueeline />

								<PreNav></PreNav>
								<Navbar></Navbar>
								<Kidswear />
								<Footer></Footer>
							</>
						}
					></Route>
					<Route
						path="/womenswear"
						element={
							<>
								<Marqueeline />

								<PreNav></PreNav>
								<Navbar></Navbar>
								<Womanswear />
								<Footer></Footer>
							</>
						}
					></Route>
					<Route
						path="/Menswear"
						element={
							<>
								<Marqueeline />

								<PreNav></PreNav>
								<Navbar></Navbar>
								<Menswear />
								<Footer></Footer>
							</>
						}
					></Route>
					<Route
						path="/Maternity"
						element={
							<>
								<Marqueeline />

								<PreNav></PreNav>
								<Navbar></Navbar>
								<Maternity />
								<Footer></Footer>
							</>
						}
					></Route>
					<Route
						path="/exclusiveaccessories"
						element={
							<>
								<Marqueeline />

								<PreNav></PreNav>
								<Navbar></Navbar>
								<Exclusiveaccessory />
								<Footer></Footer>
							</>
						}
					></Route>
					<Route
						path="/Contact"
						element={
							<>
								<Marqueeline />

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
						path="/sidebar"
						element={
							<>
								<Marqueeline />

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
								<Marqueeline />

								<PreNav></PreNav>
								<Navbar></Navbar>
								<Faq />
								<Footer></Footer>
							</>
						}
					></Route>
					<Route
						path="/faq_order"
						element={
							<>
								<Marqueeline />

								<PreNav></PreNav>
								<Navbar></Navbar>
								<Faq />
								<Footer></Footer>
							</>
						}
					></Route>
					<Route
						path="/faq_deli"
						element={
							<>
								<Marqueeline />

								<PreNav></PreNav>
								<Navbar></Navbar>
								<Faq />
								<Footer></Footer>
							</>
						}
					></Route>
					<Route
						path="/faq_ship"
						element={
							<>
								<Marqueeline />

								<PreNav></PreNav>
								<Navbar></Navbar>
								<Faq />
								<Footer></Footer>
							</>
						}
					></Route>
					<Route
						path="/orderfinish/:type/:name/:d/:m/:y"
						element={
							<>
								<Marqueeline />

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
								<Marqueeline />

								<PreNav></PreNav>
								<Navbar></Navbar>
								<Productpage />
								<Footer></Footer>
							</>
						}
					></Route>
					<Route
						path="/terms"
						element={
							<>
								<Marqueeline /> <PreNav></PreNav>
								<Navbar></Navbar>
								<Terms />
								<Footer></Footer>
							</>
						}
					></Route>
					<Route
						path="/gallerycaro"
						element={
							<>
								<Marqueeline /> <PreNav></PreNav>
								<Navbar></Navbar>
								<GalleryCaro />
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
