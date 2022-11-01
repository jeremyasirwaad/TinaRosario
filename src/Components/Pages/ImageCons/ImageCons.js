import React, { useState } from "react";
import back from "./back.svg";
import "./ImageCons.css";
import img1 from "./img1.svg";
import img2 from "./img2.svg";
import img3 from "./img3.svg";
import steps from "./steps.svg";
import smilebar from "./smilebar.svg";
import { TextField } from "@mui/material";
import dayjs from "dayjs";
import { MobileDatePicker } from "@mui/x-date-pickers";
import { Stack } from "@mui/system";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import axios from "axios";
import validator from "validator";

import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { MuiTelInput } from "mui-tel-input";
const ImageCons = () => {
  const navigate = useNavigate();
  const url = "http://54.226.201.17:8080";
  // const url = "http://localhost:3001";

  const days = dayjs();

  const [dday, setdday] = React.useState(days.format("MM/DD/YYYY"));
  const [appointDate, setappointDate] = React.useState(days.format("MM/DD/YYYY"));

  const [isownfab1, setIsownfab1] = useState(false);
  const [isownfab2, setIsownfab2] = useState(false);

  const selectappoint = (newLocale) => {
    setappointDate(newLocale);
    setformData({
      ...formData,
      appointDate: dayjs(newLocale).format("DD/MM/YYYY"),
    });
  };

  const [formData, setformData] = useState({
    name: "",
    email: "",
    note: "",
    appointDate: appointDate,
    contact: "",
    consPre: "inperson",
    ownDesign: "false",
  });

  const [ConsultingInPerson, setConsultingInPerson] = useState(true);

  const [nameerr, setNameerr] = useState(false);
  const [emailerr, setEmailerr] = useState(false);
  const [contacterr, setContacterr] = useState(false);

  const handleFormSubmit = async () => {
    if (formData.name == "") {
      setNameerr(true);
    }

    if (formData.email == "") {
      setEmailerr(true);
    }
    if (formData.contact == "") {
      setContacterr(true);
    }

    if (!validator.isEmail(formData.email)) {
      setEmailerr(true);
    }

    if (formData.name == "" || formData.email == "" || formData.contact == "" || !validator.isEmail(formData.email)) {
      return 0;
    }
    const data = await axios.post(`${url}/formData`, {
      category: "image consulting",
      ...formData,
    });
    if (data) {
      navigate(`/orderfinish/image/${data.data.name}/${data.data.appointDate}`);
      console.log(data);
    }
  };

  const [contact, setcontact] = React.useState("+91");

  const handleContact = (newValue) => {
    setcontact(newValue);
    setformData({ ...formData, contact: newValue });
  };
  return (
    <div className="imagecons">
      <Toaster />
      <div className="topbar">
        <div className="background">
          <span className="wb1">Image Consulting</span>
          <span className="wb2">"Pride in the new look"</span>
        </div>
      </div>
      <div className="weddingbg">
        <div className="icons">
          <div className="icon-holder">
            <img src={img1} />
            <span>Confused what looks good on you?</span>
          </div>
          <div className="icon-holder">
            <img src={img2} />
            <span>Unsure which dress suits your personality?</span>
          </div>
          <div className="icon-holder">
            <img src={img3} />
            <span>Trouble identifying the right color choices?</span>
          </div>
        </div>
        <div className="img-row">
          <img src={back} />
          <p>
            Come to us, our experienced designer and stylist
            <br /> will guide you to make a fashion statement and
            <br /> enhance your personal, professional and social image.
          </p>
        </div>

        <div className="steps1">
          <img src={steps} />
        </div>
        <div className="steps">
          <img src={smilebar} />
        </div>
        <div style={{}} className="weddingforms imageform">
          <span className="weddingt2">To discuss further, provide your </span>
          <TextField
            id="outlined-basic"
            label="Name"
            error={nameerr}
            value={formData.name}
            onChange={(e) => {
              if (e.target.value != "") {
                setNameerr(false);
              }
              setformData({ ...formData, name: e.target.value });
            }}
            variant="outlined"
            style={{ width: "500px", marginTop: "30px" }}
          />
          <TextField
            error={emailerr}
            id="outlined-basic"
            label="Email"
            value={formData.email}
            onChange={(e) => {
              if (e.target.value != "") {
                setEmailerr(false);
              }

              setformData({ ...formData, email: e.target.value });
            }}
            variant="outlined"
            style={{ width: "500px", marginTop: "30px" }}
          />
          {/* <TextField
            error={contacterr}
            id="outlined-basic"
            label="Contact"
            variant="outlined"
            style={{ width: "500px", marginTop: "30px" }}
            value={formData.contact}
            onChange={(e) => {
              if (e.target.value != "") {
                setContacterr(false);
              }
              setformData({ ...formData, contact: e.target.value });
            }}
          /> */}
          <MuiTelInput
            label="Contact"
            style={{ width: "500px", marginTop: "30px" }}
            value={contact}
            variant="outlined"
            onChange={handleContact}
          />
          <div className="optionsdiv">
            <span className="optionstitle">Consultation preferance ?</span>
            <div className="optionsbtndiv">
              <button
                className={isownfab1 ? "optionsbtn optionsbtnselected" : "optionsbtn"}
                onClick={() => {
                  setIsownfab1(true);
                  setIsownfab2(false);
                  setformData({ ...formData, consPre: "inperson" });
                }}
              >
                In Person
              </button>
              <button
                className={!isownfab2 ? "optionsbtn" : "optionsbtn optionsbtnselected"}
                onClick={() => {
                  setIsownfab2(true);
                  setIsownfab1(false);
                  setformData({ ...formData, consPre: "virtually" });
                }}
                style={{ marginLeft: "15px" }}
              >
                Virtually
              </button>
            </div>
          </div>
          <TextField
            id="outlined-basic"
            label="Any special note	"
            variant="outlined"
            className="datewidth"
            value={formData.note}
            onChange={(e) => setformData({ ...formData, note: e.target.value })}
            style={{ marginTop: "30px" }}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs} className="datewidth">
            <Stack spacing={3} className="datewidth">
              <MobileDatePicker
                label="Appointment Date"
                inputFormat="DD/MM/YYYY"
                value={appointDate}
                onChange={selectappoint}
                renderInput={(params) => <TextField {...params} />}
                className="datewidth"
                disablePast
              />
            </Stack>
          </LocalizationProvider>
          <button
            style={{ cursor: "pointer", marginBottom: "30px" }}
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

export default ImageCons;
