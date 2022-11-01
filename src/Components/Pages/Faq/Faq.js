import React, { useState, forwardRef, useImperativeHandle, useRef } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import ControlPointIcon from "@mui/icons-material/ExpandMore";
import "./Faq.css";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { useLocation } from "react-router-dom";

const FAQ = () => {
  const [outerAcc1, setouterAcc1] = useState(false);
  const [outerAcc2, setouterAcc2] = useState(false);
  const [outerAcc3, setouterAcc3] = useState(false);
  const [outerAcc4, setouterAcc4] = useState(false);
  const [outerAcc5, setouterAcc5] = useState(false);
  const location = useLocation();
  console.log(location.state);

  const outeraccordionStyle1 = {
    backgroundColor: outerAcc1 ? "#4C2A76" : "transparent",
    // color: "#FFB8BC",
    color: outerAcc1 ? "#FFB8BC" : "#4C2A76",
    borderRadius: "30px",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #4C2A76",
    // position: "absolute",
    "&:before": {
      display: "none",
      border: "none",
    },
    marginLeft: "20px",
    marginRight: "20px",
  };
  const outeraccordionStyle2 = {
    backgroundColor: outerAcc2 ? "#4C2A76" : "transparent",
    // color: "#FFB8BC",
    color: outerAcc2 ? "#FFB8BC" : "#4C2A76",
    borderRadius: "30px",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #4C2A76",
    // position: "absolute",
    "&:before": {
      display: "none",
      border: "none",
    },
    marginLeft: "20px",
    marginRight: "20px",
  };
  const outeraccordionStyle3 = {
    backgroundColor: outerAcc3 ? "#4C2A76" : "transparent",
    // color: "#FFB8BC",
    color: outerAcc3 ? "#FFB8BC" : "#4C2A76",
    borderRadius: "30px",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #4C2A76",
    // position: "absolute",
    "&:before": {
      display: "none",
      border: "none",
    },
    marginLeft: "20px",
    marginRight: "20px",
  };
  const outeraccordionStyle4 = {
    backgroundColor: outerAcc4 ? "#4C2A76" : "transparent",
    // color: "#FFB8BC",
    color: outerAcc4 ? "#FFB8BC" : "#4C2A76",
    borderRadius: "30px",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #4C2A76",
    // position: "absolute",
    "&:before": {
      display: "none",
      border: "none",
    },
    marginLeft: "20px",
    marginRight: "20px",
  };
  const outeraccordionStyle5 = {
    backgroundColor: outerAcc5 ? "#4C2A76" : "transparent",
    // color: "#FFB8BC",
    color: outerAcc5 ? "#FFB8BC" : "#4C2A76",
    borderRadius: "30px",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #4C2A76",
    // position: "absolute",
    "&:before": {
      display: "none",
      border: "none",
    },
    marginLeft: "20px",
    marginRight: "20px",
  };
  const inneraccordionStyle = {
    backgroundColor: "rgba(39, 6, 65, 0.7)",
    borderRadius: "20px",
    color: "#FFB8BC",
    marginTop: "10px",
    "&:before": {
      display: "none",
      border: "none",
    },
  };

  const accordionDetail = {
    backgroundColor: "white",
    color: "black",
    borderRadius: "20px",
    margin: "0px 20px 20px 20px",
  };
  const [expand1, setExpand1] = React.useState(false);
  const [expand2, setExpand2] = React.useState(false);
  const [expand3, setExpand3] = React.useState(false);
  const [expand4, setExpand4] = React.useState(false);
  const [expand5, setExpand5] = React.useState(false);
  const toggleAcordion1 = () => {
    setExpand1((prev) => !prev);
    setouterAcc1(!outerAcc1);
  };
  const toggleAcordion2 = () => {
    setExpand2((prev) => !prev);
    setouterAcc2(!outerAcc2);
  };
  const toggleAcordion3 = () => {
    setExpand3((prev) => !prev);
    setouterAcc3(!outerAcc3);
  };

  const toggleAcordion4 = () => {
    setExpand4((prev) => !prev);
    setouterAcc4(!outerAcc4);
  };
  const toggleAcordion5 = () => {
    setExpand5((prev) => !prev);
    setouterAcc5(!outerAcc5);
  };

  React.useEffect(() => {
    if (location.state == 1) {
      setExpand1(!expand1);
      setouterAcc1(!outerAcc1);
    }
    if (location.state == 2) {
      setExpand2(!expand2);
      setouterAcc2(!outerAcc2);
    }
    if (location.state == 3) {
      setExpand3(!expand3);
      setouterAcc3(!outerAcc3);
    }
    if (location.state == 4) {
      setExpand4(!expand4);
      setouterAcc4(!outerAcc4);
    }
    if (location.state == 5) {
      setExpand5(!expand5);
      setouterAcc5(!outerAcc5);
    }
  }, [location.state]);

  return (
    <div className="faq-container">
      <h2 style={{ marginTop: "80px", marginBottom: "40px" }}>Frequently Asked Questions</h2>
      <div className="faq-inner">
        <Accordion sx={{ display: "none" }} className="outeraccordion">
          <AccordionSummary
            expandIcon={<ControlPointIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          ></AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordion>
        <Accordion expanded={expand1} sx={outeraccordionStyle1} className="outeraccordion">
          <AccordionSummary
            onClick={toggleAcordion1}
            expandIcon={<ControlPointIcon sx={{ color: outerAcc1 ? "#FFB8BC" : "#4C2A76" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Working Model</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Accordion sx={{ display: "none" }} className="outeraccordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#FFB8BC" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              ></AccordionSummary>
              <AccordionDetails></AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#FFB8BC" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>How to place an order</Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                  blanditleo lobortis eget
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#FFB8BC" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>How to place an order</Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                  blanditleo lobortis eget
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#FFB8BC" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>How to place an order</Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                  blanditleo lobortis eget
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ display: "none" }} className="outeraccordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              ></AccordionSummary>
              <AccordionDetails></AccordionDetails>
            </Accordion>
          </AccordionDetails>
        </Accordion>
        {/* //START OF ACCORDION */}

        <Accordion expanded={expand2} sx={outeraccordionStyle2} className="outeraccordion">
          <AccordionSummary
            onClick={toggleAcordion2}
            expandIcon={<ControlPointIcon sx={{ color: outerAcc2 ? "#FFB8BC" : "#4C2A76" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Pricing and Payment</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Accordion sx={{ display: "none" }} className="outeraccordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#FFB8BC" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              ></AccordionSummary>
              <AccordionDetails></AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#FFB8BC" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>How to place an order</Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                  blanditleo lobortis eget
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#FFB8BC" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>How to place an order</Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                  blanditleo lobortis eget
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#FFB8BC" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>How to place an order</Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                  blanditleo lobortis eget
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ display: "none" }} className="outeraccordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              ></AccordionSummary>
              <AccordionDetails></AccordionDetails>
            </Accordion>
          </AccordionDetails>
        </Accordion>
        {/* //END OF ACCORDION //START OF ACCORDION */}
        <Accordion expanded={expand3} sx={outeraccordionStyle3} className="outeraccordion">
          <AccordionSummary
            onClick={toggleAcordion3}
            expandIcon={<ControlPointIcon sx={{ color: outerAcc3 ? "#FFB8BC" : "#4C2A76" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Order & Customization</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Accordion sx={{ display: "none" }} className="outeraccordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#FFB8BC" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              ></AccordionSummary>
              <AccordionDetails></AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#FFB8BC" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>How to place an order</Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                  blanditleo lobortis eget
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#FFB8BC" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>How to place an order</Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                  blanditleo lobortis eget
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#FFB8BC" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>How to place an order</Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                  blanditleo lobortis eget
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ display: "none" }} className="outeraccordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              ></AccordionSummary>
              <AccordionDetails></AccordionDetails>
            </Accordion>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expand4} sx={outeraccordionStyle4} className="outeraccordion">
          <AccordionSummary
            onClick={toggleAcordion4}
            expandIcon={<ControlPointIcon sx={{ color: outerAcc4 ? "#FFB8BC" : "#4C2A76" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Delivery, Retrun, and Refund</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Accordion sx={{ display: "none" }} className="outeraccordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#FFB8BC" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              ></AccordionSummary>
              <AccordionDetails></AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#FFB8BC" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>How to place an order</Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                  blanditleo lobortis eget
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#FFB8BC" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>How to place an order</Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                  blanditleo lobortis eget
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#FFB8BC" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>How to place an order</Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                  blanditleo lobortis eget
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ display: "none" }} className="outeraccordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              ></AccordionSummary>
              <AccordionDetails></AccordionDetails>
            </Accordion>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expand5} sx={outeraccordionStyle5} className="outeraccordion">
          <AccordionSummary
            onClick={toggleAcordion5}
            expandIcon={<ControlPointIcon sx={{ color: outerAcc5 ? "#FFB8BC" : "#4C2A76" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Shipping and tracking</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Accordion sx={{ display: "none" }} className="outeraccordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#FFB8BC" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              ></AccordionSummary>
              <AccordionDetails></AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#FFB8BC" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>How to place an order</Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                  blanditleo lobortis eget
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#FFB8BC" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>How to place an order</Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                  blanditleo lobortis eget
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#FFB8BC" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>How to place an order</Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                  blanditleo lobortis eget
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ display: "none" }} className="outeraccordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              ></AccordionSummary>
              <AccordionDetails></AccordionDetails>
            </Accordion>
          </AccordionDetails>
        </Accordion>
        {/* //END OF ACCORDION //START OF ACCORDION */}

        {/* //END OF ACCORDION */}
        <Accordion sx={{ display: "none" }} className="outeraccordion">
          <AccordionSummary expandIcon={<ControlPointIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Registration & Payment</Typography>
          </AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
