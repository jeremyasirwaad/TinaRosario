import React, { useState } from "react";
import "./feedback.css";
import face1 from "./greenface.svg";
import face2 from "./yellowface.svg";
import face3 from "./orangeface.svg";
import face4 from "./deeporange.svg";
import face5 from "./red.svg";
import StarRatings from "react-star-ratings";
import FormData from "form-data";
import validator from "validator";
import toast, { Toaster } from "react-hot-toast";
import { LoadingButton } from "@mui/lab";
import axios from "axios";

export const Feedback = () => {
  const backendUrl = "http://54.226.201.17:8080";
  const [rating, setRating] = useState(0);
  const [file, setfile] = useState();
  const [imageerror, setImageerror] = useState(false);
  const [imginputloader, setImginputloader] = useState(false);
  const changerating = (data) => {
    setRating(data);
  };
  console.log(rating);

  const [formData, setformData] = useState({
    name: "",
    email: "",
    feedback: "",
    contact: "",
    image: "",
    design: 0,
    creativity: 0,
    fit: 0,
    quality: 0,
    timeline: 0,
    response: 0,
  });
  console.log(file);
  const fileonchange = (e) => {
    const files = e.target.files;
    const file = files[0];
    setfile(file);
    setImginputloader(true);
    console.log(file);
  };

  const [nameerr, setNameerr] = useState(false);
  const [emailerr, setEmailerr] = useState(false);
  const [feedbackerr, setfeedbackerr] = useState(false);

  const handleFormSubmit = async () => {
    if (formData.name == "") {
      setNameerr(true);
    }

    if (formData.email == "") {
      setEmailerr(true);
    }

    if (formData.feedback == "") {
      setfeedbackerr(true);
    }

    if (!validator.isEmail(formData.email)) {
      setEmailerr(true);
    }

    // if (formData.ownDesign == "true") {
    //   if (file == undefined || file == null) {
    //     toast.error("Upload Design");
    //     return 0;
    //   }
    // }

    if (
      formData.design == 0 ||
      formData.creativity == 0 ||
      formData.timeline == 0 ||
      formData.fit == 0 ||
      formData.quality == 0 ||
      formData.response == 0 ||
      rating == 0
    ) {
      toast.error("Please fill in all fields");
      return 0;
    }

    if (formData.name == "" || formData.email == "" || formData.feedback == "" || !validator.isEmail(formData.email)) {
      return 0;
    }

    const data = await axios.post(`${backendUrl}/feedback`, formData);
    console.log(data);
    if (data) {
      if (data.data.image == "yes") {
        const postImage = async () => {
          let formData = new FormData();
          formData.set("file", file);
          try {
            const result = await axios.post(`${backendUrl}/feedback/photo/${data.data._id}`, formData, {
              headers: {
                "content-type": "multipart/form-data",
              },
            });
            if (result) {
              console.log(result.data);
              //   toast.success("image uploaded with data");
              //   navigate(`/orderfinish/customized/${data.data.name}/d/m/y`);
            }
          } catch (error) {
            console.log("error in posting image", error);
          }
        };
        postImage();
      }
      toast.success("Thank you for your feedback");
      setformData({
        name: "",
        email: "",
        feedback: "",
        contact: "",
        image: "",
        design: 0,
        creativity: 0,
        fit: 0,
        quality: 0,
        timeline: 0,
        response: 0,
      });
      setfile();
      //   navigate(`/orderfinish/customized/${data.data.name}/d/m/y`);
    }
  };

  console.log(formData);

  return (
    <div className="feedback_page">
      <Toaster />
      <div className="feedbackinner">
        <span className="feedbackt1">Drop your Feedbacks</span>
        <span className="feedbackt2">We value your opinion, it makes us better!</span>
        <div className="feedback_div">
          <span className="feedsub1">Name</span>
          <input
            style={{ border: nameerr ? "2px solid red" : "none" }}
            value={formData.name}
            onChange={(e) => {
              if (e.target.value != "") {
                setNameerr(false);
              }
              setformData({ ...formData, name: e.target.value });
            }}
            type="text"
            className="feedbackinput1"
          />
          <span className="feedsub2">Email</span>
          <input
            style={{ border: emailerr ? "2px solid red" : "none" }}
            value={formData.email}
            onChange={(e) => {
              if (e.target.value != "") {
                setEmailerr(false);
              }
              setformData({ ...formData, email: e.target.value });
            }}
            type="text"
            className="feedbackinput1"
          />
          <span className="feedsub2">Feedback</span>
          <input
            style={{ border: feedbackerr ? "2px solid red" : "none" }}
            value={formData.feedback}
            onChange={(e) => {
              if (e.target.value != "") {
                setfeedbackerr(false);
              }
              setformData({ ...formData, feedback: e.target.value });
            }}
            type="text"
            className="feedbackinput2"
          />

          <div className="optionsbtndiv"></div>
          <span className="feedsub2">Your Picture(Opitonal)</span>
          <LoadingButton
            // loading={imginputloader}
            style={{ marginTop: "15px" }}
            // className={owndesign1 ? "optionsbtn optionsbtnselected" : "optionsbtn"}
            onClick={() => {}}
            className="feedupbtn"
            variant="outlined"
            component="label"
            color={imageerror ? "error" : "primary"}
          >
            {file ? <i style={{ color: "black" }} class="fa-solid fa-check"></i> : "Upload Image"}

            <input
              hidden
              accept="image/*"
              multiple
              type="file"
              onChange={(e) => {
                setImageerror(false);
                fileonchange(e);
                setformData({ ...formData, image: "yes" });
              }}
            />
          </LoadingButton>

          <span className="feedsub2">Rating</span>
          <div className="feedbratediv">
            <div className="feedbrateddivinner2">
              <span></span>
              <div className="innerradfeed">
                <img src={face1} alt="" />
                <img src={face2} alt="" />
                <img src={face3} alt="" />
                <img src={face4} alt="" />
                <img src={face5} alt="" />
              </div>
            </div>
            <div className="feedbrateddivinner">
              <span>Design</span>
              <div className="innerradfeed">
                <input value={1} onChange={() => setformData({ ...formData, design: 1 })} type="radio" name="design" />
                <input value={2} onChange={() => setformData({ ...formData, design: 2 })} type="radio" name="design" />
                <input value={3} onChange={() => setformData({ ...formData, design: 3 })} type="radio" name="design" />
                <input value={4} onChange={() => setformData({ ...formData, design: 4 })} type="radio" name="design" />
                <input value={5} onChange={() => setformData({ ...formData, design: 5 })} type="radio" name="design" />
              </div>
            </div>
            <div className="feedbrateddivinner">
              <span>Creativity</span>
              <div className="innerradfeed">
                <input
                  value={1}
                  onChange={() => setformData({ ...formData, creativity: 1 })}
                  type="radio"
                  name="creativity"
                />
                <input
                  value={2}
                  onChange={() => setformData({ ...formData, creativity: 2 })}
                  type="radio"
                  name="creativity"
                />
                <input
                  value={3}
                  onChange={() => setformData({ ...formData, creativity: 3 })}
                  type="radio"
                  name="creativity"
                />
                <input
                  value={4}
                  onChange={() => setformData({ ...formData, creativity: 4 })}
                  type="radio"
                  name="creativity"
                />
                <input
                  value={5}
                  onChange={() => setformData({ ...formData, creativity: 5 })}
                  type="radio"
                  name="creativity"
                />
              </div>
            </div>
            <div className="feedbrateddivinner">
              <span>Fit</span>
              <div className="innerradfeed">
                <input value={1} onChange={() => setformData({ ...formData, fit: 1 })} type="radio" name="fit" />
                <input value={2} onChange={() => setformData({ ...formData, fit: 2 })} type="radio" name="fit" />
                <input value={3} onChange={() => setformData({ ...formData, fit: 3 })} type="radio" name="fit" />
                <input value={4} onChange={() => setformData({ ...formData, fit: 4 })} type="radio" name="fit" />
                <input value={5} onChange={() => setformData({ ...formData, fit: 5 })} type="radio" name="fit" />
              </div>
            </div>
            <div className="feedbrateddivinner">
              <span>Quality</span>
              <div className="innerradfeed">
                <input
                  value={1}
                  onChange={() => setformData({ ...formData, quality: 1 })}
                  type="radio"
                  name="quality"
                />
                <input
                  value={2}
                  onChange={() => setformData({ ...formData, quality: 2 })}
                  type="radio"
                  name="quality"
                />
                <input
                  value={3}
                  onChange={() => setformData({ ...formData, quality: 3 })}
                  type="radio"
                  name="quality"
                />
                <input
                  value={4}
                  onChange={() => setformData({ ...formData, quality: 4 })}
                  type="radio"
                  name="quality"
                />
                <input
                  value={5}
                  onChange={() => setformData({ ...formData, quality: 5 })}
                  type="radio"
                  name="quality"
                />
              </div>
            </div>
            <div className="feedbrateddivinner">
              <span>Timeline</span>
              <div className="innerradfeed">
                <input
                  value={1}
                  onChange={() => setformData({ ...formData, timeline: 1 })}
                  type="radio"
                  name="timeline"
                />
                <input
                  value={2}
                  onChange={() => setformData({ ...formData, timeline: 2 })}
                  type="radio"
                  name="timeline"
                />
                <input
                  value={3}
                  onChange={() => setformData({ ...formData, timeline: 3 })}
                  type="radio"
                  name="timeline"
                />
                <input
                  value={4}
                  onChange={() => setformData({ ...formData, timeline: 4 })}
                  type="radio"
                  name="timeline"
                />
                <input
                  value={5}
                  onChange={() => setformData({ ...formData, timeline: 5 })}
                  type="radio"
                  name="timeline"
                />
              </div>
            </div>
            <div className="feedbrateddivinner">
              <span>Response to Queries</span>
              <div className="innerradfeed">
                <input
                  value={1}
                  onChange={() => setformData({ ...formData, response: 1 })}
                  type="radio"
                  name="response"
                />
                <input
                  value={2}
                  onChange={() => setformData({ ...formData, response: 2 })}
                  type="radio"
                  name="response"
                />
                <input
                  value={3}
                  onChange={() => setformData({ ...formData, response: 3 })}
                  type="radio"
                  name="response"
                />
                <input
                  value={4}
                  onChange={() => setformData({ ...formData, response: 4 })}
                  type="radio"
                  name="response"
                />
                <input
                  value={5}
                  onChange={() => setformData({ ...formData, response: 5 })}
                  type="radio"
                  name="response"
                />
              </div>
            </div>
          </div>
          <div className="totalrating">
            <span>Overall Rating - </span>
            <StarRatings
              rating={rating}
              starRatedColor="#310851"
              changeRating={changerating}
              numberOfStars={5}
              name="rating"
              starDimension="25px"
              starEmptyColor="white"
            />
          </div>
          <button onClick={handleFormSubmit} className="feedbacksubbtn">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
