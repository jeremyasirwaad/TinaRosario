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

const faqs = [
  {
    q: "How to place an order?",
    a: "' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blanditleo lobortis eget'",
  },
  {
    q: "How to place an order?",
    a: "' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blanditleo lobortis eget'",
  },
  {
    q: "How to place an order?",
    a: "' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blanditleo lobortis eget'",
  },
  {
    q: "How to place an order?",
    a: "' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blanditleo lobortis eget'",
  },
  {
    q: "How to place an order?",
    a: "' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blanditleo lobortis eget'",
  },
  {
    q: "How to place an order?",
    a: "' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blanditleo lobortis eget'",
  },
];

function App() {
  return (
    <div className="App">
      <PreNav></PreNav>
      <BrowserRouter>
        <Scrolltotop></Scrolltotop>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/wedding" element={<Wedding />}></Route>
          <Route path="/fabrics" element={<Fabrics />}></Route>
          <Route path="/customiseddesigns" element={<Cusdesigns />}></Route>
          <Route path="/imagecons" element={<ImageCons />}></Route>
          <Route path="/getpampered" element={<Getpampered />}></Route>
          <Route path="/policies" element={<Policies />}></Route>

          <Route path="/Contact" element={<Contactus></Contactus>}>
            {" "}
          </Route>
          <Route path="/ordernow/wedding" element={<Ordernow />}></Route>
          <Route path="/ordernow/Ethnic" element={<OrdernowEthinic />}></Route>
          <Route path="/ordernow/Party" element={<Ordernowparty />}></Route>
          <Route path="/ordernow/indo" element={<Ordernowindo />}></Route>
          <Route path="/ordernow/success/:id" element={<OrderSuccess />}></Route>
          <Route path="/sidebar" element={<Sidebar />}></Route>

          <Route path="/faq_reg" element={<Faq faqs={faqs} heading={"Registration & Payment"} />}></Route>
          <Route path="/faq_order" element={<Faq faqs={faqs} heading={"Order &  Customization"} />}></Route>
          <Route path="/faq_deli" element={<Faq faqs={faqs} heading={"Delivery, Return and refunds"} />}></Route>
          <Route path="/faq_ship" element={<Faq faqs={faqs} heading={"Shipping and tracking"} />}></Route>
          <Route path="/orderfinish/:type/:name/:d/:m/:y" element={<OrderFinish />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
