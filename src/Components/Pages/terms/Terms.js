import { AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import React from "react";
import Accordion from "@mui/material/Accordion";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import "./terms.css";
import ana from "./ana.svg";
export const Terms = () => {
  const inneraccordionStyle = {
    // backgroundColor: "rgba(39, 6, 65, 0.7)",
    backgroundColor: "transparent",
    borderRadius: "20px",
    // color: "#FFB8BC",
    color: "#270641",
    marginTop: "10px",
    "&:before": {
      display: "none",
      border: "none",
    },
    marginLeft: "20px",
    marginRight: "20px",
  };
  const accordionDetail = {
    backgroundColor: "white",
    color: "black",
    borderRadius: "20px",
    margin: "0px 20px 20px 20px",
  };

  return (
    <div className="policontainer">
      <div className="pheader">
        <h2>TERMS OF SERVICE AGREEMENT</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blanditleo
          lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
          amet blanditleo lobortis egetLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
          lacus ex, sit
        </p>
      </div>

      <Accordion sx={{ display: "none" }} className="outeraccordion">
        <AccordionSummary
          expandIcon={<ControlPointIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        ></AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
      <Accordion sx={inneraccordionStyle} className="accordion">
        <AccordionSummary
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          expandIcon={<ControlPointIcon sx={{ color: "#270641" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img style={{ height: "25px", marginRight: "10px" }} src={ana} />
          <Typography sx={{ alignSelf: "center" }}>How to place an order</Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetail}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blanditleo
            lobortis eget
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={inneraccordionStyle} className="accordion">
        <AccordionSummary
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          expandIcon={<ControlPointIcon sx={{ color: "#270641" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img style={{ height: "25px", marginRight: "10px" }} src={ana} />
          <Typography sx={{ alignSelf: "center" }}>How to place an order</Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetail}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blanditleo
            lobortis eget
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
    </div>
  );
};
