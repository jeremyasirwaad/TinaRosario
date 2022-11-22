import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import Sidebar from "../sidebar/Sidebar";
import HomeIcon from "@mui/icons-material/Home";
import navlogo from "./navlogo.svg";
import Select from "react-select";
import searchoptions from "./searchoptions.json";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineArrowRight } from "react-icons/ai";
import sidenav1 from "./sidenav.png";
import ham from "./ham.svg";
import logo2 from "./logo2.jpg";
export const Navbar = () => {
  const navigate = useNavigate();
  const [sidenav, setSidenav] = useState(false);

  // const searchoptions = [
  //   { value: "Kurta", label: "Kurta" },
  //   { value: "Saree", label: "Saree" },
  //   { value: "Lehenga", label: "Lehenga" },
  //   { value: "Dress", label: "Dress" },
  //   { value: "vanilla", label: "Handloom dress" },
  //   { value: "vanilla", label: "Pant" },
  //   { value: "vanilla", label: "Shirt" },
  //   { value: "vanilla", label: "Trouser" },
  //   { value: "vanilla", label: "Blouse,Designer blouses" },
  //   { value: "vanilla", label: "Aari work" },
  //   { value: "vanilla", label: "Dresses" },
  //   { value: "vanilla", label: "Accessories" },
  //   { value: "vanilla", label: "Blazer" },
  //   { value: "vanilla", label: "Customised clothes" },
  //   { value: "vanilla", label: "Ready made garments" },
  //   { value: "vanilla", label: "Chanderi" },
  //   { value: "vanilla", label: "Cotton" },
  //   { value: "vanilla", label: "Umberalla cut" },
  //   { value: "vanilla", label: "Bridegroom" },
  //   { value: "vanilla", label: "Wedding" },
  // ];

  return (
    <div className="navcontainer">
      <div className="resnav">
        <div className={sidenav ? "showsidenav sidenavbarcustom" : "sidenavbarcustom"}>
          <div
            className="closearrow"
            onClick={() => {
              console.log("hii");
              setSidenav(false);
            }}
          >
            <AiOutlineArrowRight />
          </div>
          <div
            className="slidebarlogo"
            onClick={() => {
              navigate("/");
              setSidenav(false);
            }}
          >
            <img style={{ cursor: "pointer" }} src={sidenav1} />
          </div>
          <div className="search">
            <Select
              placeholder="I feel"
              options={searchoptions}
              onChange={(e) => {
                if (e.value == "Coupled") {
                  navigate("/Weddingproduct");
                }
                if (e.value == "Like wearing a Saree") {
                  navigate("/handloom");
                }
                if (e.value == "Like Accessorizing") {
                  navigate("/exclusiveaccessories");
                }
                if (e.value == "Dictated") {
                  navigate("/kidswear");
                }
                if (e.value == "Masculine") {
                  navigate("/Masculine");
                }
                if (e.value == "Feminine") {
                  navigate("/Feminine");
                }
                if (e.value == "Traditional") {
                  navigate("/traditional");
                }
                if (e.value == "Accessories") {
                  navigate("/exclusiveaccessories");
                }
                if (e.value == "Hoodies") {
                  navigate("/Menswear");
                }
                if (e.value == "T- Shirt") {
                  navigate("/Menswear");
                }
                if (e.value == "Kids' Collection") {
                  navigate("/kidswear");
                }
                if (e.value == "Blazer") {
                  navigate("/DesignerCollections");
                }
                if (e.value == "Salwar") {
                  navigate("/womenswear");
                }
                if (e.value == "Western wear") {
                  navigate("/womenswear");
                }
                if (e.value == "Gown") {
                  navigate("/womenswear");
                }
                if (e.value == "blouse") {
                  navigate("/womenswear");
                }
                if (e.value == "Men's Collection") {
                  navigate("/Menswear");
                }
                if (e.value == "Women's Collection") {
                  navigate("/womenswear");
                }
                if (e.value == "Pant") {
                  navigate("/DesignerCollections");
                }
                if (e.value == "Skirt") {
                  navigate("/DesignerCollections");
                }
              }}
            ></Select>
          </div>
          <span
            className="sidebarlinks"
            onClick={() => {
              navigate("/");
              setSidenav(false);
            }}
          >
            Home
          </span>
          <span
            className="sidebarlinks"
            onClick={() => {
              navigate("/about");
              setSidenav(false);
            }}
          >
            About Us
          </span>
          <span
            className="sidebarlinks"
            onClick={() => {
              navigate("/gallerycaro");
              setSidenav(false);
            }}
          >
            Gallery
          </span>
          <span
            className="sidebarlinks"
            onClick={async () => {
              await navigate("/");
              // document.getElementById("contactusdiv").scrollIntoView();
              document.getElementById("services").scrollIntoView({
                behavior: "smooth",
              });
              setSidenav(false);
            }}
          >
            Services
          </span>
          <span
            className="sidebarlinks"
            onClick={async () => {
              await navigate("/");
              // document.getElementById("contactusdiv").scrollIntoView();
              document.getElementById("products").scrollIntoView({
                behavior: "smooth",
              });
              setSidenav(false);
            }}
          >
            Products
          </span>
          <span
            className="sidebarlinks"
            onClick={async () => {
              await navigate("/");
              // document.getElementById("contactusdiv").scrollIntoView();
              document.getElementById("Landingtesti").scrollIntoView({
                behavior: "smooth",
              });
              setSidenav(false);
            }}
          >
            Testimonials
          </span>
          <span
            className="sidebarlinks"
            onClick={async () => {
              await navigate("/contact");
              // document.getElementById("contactusdiv").scrollIntoView();
              document.getElementById("contactusdiv").scrollIntoView({
                behavior: "smooth",
              });
              setSidenav(false);
            }}
          >
            Contact Us
          </span>
        </div>
        <div className="navinnercontainer1">
          <div
            onClick={async () => {
              await navigate("/");
            }}
            className="navlogo"
          >
            <img src={navlogo} />
          </div>
          <div
            onClick={() => {
              setSidenav(true);
            }}
            className="hamburger"
          >
            <img src={ham} />
            <p>Menu</p>
          </div>
        </div>
      </div>
      <div className="resnav2">
        <div className="navinnercontainer2">
          <div
            className="navlogocontainer"
            onClick={() => {
              navigate("/");
            }}
          >
            <img style={{ width: "300px", padding: "10px", cursor: "pointer" }} src={logo2} />
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
                navigate("/gallerycaro");
              }}
            >
              Gallery
            </span>
            <span
              className="navlink5"
              onClick={async () => {
                await navigate("/");
                // document.getElementById("contactusdiv").scrollIntoView();
                document.getElementById("services").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Services
            </span>
            <span
              className="navlink5"
              onClick={async () => {
                await navigate("/");
                // document.getElementById("contactusdiv").scrollIntoView();
                document.getElementById("products").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Products
            </span>
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
            <span className="navlink5">Testimonials</span>
          </div>
          <div className="navicons">
            <i class="fa-solid fa-magnifying-glass" style={{ marginRight: "10px" }}></i>
            <div style={{ width: "100%" }}>
              <Select
                placeholder="Search"
                options={searchoptions}
                onChange={(e) => {
                  if (e.value == "Saree") {
                    navigate("/handloom");
                  }
                  if (e.value == "Kurta") {
                    navigate("/womenswear");
                  }
                  if (e.value == "Lehanga") {
                    navigate("/DesignerCollections");
                  }
                  if (e.value == "Dress") {
                    navigate("/DesignerCollections");
                  }
                  if (e.value == "Handloom") {
                    navigate("/handloom");
                  }
                  if (e.value == "Shirt") {
                    navigate("/Menswear");
                  }
                  if (e.value == "Accessories") {
                    navigate("/exclusiveaccessories");
                  }
                  if (e.value == "Hoodies") {
                    navigate("/Menswear");
                  }
                  if (e.value == "T- Shirt") {
                    navigate("/Menswear");
                  }
                  if (e.value == "Kids' Collection") {
                    navigate("/kidswear");
                  }
                  if (e.value == "Blazer") {
                    navigate("/DesignerCollections");
                  }
                  if (e.value == "Salwar") {
                    navigate("/womenswear");
                  }
                  if (e.value == "Western wear") {
                    navigate("/womenswear");
                  }
                  if (e.value == "Gown") {
                    navigate("/womenswear");
                  }
                  if (e.value == "blouse") {
                    navigate("/womenswear");
                  }
                  if (e.value == "Men's Collection") {
                    navigate("/Menswear");
                  }
                  if (e.value == "Women's Collection") {
                    navigate("/womenswear");
                  }
                  if (e.value == "Pant") {
                    navigate("/DesignerCollections");
                  }
                  if (e.value == "Skirt") {
                    navigate("/DesignerCollections");
                  }
                }}
              ></Select>
            </div>
          </div>
          {/* <GiHamburgerMenu
            className="hamburger"
            onClick={() => {
              setSidenav(true);
            }}
            style={{ fontSize: "30px" }}
            size="30"
          /> */}
        </div>
      </div>
    </div>
  );
};
