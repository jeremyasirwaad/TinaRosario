import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import Sidebar from "../sidebar/Sidebar";
import HomeIcon from "@mui/icons-material/Home";
import navlogo from "./navlogo.svg";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navcontainer">
      <div className="navinnercontainer">
        <div
          className="navlogocontainer"
          onClick={() => {
            navigate("/");
          }}
        >
          <img style={{ width: "300px", padding: "10px" }} src={navlogo} />
        </div>
        <div className="navoptions">
          <span
            className="navlink1"
            onClick={() => {
              navigate("/");
            }}
          >
            <HomeIcon />
          </span>
          <span
            className="navlink3"
            onClick={() => {
              navigate("/about");
            }}
          >
            About Us
          </span>
          <span
            className="navlink1"
            onClick={() => {
              navigate("/");
            }}
          >
            Gallery
          </span>
          {/* <span
						className="navlink5"
						onClick={() => {
							navigate("/fabrics");
						}}
					>
						Fabrics
					</span> */}
          <span
            onClick={async () => {
              await navigate("/contact");
              // document.getElementById("contactusdiv").scrollIntoView();
              document.getElementById("contactusdiv").scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="navlink4"
          >
            Contact Us
          </span>
          {/* <span className="navlink5">Testimonials</span> */}
          <span
            className="navlink2"
            onClick={async () => {
              await navigate("/");
              // document.getElementById("contactusdiv").scrollIntoView();
              document.getElementById("Landingtesti").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Testimonials
          </span>
        </div>
        <div className="navicons">
          <i class="fa-solid fa-magnifying-glass"></i>
          {/* <i class="fa-solid fa-cart-shopping"></i> */}
          {/* <i class="fa-solid fa-user"></i> */}
        </div>
        <div
          style={{
            "@media (min-width: 800px)": {
              display: "none",
            },
          }}
        >
          <Sidebar />
        </div>
      </div>
    </div>
  );
};
