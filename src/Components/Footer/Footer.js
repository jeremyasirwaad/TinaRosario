import React, { forwardRef, useImperativeHandle, useRef } from "react";
import "./Footer.css";
// import logoWeb from "./logoweb.svg";
import logo2 from "./logo2.png";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const childRef = useRef(null);
  const navigate = useNavigate();
  return (
    <div className="footercontainer">
      <div className="footerinnercontainer">
        <div className="fdetails">
          <img className="foot-logo" src={logo2} />
          <div className="footer-text">Let the garms you don, adorn the style within you.</div>
        </div>
        <div className="column collections">
          <p>Collections</p>
          <h4 onClick={() => navigate("/gallerycaro")}>Gallery</h4>
          <h4 onClick={() => navigate("/fabrics")}>Fabrics</h4>
          <h4
            onClick={async () => {
              await navigate("/");
              // document.getElementById("contactusdiv").scrollIntoView();
              document.getElementById("services").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Services
          </h4>
          <h4
            onClick={async () => {
              await navigate("/");
              // document.getElementById("contactusdiv").scrollIntoView();
              document.getElementById("products").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Products
          </h4>
        </div>
        <div className="column ImpLinks">
          <p>Important links</p>
          <h4 onClick={() => navigate("/about")}>About us</h4>
          <h4 onClick={() => navigate("/contact")}>Contact us</h4>
          <h4 onClick={() => navigate("/policies")}>Our Policies</h4>
          <h4 onClick={() => navigate("/terms")}>Terms of Use</h4>
          <h4 onClick={() => navigate("/feedback")}>Feedback</h4>
        </div>
        <div className="column faq">
          <p>FAQ's</p>
          <h4 onClick={() => navigate("/faq_reg", { state: 1 })}>Working Model </h4>
          <h4 onClick={() => navigate("/faq_reg", { state: 2 })}>Pricing & Payment </h4>
          <h4 onClick={() => navigate("/faq_order", { state: 3 })}>Order & Customization</h4>
          <h4 onClick={() => navigate("/faq_deli", { state: 4 })}>Delivery, Return & Refund</h4>
          <h4 onClick={() => navigate("/faq_ship", { state: 5 })}>Shipping & Tracking</h4>
        </div>
        <div className="column links">
          <p>Catch us on</p>
          <div className="footer-links">
            <a href="https://www.facebook.com/people/Tina-Rosario-The-Design-House/100086487516274/">
              <img className="foot-link-logo" src="https://img.icons8.com/cotton/2x/facebook.png" />
            </a>
            <a href="https://www.instagram.com/tina_rosario_the_design_house/?r=nametag">
              <img className="foot-link-logo" src="https://img.icons8.com/cotton/2x/instagram-new.png" />
            </a>
            {/* <a href="">
              <img className="foot-link-logo" src="https://img.icons8.com/cotton/2x/twitter.png" />
            </a> */}
            <a target="_blank" href="https://api.whatsapp.com/send?phone=919916818637">
              <img className="foot-link-wa" src="https://img.icons8.com/color/344/whatsapp--v1.png" />
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
};
