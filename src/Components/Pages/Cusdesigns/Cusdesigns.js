import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import { Navbar } from "../../Navbar/Navbar";
import { Footer } from "../../Footer/Footer";
import "../Wedding.css";
import "../ImageCons/ImageCons.css";
import { TextField } from "@mui/material";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import FormHelperText from "@mui/material/FormHelperText";

import steps from "./3.png";
import smilebar from "./4.png";
import AOS from "aos";
import img1 from "./Group 77.png";
import img2 from "./Group 78.png";
import img3 from "./Group 79.png";
import back from "./Rectangle 70.png";
import "./cusforms.css";
import { LoadingButton } from "@mui/lab";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import FormData from "form-data";

export const Cusdesigns = () => {
  const url = "http://localhost:3001";
  const navigate = useNavigate();
  const [agecat1, setagecat1] = useState(true);
  const [agecat2, setagecat2] = useState(false);
  const [agecat3, setagecat3] = useState(false);

  const [isownfab, setIsownfab] = useState(true);

  const [owndesign, setOwndesign] = useState(true);

  const [value, setValue] = React.useState(dayjs());

  const [imginputloader, setImginputloader] = useState(false);
  const [file, setfile] = useState({});
  const [imageerror, setImageerror] = useState(false);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const [formData, setformData] = useState({
    gender: "",
    ageCategory: 1,
    typeOfAttire: "",
    fabric: "",
    name: "",
    email: "",
    contact: "",
    note: "",
    owndesign: "",
  });

  const fileonchange = (e) => {
    const files = e.target.files;
    const file = files[0];
    setfile(file);
    setImginputloader(true);
    console.log(file);
  };

  const handleFormSubmit = async () => {
    const data = await axios.post(`${url}/formData`, { category: "customized design", ...formData });
    console.log(data);
    if (data) {
      if (data.data.ownDesign == "true") {
        const postImage = async () => {
          let formData = new FormData();
          formData.set("file", file);
          try {
            const result = await axios.post(`${url}/formData/photo/${data.data._id}`, formData, {
              headers: {
                "content-type": "multipart/form-data",
              },
            });
            if (result) {
              console.log(result.data);
              toast("Your response is recorded");
              navigate("/ordernow/success/" + data.data._id);
            }
          } catch (error) {
            console.log("error in posting image", error);
          }
        };
        postImage();
      }
    }
  };

  window.addEventListener("load", () => {
    setfile();
  });

  console.log(formData);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        // backgroundColor: "black"
      }}
    >
      <div className="weddingbanner">
        <div className="weddingbannerinner">
          <span className="wb1">Customized Design</span>
          <span className="wb2">“ Choose us once and be marveled by our commitment and work “</span>
        </div>
      </div>
      <div className="weddingbg">
        <div className="icons">
          <div className="icon-holder">
            <img src={img1} />
            <span>Bored of repeating trends?</span>
          </div>
          <div className="icon-holder">
            <img src={img2} />
            <span>Struggling to find a perfect fit?</span>
          </div>
          <div className="icon-holder">
            <img src={img3} />
            <span>Trouble finding elegant, eco-friendly fabric?</span>
          </div>
        </div>
        <div className="img-row1">
          <img src={back} />
          <p style={{ marginRight: "60px" }}>
            We believe each individual’s notion of style is different. Often choosing the right platform can satiate all
            your needs. Choose THE DESIGN HOUSE to discover it.
          </p>
        </div>

        <div className="steps">
          <img src={steps} />
        </div>
        <div className="steps">
          <img src={smilebar} />
        </div>
        <div style={{}} className="weddingforms imageform">
          <span className="weddingt2">To discuss further, provide your </span>
          <TextField
            className="image-textfield"
            id="outlined-basic"
            label="Who are we styling for ?"
            variant="outlined"
            style={{ width: "500px", marginTop: "30px" }}
            placeholder={"Enter your Gender"}
            value={formData.gender}
            onChange={(e) => setformData({ ...formData, gender: e.target.value })}
          />
          <div className="optionsdiv">
            <span className="optionstitle">Age Category</span>
            <div className="optionsbtndiv">
              <button
                className={agecat1 ? "optionsbtn optionsbtnselected" : "optionsbtn"}
                onClick={() => {
                  setagecat2(false);
                  setagecat3(false);
                  setagecat1(true);
                  setformData({ ...formData, ageCategory: 1 });
                }}
              >
                Below 10
              </button>
              <button
                className={agecat2 ? "optionsbtn optionsbtnselected" : "optionsbtn"}
                style={{ marginLeft: "15px" }}
                onClick={() => {
                  setagecat2(true);
                  setagecat3(false);
                  setagecat1(false);
                  setformData({ ...formData, ageCategory: 2 });
                }}
              >
                11 - 20
              </button>
              <button
                className={agecat3 ? "optionsbtn optionsbtnselected" : "optionsbtn"}
                style={{ marginLeft: "15px" }}
                onClick={() => {
                  setagecat2(false);
                  setagecat3(true);
                  setagecat1(false);
                  setformData({ ...formData, ageCategory: 3 });
                }}
              >
                Above 20
              </button>
            </div>
          </div>
          <TextField
            className="image-textfield"
            id="outlined-basic"
            label="What kind of attire you want customized ?"
            variant="outlined"
            style={{ width: "500px", marginTop: "30px" }}
            placeholder={"Eg: Suit, Lehenga, Gown"}
            value={formData.typeOfAttire}
            onChange={(e) => setformData({ ...formData, typeOfAttire: e.target.value })}
          />
          <div className="optionsdiv">
            <span className="optionstitle">Do you have your own fabric?</span>
            <div className="optionsbtndiv">
              <button
                className={isownfab ? "optionsbtn optionsbtnselected" : "optionsbtn"}
                onClick={() => {
                  setIsownfab(true);
                  setformData({ ...formData, fabric: "own" });
                }}
              >
                Yes
              </button>
              <button
                className={isownfab ? "optionsbtn" : "optionsbtn optionsbtnselected"}
                onClick={() => {
                  setIsownfab(false);
                  setformData({ ...formData, fabric: "provide some options" });
                }}
                style={{ marginLeft: "15px" }}
              >
                Provide some options
              </button>
            </div>
          </div>
          <div className="optionsdiv">
            <span className="optionstitle">Do you have your own design?</span>
            <div className="optionsbtndiv">
              <button
                className={owndesign ? "optionsbtn optionsbtnselected" : "optionsbtn"}
                onClick={() => {
                  setOwndesign(true);
                  setfile();
                  setformData({ ...formData, ownDesign: "true" });
                }}
              >
                Yes
              </button>
              <button
                className={owndesign ? "optionsbtn" : "optionsbtn optionsbtnselected"}
                onClick={() => {
                  setOwndesign(false);
                  setfile();
                  setImginputloader(false);
                  setformData({ ...formData, ownDesign: "false" });
                }}
                style={{ marginLeft: "15px" }}
              >
                Discuss design options
              </button>
            </div>
            <LoadingButton
              // loading={imginputloader}
              style={{ marginTop: "15px" }}
              className={owndesign ? "optionsbtn optionsbtnselected" : "optionsbtn"}
              onClick={() => {
                setOwndesign(true);
              }}
              variant="outlined"
              component="label"
              color={imageerror ? "error" : "primary"}
            >
              {owndesign ? (
                file ? (
                  <i style={{ color: "black" }} class="fa-solid fa-check"></i>
                ) : (
                  "Upload Design"
                )
              ) : (
                "Upload Design"
              )}

              <input
                hidden
                accept="image/*"
                multiple
                type="file"
                onChange={(e) => {
                  setImageerror(false);
                  fileonchange(e);
                }}
              />
            </LoadingButton>
            {/* <button
              style={{ marginTop: "15px" }}
              className={owndesign ? "optionsbtn optionsbtnselected" : "optionsbtn"}
              onClick={() => {
                setOwndesign(true);
              }}
            >
              Upload your design
            </button> */}
          </div>
          {/* <FormHelperText>Eg: Suit, Lehenga, Gown</FormHelperText> */}
          <TextField
            className="image-textfield"
            id="outlined-basic"
            label="Name"
            variant="outlined"
            style={{ width: "500px", marginTop: "30px" }}
            value={formData.name}
            onChange={(e) => setformData({ ...formData, name: e.target.value })}
          />
          <TextField
            className="image-textfield"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            style={{ width: "500px", marginTop: "30px" }}
            value={formData.email}
            onChange={(e) => setformData({ ...formData, email: e.target.value })}
          />
          <TextField
            className="image-textfield datewidth"
            id="outlined-basic"
            label="Contact"
            variant="outlined"
            style={{ marginTop: "30px" }}
            value={formData.contact}
            onChange={(e) => setformData({ ...formData, contact: e.target.value })}
          />
          <TextField
            className="image-textfield datewidth"
            id="outlined-basic"
            label="Special Note"
            variant="outlined"
            style={{ marginTop: "30px" }}
            value={formData.note}
            onChange={(e) => setformData({ ...formData, note: e.target.value })}
          />

          {/* <LocalizationProvider
						dateAdapter={AdapterDayjs}
						className="datewidth"
					>
						<Stack spacing={3} className="datewidth">
							<MobileDatePicker
								className="image-textfield datewidth"
								label="Appointment Date"
								inputFormat="MM/DD/YYYY"
								value={value}
								onChange={handleChange}
								renderInput={(params) => <TextField {...params} />}
								disablePast
							/>
						</Stack>
					</LocalizationProvider> */}
          <button
            style={{ marginBottom: "50px", cursor: "pointer" }}
            className="weddingbookbtn"
            onClick={handleFormSubmit}
          >
            Book
          </button>
        </div>
      </div>
    </div>
  );
};
