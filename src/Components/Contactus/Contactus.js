import React, { useState } from "react";

import "./contact.css";
import { TextField } from "@mui/material";
// import { MuiTelInput } from "mui-tel-input";

import logoforcontact from "./Frame.png";
import indflag from "./Flag_of_India.png";
import usflag from "./2560px-Flag_of_the_United_States.svg.png";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import validator from "validator";
import { MuiTelInput } from "mui-tel-input";

const backendUrl = "http://3.88.157.171:8080";
// const backendUrl = "http://localhost:3001";

export const Contactus = () => {
  const notify = () => toast.success("Message sent successfully");
  const notify1 = () =>
    toast("Message sent already", {
      icon: "👍",
    });

  const [contact, setContact] = useState({
    name: "",
    email: "",
    contact: "",
    note: "",
  });
  const [mailSent, setmailSent] = useState(false);

  const [nameerror, setnameerror] = useState(false);
  const [emailerror, setemailerror] = useState(false);
  const [contacterror, setContacterror] = useState(false);

  const sendMessage = async () => {
    if (contact.name == "") {
      setnameerror(true);
    }
    if (contact.email == "") {
      setemailerror(true);
    }
    if (contact.contact == "") {
      setContacterror(true);
    }
    if (!validator.isEmail(contact.email)) {
      setemailerror(true);
    }
    if (contact.name == "" || contact.email == "" || contact.contact == "" || !validator.isEmail(contact.email)) {
      return;
    }

    const result = await axios
      .post(`${backendUrl}/mail`, {
        from: contact.email,
        to: "design@tinarosario.com",
        subject: `Mail from ${contact.name} - ${contact.email} `,
        text: `Sender's Mail - ${contact.email} \nSender Contact - ${contact.contact} \n\n Note: \n ${contact.note}`,
        userName: contact.name,
      })
      .then((data) => {
        if (data.status) {
          setmailSent(true);
          notify();
        }
      });
    // if (result.data.status) {
    // 	setmailSent(true);
    // }
  };
  // useEffect(() => {
  // 	if (mailSent == true) {
  // 		setTimeout(() => {
  // 			setmailSent(false);
  // 		}, 5000);
  // 	}
  // }, [mailSent]);
  const [value, setValue] = React.useState("+91");

  const handleChange = (newValue) => {
    setValue(newValue);
    setContact({ ...contact, contact: newValue });
  };
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  React.useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  return (
    <div className="contactuspage">
      <div
        style={{ minHeight: "250px", maxHeight: "600px", width: "100%", height: width - height + 420 }}
        className="weddingbanner"
      >
        <img
          style={{ width: "100%", height: "100%" }}
          src="https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20720.png?alt=media&token=246930de-5f92-4014-b256-93983bcd27d1"
        />
      </div>
      <div className="bgcontact">
        <div className="mainsection">
          <div className="mainsectionleft">
            <span className="msl1">Get in Touch</span>

            <img className="clogo" style={{ marginTop: "50px" }} src={logoforcontact} alt="" />
            <span className="msl3">THE DESIGN HOUSE</span>
            <div className="loca">
              <div className="locainner">
                <i class="fa-solid fa-location-pin"></i>
                <span>
                  112A Nehru Street
                  <br /> Alwar Thiru Nagar
                  <br /> Chennai 600087
                </span>
                <br />
              </div>
              <div className="locainner">
                <i class="fa-solid fa-phone"></i>
                <div className="locainner2">
                  <div>
                    <img src={indflag} alt="" />
                    <span>+91 7200060540</span>
                  </div>
                  <div>
                    <img src={usflag} alt="" />
                    <span>+1 412-251-1363</span>
                  </div>
                </div>
              </div>
              <div className="locainner">
                <a
                  target="_blank"
                  style={{ textDecoration: "none" }}
                  href="https://api.whatsapp.com/send?phone=919916818637"
                >
                  <i class="fa-brands fa-whatsapp"></i>
                  <span>+91 9916818637</span>
                </a>
              </div>
              <div className="locainner">
                <i class="fa-regular fa-envelope"></i>
                <span> design@tinarosario.com</span>
              </div>
            </div>
          </div>
          <div className="mainsectionright">
            <div className="mainsecheader">
              <span>Write to Us</span>
            </div>
            <TextField
              label="Name *"
              color="primary"
              value={contact.name}
              onChange={(e) => {
                if (e.target.value != "") {
                  setnameerror(false);
                }
                setContact({ ...contact, name: e.target.value });
              }}
              error={nameerror}
            />
            <TextField
              label="Email *"
              color="primary"
              value={contact.email}
              error={emailerror}
              onChange={(e) => {
                if (e.target.value != "") {
                  setemailerror(false);
                }
                setContact({ ...contact, email: e.target.value });
              }}
            ></TextField>
            {/* <TextField
              error={contacterror}
              color="primary"
              label="Contact Number"
              value={contact.contact}
              onChange={(e) => {
              if (e.target.value != "") {
                  setContacterror(false);
                }
                setContact({ ...contact, contact: e.target.value });
              }}

              // placeholder="If any"

              // defaultValue="Default Value"
            /> */}
            <MuiTelInput label="Contact *" value={value} onChange={handleChange} />

            <TextField
              color="primary"
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={5}
              value={contact.note}
              onChange={(e) => {
                setContact({ ...contact, note: e.target.value });
              }}
              // placeholder="If any"

              // defaultValue="Default Value"
            />
            <p style={{ color: "#270641" }}>* Mandatory Fields</p>
            {mailSent ? (
              <button className="contactsend" onClick={notify1}>
                <i class="fa-solid fa-check"></i>{" "}
              </button>
            ) : (
              <button className="contactsend" onClick={sendMessage}>
                Send Message
              </button>
            )}
          </div>
        </div>
      </div>

      <Toaster />
    </div>
  );
};
