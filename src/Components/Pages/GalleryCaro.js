import React, { useState, useEffect } from "react";
import "./GalleryCaro.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import MoonLoader from "react-spinners/ClipLoader";
import { padding } from "@mui/system";

const GalleryCaro = () => {
  const [loading, setLoading] = useState(true);
  const [pagedata, setPagedata] = useState([]);

  const getdata = async () => {
    const data = await fetch("https://tinarosario.com/api/Gallery-images")
      .then((res) => res.json())
      .then((result) => {
        // console.log(result.data[0].attributes.galleryimages.gallery);
        const temp = result.data[0].attributes.galleryimages.gallery;
        setPagedata(temp);
        setLoading(false);
      });
  };
  console.log(pagedata);

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="galleryCont">
      {loading ? (
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <MoonLoader color="#4C2A76" size={50} />
        </div>
      ) : (
        <div className="galleryCont">
          <h2 className="gallerytitle">By the House</h2>
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
            style={{
              marginBottom: "120px",
              marginTop: "30px",
              backgroundColor: "#270641",
              padding: "20px",
            }}
          >
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="innercarodiv">
                  {" "}
                  <img className="caroImg" src={pagedata[0]} alt="First slide" />
                </div>
              </div>
              {pagedata.slice(1, pagedata.length).map((img) => {
                return (
                  <div class="carousel-item">
                    <div className="innercarodiv">
                      <img className="caroImg" src={img} alt="Second slide" />
                    </div>
                  </div>
                );
              })}
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span style={{ color: "white" }} class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span style={{ color: "white" }} class="sr-only">
                Previous
              </span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span
                style={{ color: "white" }}
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span style={{ color: "white" }} class="sr-only">
                Next
              </span>
            </a>
          </div>

        </div>
      )}
    </div>
  );
};

export default GalleryCaro;
