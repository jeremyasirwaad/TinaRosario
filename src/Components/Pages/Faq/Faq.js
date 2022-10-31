import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Faq.css";

const FAQ = ({ faqs, heading }) => {
  const [outerAcc1, setouterAcc1] = useState(false);
  const [outerAcc2, setouterAcc2] = useState(false);
  const [outerAcc3, setouterAcc3] = useState(false);
  const [outerAcc4, setouterAcc4] = useState(false);

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
  };
  const outeraccordionStyle3 = {
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
  };
  const outeraccordionStyle4 = {
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
  };
  const inneraccordionStyle = {
    backgroundColor: "rgba(39, 6, 65, 0.7)",
    borderRadius: "20px",
    color: "#FFB8BC",
    marginTop: "10px",
  };

  const inneraccordionStyle2 = {
    backgroundColor: "rgba(39, 6, 65, 0.7)",
    borderRadius: "20px",
    color: "#FFB8BC",
    marginTop: "10px",
  };
  const accordionDetail = {
    backgroundColor: "white",
    color: "black",
    borderRadius: "20px",
  };
  const [expand, setExpand] = React.useState(false);
  const toggleAcordion = () => {
    setExpand((prev) => !prev);
    setouterAcc1(!outerAcc1);
  };

  return (
    <div className="faq-container">
      <h2 style={{ marginTop: "100px" }}>Frequently Asked Questions</h2>
      <div className="faq-inner">
        <Accordion sx={{ display: "none" }} className="outeraccordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          ></AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordion>
        {/* //START OF ACCORDION */}
        <button onClick={toggleAcordion}>hehe</button>
        <Accordion expanded={expand} sx={outeraccordionStyle1} className="outeraccordion">
          <AccordionSummary
            onClick={toggleAcordion}
            expandIcon={<ExpandMoreIcon sx={{ color: outerAcc1 ? "#FFB8BC" : "#4C2A76" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Registration & Payment</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Accordion sx={{ display: "none" }} className="outeraccordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#FFB8BC" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              ></AccordionSummary>
              <AccordionDetails></AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#FFB8BC" }} />}
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
                expandIcon={<ExpandMoreIcon sx={{ color: "#FFB8BC" }} />}
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
                expandIcon={<ExpandMoreIcon sx={{ color: "#FFB8BC" }} />}
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
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              ></AccordionSummary>
              <AccordionDetails></AccordionDetails>
            </Accordion>
          </AccordionDetails>
        </Accordion>
        {/* //END OF ACCORDION //START OF ACCORDION */}
        <Accordion sx={outeraccordionStyle2} className="outeraccordion">
          <AccordionSummary
            onClick={() => setouterAcc2(!outerAcc2)}
            expandIcon={<ExpandMoreIcon sx={{ color: outerAcc2 ? "#FFB8BC" : "#4C2A76" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Order & Customization</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Accordion sx={{ display: "none" }} className="outeraccordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#FFB8BC" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              ></AccordionSummary>
              <AccordionDetails></AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#FFB8BC" }} />}
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
                expandIcon={<ExpandMoreIcon sx={{ color: "#FFB8BC" }} />}
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
                expandIcon={<ExpandMoreIcon sx={{ color: "#FFB8BC" }} />}
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
                expandIcon={<ExpandMoreIcon />}
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
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Registration & Payment</Typography>
          </AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
