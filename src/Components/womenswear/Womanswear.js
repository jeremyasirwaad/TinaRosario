import React, { useState, useEffect } from "react";
import "./DesignerCollections.css";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import rectimg from "./Rectimg.svg";
import { Prodcard } from "./Prodcard";
import MoonLoader from "react-spinners/ClipLoader";
import { height } from "@mui/system";

export const Womanswear = () => {
  const [subcatoptions, setSubcatoptions] = useState(false);
  const [subpriceoptions, setSubpriceoptions] = useState(true);
  const [subfabric, setSubfabric] = useState(true);
  const [subcolor, setSubcolor] = useState(true);
  const [pagedata, setPagedata] = useState([]);
  const [loading, setLoading] = useState(true);

  const getdata = async () => {
    const data = await fetch("http://products.tinarosario.com/api/Products")
      .then((res) => res.json())
      .then((result) => {
        const temp = result.data;
        const data = temp.filter((e) => e.attributes.Main_Category == "Women's Wear");
        setPagedata(data);
        setLoading(false);
      });
  };
  console.log(pagedata);

  useEffect(() => {
    getdata();
  }, []);

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
              <span className="subinnertitle">Sub-Categories</span>

              <i class={subcatoptions ? "fa-solid fa-chevron-up rotate" : "fa-solid fa-chevron-up "}></i>
            </div>
            <div className={subcatoptions ? "fildiv displaynone" : "fildiv"}></div>
            <div className={subcatoptions ? "fliterchoicediv displaynone" : "fliterchoicediv"}>
              <div className="fliterchoice" style={{ marginTop: "10px" }}>
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Lehenga</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Gown</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Dress</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Blouse</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Anarkali</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Salwar Kameez</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Chudidhar</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Kurtha</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Half-saree</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Pavadai Sattai</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Frock</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Skirt</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Sherwani</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Suit</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Over-coat</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Blazer</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Pant</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Trouser</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Short</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Shirt</span>
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

              <i class={subpriceoptions ? "fa-solid fa-chevron-up rotate" : "fa-solid fa-chevron-up "}></i>
            </div>
            <div className={subpriceoptions ? "fildiv displaynone" : "fildiv"}></div>
            <div className={subpriceoptions ? "fliterchoicediv displaynone" : "fliterchoicediv"}>
              <div className="fliterchoice" style={{ marginTop: "10px" }}>
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Less than 5000</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>5001 - 10000</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>10,001-15,000</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>15,001 - 20,000</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>More than 20,000</span>
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

              <i class={subfabric ? "fa-solid fa-chevron-up rotate" : "fa-solid fa-chevron-up "}></i>
            </div>
            <div className={subfabric ? "fildiv displaynone" : "fildiv"}></div>
            <div className={subfabric ? "fliterchoicediv displaynone" : "fliterchoicediv"}>
              <div className="fliterchoice" style={{ marginTop: "10px" }}>
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Cotton</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Linen</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Handloom</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Chanderi</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Khadi</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Flannel</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Banana Silk</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Jute</span>
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

              <i class={subcolor ? "fa-solid fa-chevron-up rotate" : "fa-solid fa-chevron-up "}></i>
            </div>
            <div className={subcolor ? "fildiv displaynone" : "fildiv"}></div>
            <div className={subcolor ? "fliterchoicediv displaynone" : "fliterchoicediv"}>
              <div className="fliterchoice" style={{ marginTop: "10px" }}>
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>White</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Black</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Gold</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Silver</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Shades of Red</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Shades of Orange</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Shades of Green</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Shades of Yellow</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Shades of Blue</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Shades of Purple</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Shades of Pink</span>
              </div>
              <div className="fliterchoice">
                <input type="radio" />
                <span style={{ marginLeft: "10px", marginTop: "2px" }}>Shades of Grey</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="prodpage">
        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
          <span className="prodpaget1">Women's Wear - </span>
          <span className="prodpaget2">"Specially designed to enhance your style"</span>
        </div>
        {loading ? (
          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              height: "30vh",
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
                  description={data.attributes.description}
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
