import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import "./Wedding.css";
import { TextField } from "@mui/material";
import dayjs from "dayjs";
import validator from "validator";
import Stack from "@mui/material/Stack";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

import img1 from "./Group 36 (1).svg";
import AOS from "aos";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
export const Wedding = () => {
  const url = "http://54.226.201.17:8080";
  // const url = "http://localhost:3001";
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const days = dayjs();

  const [dday, setdday] = React.useState(days.format("MM/DD/YYYY"));
  const [appointDate, setappointDate] = React.useState(days.format("MM/DD/YYYY"));

  const selectdday = (newLocale) => {
    setdday(newLocale);
    setformData({ ...formData, dday: dayjs(newLocale).format("DD/MM/YYYY") });
  };

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
    dday: dday,
    note: "",
    appointDate: appointDate,
    contact: "",
  });

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
      category: "wedding collection",
      ...formData,
    });
    if (data) {
      navigate(`/orderfinish/wedding/${data.data.name}/${data.data.appointDate}`);
      toast.success("Thank you! Your response if saved with us!");
      console.log(data);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",

        backgroundColor: "black",
      }}
    >
      <Toaster />
      <div className="weddingbanner">
        <div className="weddingbannerinner">
          <span className="wb1">Wedding Collections</span>
          <span className="wb2">
            As you hold hands and shine together and promise to live as one forever, you need to look your best as
            you've always dreamt.
          </span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className="weddingbg"
      >
        <div className="wedsec1" style={{ marginTop: "100px" }}>
          <div className="wedsec1img">
            <img src={img1} alt="" />
          </div>

          <div className="wedsec1cont">
            <span>
              We understand wedding chores could overwhelm you,<br/> Here we are to take off your burden of how you're going
              to look.
            </span>
            
          </div>
        </div>
        <div className="wedsec2">
          <div className="wedsec1img">
            <img src={img1} alt="" />
          </div>

          <div className="wedsec2cont">Get in touch and allow us to unfold your dream attire</div>
        </div>
        <div className="wedsec1" style={{ marginTop: "80px" }}>
          <div className="wedsec1img">
            <img src={img1} alt="" />
          </div>

          <div className="wedsec1cont">
            A few ounces of personal attention along with some love and care. We assure you a perfect attire that'll be
            spoken about, forever.
          </div>
        </div>
        <div className="weddingforms">
          <span className="weddingt2">To discuss further, provide your </span>
          <TextField
            id="outlined-basic"
            label="Name"
            value={formData.name}
            error={nameerr}
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
            id="outlined-basic"
            label="Email"
            error={emailerr}
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
          <TextField
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
          />
          <LocalizationProvider dateAdapter={AdapterDayjs} className="datewidth">
            <Stack spacing={3} className="datewidth">
              <MobileDatePicker
                label="When is the big day ?"
                inputFormat="DD/MM/YYYY"
                value={dday}
                onChange={selectdday}
                renderInput={(params) => <TextField {...params} />}
                className="datewidth"
                disablePast
              />
            </Stack>
          </LocalizationProvider>
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
          <button style={{ cursor: "pointer" }} className="weddingbookbtn" onClick={handleFormSubmit}>
            Book
          </button>
        </div>
      </div>
    </div>
  );
};
