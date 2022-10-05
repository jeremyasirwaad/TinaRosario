import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Faq.css";

const FAQ = ({ faqs, heading }) => {
  return (
    <div className="faq-container">
      <h2>{heading}</h2>
      {faqs.map((faq, index) => (
        <Accordion className="accordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>{faq.q}?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.a}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default FAQ;
