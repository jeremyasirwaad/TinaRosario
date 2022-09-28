import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footercontainer">
      <div className="footerinnercontainer">
        <div className="details">
          <h3>Tina Rosaria</h3>
          <div>
            t is a long established fact that a reader will be distracted by the readable content of a page when looking
            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
          </div>
        </div>
        <div className="column collections">
          <p>Collections</p>
          <h4>Gallery</h4>
          <h4>Testimonials</h4>
          <h4>Fabrics</h4>
        </div>
        <div className="column ImpLinks">
          <p>Important links</p>
          <h4>About us</h4>
          <h4>Contact us</h4>
          <h4>FAQ's</h4>
        </div>
        <div className="column links">
          <p>Catch us on</p>
          <div className="footer-links">
            <img src="https://img.icons8.com/cotton/2x/facebook.png" />
            <img src="https://img.icons8.com/cotton/2x/instagram-new.png" />

            <img src="https://img.icons8.com/cotton/2x/twitter.png" />
            <a target="_blank" href="https://api.whatsapp.com/send?phone=8015637209">
              <img src="https://img.icons8.com/color/344/whatsapp--v1.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
