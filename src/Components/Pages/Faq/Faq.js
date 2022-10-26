import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Faq.css";

const outeraccordionStyle = {
  backgroundColor: "#4C2A76",
  color: "#FFB8BC",
  borderRadius: "30px",
  padding: "10px",
  marginBottom: "10px",
};

const inneraccordionStyle = {
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

const FAQ = ({ faqs, heading }) => {
  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
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
        <Accordion sx={outeraccordionStyle} className="outeraccordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#FFB8BC" }} />}
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
        <Accordion sx={outeraccordionStyle} className="outeraccordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#FFB8BC" }} />}
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
        <Accordion sx={outeraccordionStyle} className="outeraccordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#FFB8BC" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Delivery, Return & Refund</Typography>
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
        <Accordion sx={outeraccordionStyle} className="outeraccordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#FFB8BC" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Shipping & Tracking</Typography>
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
