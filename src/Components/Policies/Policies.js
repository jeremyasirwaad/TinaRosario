import { AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import React from "react";
import Accordion from "@mui/material/Accordion";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import "./policies.css";
import ana from "./ana.svg";
import payment from "./payment.svg";
import wash from "./wash.svg";
import fabric from "./fabric.svg";
import alter from "./alter.svg";
import returns from "./return.svg";
import esti from "./esti.svg";
import shipping from "./shipping.svg";
import gift from "./gift.svg";

export const Policies = () => {
  const [expand1, setExpand1] = React.useState(false);
  const [expand2, setExpand2] = React.useState(false);
  const [expand3, setExpand3] = React.useState(false);
  const [expand4, setExpand4] = React.useState(false);
  const [expand5, setExpand5] = React.useState(false);
  const [expand6, setExpand6] = React.useState(false);
  const [expand7, setExpand7] = React.useState(false);
  const [expand8, setExpand8] = React.useState(false);
  const [expand9, setExpand9] = React.useState(false);
  const inneraccordionStyle1 = {
    borderRadius: "20px",
    // backgroundColor: expand1 ? "#4C2A76" : "transparent",
    // color: expand1 ? "#FFB8BC" : "#4C2A76",
    backgroundColor: "transparent",
    color: "#4C2A76",
    marginBottom: "20px",
    "&:before": {
      display: "none",
      border: "none",
    },
    width: "90%",
  };

  const accordionDetail = {
    backgroundColor: "transparent",
    // color: "#FFB8BC",
    color: "black",
    borderRadius: "20px",
    margin: "0px 20px 20px 20px",
  };

  return (
    <div className="policontainer">
      <h2 style={{ marginTop: "80px", marginBottom: "40px" }}>OUR POLICIES</h2>
      <Accordion sx={{ display: "none" }} className="outeraccordion">
        <AccordionSummary
          expandIcon={<ControlPointIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        ></AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>

      <Accordion sx={inneraccordionStyle1} className="accordion">
        <AccordionSummary
          onClick={() => setExpand1(!expand1)}
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          expandIcon={<ControlPointIcon sx={{ color: "#4C2A76" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img
            style={{
              height: "25px",
              marginRight: "10px",
              color: expand1 ? "#FFB8BC" : "#4C2A76",
            }}
            src={ana}
          />
          <Typography sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}>
            ANALYTICS / COOKIES
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetail}>
          <Typography sx={{ fontSize: "18px" }}>
            The data collected by us from your side have been used for analytics purposes, to improve your interface and
            experience with us in the future and receive a better version of our services each time. For this purpose,
            we use cookies, that is a small file that can be placed on your device only with your permission. The
            acceptance of the cookie can be changed in your browser settings. If you do not accept a cookie we shall not
            use any of your information for further analytics purposes. Besides, disabling the cookies may limit your
            use of certain features or functions of services.
            <br /> We assure that usage of your data would surely be done without any encroachment of your privacy.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={inneraccordionStyle1} className="accordion">
        <AccordionSummary
          onClick={() => setExpand2(!expand2)}
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          expandIcon={<ControlPointIcon sx={{ color: "#4C2A76" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img style={{ height: "25px", marginRight: "10px" }} src={payment} />
          <Typography sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}>PAYMENT</Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetail}>
          <Typography sx={{ fontSize: "18px" }}>
            We offer the following payment methods: <br />
            <ul>
              <li>Account transfer</li>
              <li>UPI (Unified Payment Interface)</li>
              <li>Cash (Only @ store)</li>
              <li>Store credit (In case of return)</li>
            </ul>
            Once you have confirmed your order with us, you will receive an Invoice. 50% of the total amount mentioned
            in the invoice is due at that time. The remaining 50% will be due before the order is ready for
            pickup/dispatch.
            <br />
            <br /> When payments are made using other party mediums, we would not be responsible for transaction mishaps
            from your end directly or indirectly. For any queries contact your bank or contact us.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={inneraccordionStyle1} className="accordion">
        <AccordionSummary
          onClick={() => setExpand6(!expand6)}
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          expandIcon={<ControlPointIcon sx={{ color: "#4C2A76" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img style={{ height: "25px", marginRight: "10px" }} src={returns} />
          <Typography sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}>NO RETURN</Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetail}>
          <Typography sx={{ fontSize: "18px" }}>
            We do not encourage any cancellations or refund requests as our products are of premium quality and
            workmanship. However in special cases, you shall request for an exchange via email
            <a href="mailto:design@tinarosario.com"> design@tinarosario.com </a>. The exchange request should be made
            within two (2) days of you receiving your product. After verification (an unboxing video as evidence)
            exchanges will be processed within a 15 day period. Please note, shipping charges should be borne by the
            customer for exchanges. In rare cases, we might not honor your exchange requests.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={inneraccordionStyle1} className="accordion">
        <AccordionSummary
          onClick={() => setExpand7(!expand7)}
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          expandIcon={<ControlPointIcon sx={{ color: "#4C2A76" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img style={{ height: "25px", marginRight: "10px" }} src={esti} />
          <Typography sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}>ESTIMATED DELIVERY</Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetail}>
          <Typography sx={{ fontSize: "18px" }}>
            We, at The Design House, value our customer’s time and would surely try to deliver the product within the
            requested date. Our general timelines are 3 to 5 business days for ready to ship products or 15 to 20
            business days for customized outfits. Please note customized order can take even longer depending on the
            design. In case there is a delay in delivery, we will notify you immediately via email or phone.
            <br />
            <br />
            We use best courier services to ensure timely delivery of your product for both domestic and international
            orders. No extra <b> handling charges </b> will be charged at the time of delivery. Please do not make any
            such extra payments to anyone when your product is delivered.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={inneraccordionStyle1} className="accordion">
        <AccordionSummary
          onClick={() => setExpand8(!expand8)}
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          expandIcon={<ControlPointIcon sx={{ color: "#4C2A76" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img style={{ height: "25px", marginRight: "10px" }} src={shipping} />
          <Typography sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}>SHIPPING</Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetail}>
          <Typography sx={{ fontSize: "18px" }}>
            We cater to Pan India and various overseas destinations with extra care. Shipping charges are to be borne by
            the customer and may include the taxes and duties levied by the respective country. Shipments are done using
            reputed companies for a hassle-free delivery process. Once a shipping label or tracking number is generated,
            our logistics team delivers anywhere in India between 2 to 5 business days or 7-10 business days for
            international order. For the order to be dispatched, full payment needs to be made.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={inneraccordionStyle1} className="accordion">
        <AccordionSummary
          onClick={() => setExpand5(!expand5)}
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          expandIcon={<ControlPointIcon sx={{ color: "#4C2A76" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img style={{ height: "25px", marginRight: "10px" }} src={alter} />
          <Typography sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}>ALTERATION</Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetail}>
          <Typography sx={{ fontSize: "18px" }}>
            If our tailored clothes don’t fit as expected, we’ll alter them at no extra charge based on the feedback you
            provide. Your final measurements will be recorded for future use.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={inneraccordionStyle1} className="accordion">
        <AccordionSummary
          onClick={() => setExpand3(!expand3)}
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          expandIcon={<ControlPointIcon sx={{ color: "#4C2A76" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img style={{ height: "25px", marginRight: "10px" }} src={wash} />
          <Typography sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}>WASHCARE</Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetail}>
          <Typography sx={{ fontSize: "18px" }}>
            Our products are mostly designed with the notion of being easy to maintain: <br />
            <b>Recommended</b>
            <ul>
              <li>Dry cleaning</li>
              <li>Hand Wash</li>
              <ul>
                <li>Use mild detergent.</li>
                <li>Use cold water</li>
                <li>Wash like colors together (Red and blue tend to run)</li>
                <li>Dry inside out in the shade.</li>
                <li>Airing the clothes after every wash.</li>
                <li>Gentle squeeze</li>
              </ul>
            </ul>
            <b>Avoid</b>
            <ul>
              <li>Machine wash</li>
              <li>Mixing of white with colored clothes</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={inneraccordionStyle1} className="accordion">
        <AccordionSummary
          onClick={() => setExpand4(!expand4)}
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          expandIcon={<ControlPointIcon sx={{ color: "#4C2A76" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img style={{ height: "25px", marginRight: "10px" }} src={fabric} />
          <Typography sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}>
            FABRIC AND FABRIC COLORS
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetail}>
          <Typography sx={{ fontSize: "18px" }}>
            The photographs are shot by professionals for an accurate display of the details and specifications of the
            garment.
            <br /> Thus, the products are bound to have a certain variation in the color and appearance in reality when
            compared to the photographs or videos uploaded.
            <br /> Moderate shrinkage can be expected depending on the type of fabric.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={inneraccordionStyle1} className="accordion">
        <AccordionSummary
          onClick={() => setExpand9(!expand9)}
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          expandIcon={<ControlPointIcon sx={{ color: "#4C2A76" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img style={{ height: "25px", marginRight: "10px" }} src={gift} />
          <Typography sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}>GIFT WRAP</Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetail}>
          <Typography sx={{ fontSize: "18px" }}>
            We take utmost care to make your loved ones feel special. Gift wrap services are available with a small
            additional cost and can be made completely eco-friendly upon request. Please let us know if the purchase is
            a gift and special note to be included. Also, the product is sent along with the tags, as they signify a new
            product and would be helpful for any future verification.
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

      <h2 style={{ marginTop: "80px", marginBottom: "40px" }}>Acknowledgement</h2>
    </div>
  );
};
