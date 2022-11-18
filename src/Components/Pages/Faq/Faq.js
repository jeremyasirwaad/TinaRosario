import React, { useState, forwardRef, useImperativeHandle, useRef } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import ControlPointIcon from "@mui/icons-material/ExpandMore";
import "./Faq.css";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { Link, useLocation } from "react-router-dom";

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
    color: outerAcc1 ? "#FFB8BC" : "#270641",
    borderRadius: "30px",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #270641",
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
    color: outerAcc2 ? "#FFB8BC" : "#270641",
    borderRadius: "30px",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #270641",
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
    color: outerAcc3 ? "#FFB8BC" : "#270641",
    borderRadius: "30px",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #270641",
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
    color: outerAcc4 ? "#FFB8BC" : "#270641",
    borderRadius: "30px",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #270641",
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
    color: outerAcc5 ? "#FFB8BC" : "#270641",
    borderRadius: "30px",
    padding: "10px",
    marginBottom: "50px",
    border: "1px solid #270641",
    // position: "absolute",
    "&:before": {
      display: "none",
      border: "none",
    },
    marginLeft: "20px",
    marginRight: "20px",
  };
  const inneraccordionStyle = {
    // backgroundColor: "rgba(39, 6, 65, 0.7)",
    backgroundColor: "#8ED1D4  ",
    borderRadius: "20px",
    color: "#270641",
    marginTop: "10px",
    "&:before": {
      display: "none",
      border: "none",
    },
    width: "90%",
    // marginRight: "20px",
    // marginLeft: "20px"
  };

  const bigAccordianDetail = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const accordionDetail = {
    backgroundColor: "white",
    color: "#270641",
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
      <h2
        style={{
          marginTop: "55px",
          marginBottom: "40px",
          color: "#270641",
          fontSize: "45px",
          fontWeight: "600",
        }}
      >
        Frequently Asked Questions
      </h2>
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
            expandIcon={<ControlPointIcon sx={{ color: outerAcc1 ? "#FFB8BC" : "#270641" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>WORKING MODEL</Typography>
          </AccordionSummary>
          <AccordionDetails sx={bigAccordianDetail}>
            <Accordion sx={{ display: "none" }} className="outeraccordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#270641" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              ></AccordionSummary>
              <AccordionDetails></AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#270641" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>How does designing and stitching work at THE DESIGN HOUSE?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>
                  <ul>
                    <li>
                      Based on what you need, choose one of our services - Wedding Planning, Customized Designs, Image
                      Consulting, and Get Pampered.
                    </li>
                    <li>
                      Fill out the form available on the service page of your choice. We will get in touch with you
                      within one business day.
                    </li>
                    <li>
                      Schedule a pickup (Chennai only), ship, or drop your fabric. If you don’t have a fabric, we will
                      help find one that fits your choice.
                    </li>
                    <li>
                      The fashion designer and stylist will contact you to design your desired outfit. You can choose to
                      meet in person or virtually.
                    </li>
                    <li>
                      Once the design is confirmed, a “Design Board” will be shared along with the order form and
                      payment options.
                    </li>
                    <li>50% of the total amount is due when the order is confirmed. (Refer to Payment Methods).</li>
                    <li>Your custom outfit will be stitched with utmost care and ready within 5-10 business days.</li>
                    <li>The remaining 50% amount is due before the order is shipped or delivered. </li>
                    <li>
                      You will be notified via phone or email regarding the completion of the order and provided
                      delivery options. (Pickup, Dunzo, or courier service)
                    </li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#270641" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>How will the measurements be taken?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>
                  There are four different ways:-
                  <ul>
                    <li>
                      In store Service
                      <br /> Our experienced couturier will take measurements at the store. Your measurements will be
                      stored for future use.
                    </li>
                    <li>
                      From the comfort of your home (Chennai only) <br /> We will save you the trouble of traffic. An
                      experienced tailor will come and take measurements at your residence.
                    </li>
                    <li>
                      Virtual Consultation <br />
                      Not in Chennai? We can connect virtually and our experienced couturier will guide you through the
                      process. Please note that you will need the help of someone to take measurements.
                    </li>
                    <li>
                      Refer to Tutorial <br />
                      Are you a DIY person? Watch the tutorial video on our website that will walk through with the
                      process of taking measurements,
                    </li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#270641" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>What kind of clothes do you stitch? </Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>
                  We, at The Design House specialize in wedding wardrobe, designer wear, casual wear, and Indo-Western
                  collection that can be worn by all. We offer all sort of specialty hand work - maggam, embroidery,
                  aari, designer tassel, saree kuchu (both silk thread and crochet), and zardosi.
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
            <Typography>PRICING AND PAYMENT</Typography>
          </AccordionSummary>
          <AccordionDetails sx={bigAccordianDetail}>
            <Accordion sx={{ display: "none" }} className="outeraccordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#270641" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              ></AccordionSummary>
              <AccordionDetails></AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#270641" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Is there extra pricing for the services provided?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>
                  Yes! A well renowned designer and stylist will coordinate and provide specialized consultation to help
                  design your dream attire. Pricing would vary primarily based on two factors - design intricacy &
                  customization complexity.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#270641" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Can I make an online payment? </Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>Currently, we do not have an online payment portal.</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#270641" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>What are the payment methods?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>
                  We accept the following payment options : -
                  <ul>
                    <li>Account Transfer</li>
                    <li>UPI (eg: GPay, PhonePe)</li>
                    <li>Cash (Only @ store)</li>
                    <li>Store credit (In case of return)</li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#270641" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>What should I do if a transaction failed, but payment was deducted?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>
                  Don’t worry! Please write to design@tinarosario.com. Our team will reach out to resolve the issue.
                  <br /> For electronic payments, we will not be responsible for transaction mishaps that occur.
                  However, we will be glad to assist with your queries and resolve payment issues.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#270641" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Is COD available?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>
                  Cash on Delivery is not accepted. Please use one of the above payment options to purchase products.
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
            <Typography>ORDER AND CUSTOMIZATION</Typography>
          </AccordionSummary>
          <AccordionDetails sx={bigAccordianDetail}>
            <Accordion sx={{ display: "none" }} className="outeraccordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#270641" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              ></AccordionSummary>
              <AccordionDetails></AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#270641" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Can I customize an order? Will you provide assistance?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>
                  Yes! Book an appointment using one of the service portals. We will contact you at the scheduled time
                  to finalize your order. Our designer/stylist will provide choices to ensure your needs are met.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#270641" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Do I need to have my own fabric to use your service?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>You can but it’s not necessary. We can suggest several options.</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#270641" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>I have a design reference. Can you make me something that looks like it?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>
                  You have an inspiration! We can use it as a starting point and have a garment stitched to satisfy your
                  requirements. Use our Customization page and upload the design. Our designer will get in touch to
                  discuss and finalize your order.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#270641" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>How to order the products available in the gallery? </Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>
                  Contact us via phone or email. Provide the SKU details along with your information and we will get in
                  touch with you to discuss payment methods.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#270641" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Can I cancel or update my order?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>
                  Customized clothing orders cannot be cancelled once confirmed. Updates to measurements and design are
                  possible before stitching has commenced.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#270641" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Can I place bulk orders?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>Yes. Exclusive discounts are provided.</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#270641" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>How will I get my order confirmation?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>You will get an email with details about your order.</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#270641" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>What happens if the product I want is out of stock ?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>
                  Contact us using email or phone number regarding your desired product. We will notify you as soon as
                  it is back in stock.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#270641" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Will your designers directly connect with me?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>
                  Yes! Using our customized design page, book an one-on-one virtual or in person appointment to connect
                  with our fashion experts.
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
            <Typography>Delivery, return and refund</Typography>
          </AccordionSummary>
          <AccordionDetails sx={bigAccordianDetail}>
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
                expandIcon={<ControlPointIcon sx={{ color: "#270641" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Can I exchange/return my product?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>NO exchange or return is accepted for customized products.</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#270641" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Will I get a refund?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>
                  Once payment is made, refunds are not possible for customized products. For ready-to-ship products,
                  you will receive store credit.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#270641" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>What do I do if I get a different or a damaged product?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>
                  We strive to deliver the best quality clothing. However if something is not right please write to us
                  with an unboxing video showing the wrong or damaged product within two days of receiving your product.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#270641" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Are international orders accepted? What is the Delivery timeline?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>
                  We accept orders across the globe and will be delivered within 15 days from the time we receive your
                  payment.
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
          <AccordionDetails sx={bigAccordianDetail}>
            <Accordion sx={{ display: "none" }} className="outeraccordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#270641" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              ></AccordionSummary>
              <AccordionDetails></AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#270641" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Are there any shipping charges?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>
                  Shipping charges will be communicated depending on delivery location and timeline.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#270641" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Can I change the shipping address ?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>Changing the shipping address is accepted until the clothing is packed.</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#270641" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>How can I track the order or change in delivery time ?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>
                  Use “Track Your Order” link sent to your email. It will provide delivery details. Any changes to the
                  delivery time will be notified.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={inneraccordionStyle} className="accordion">
              <AccordionSummary
                expandIcon={<ControlPointIcon sx={{ color: "#270641" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Do you ship Internationally? Is there a fee?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={accordionDetail}>
                <Typography>
                  We ship across the globe and shipping charges will vary based on the weight of the product and
                  location.
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
            <Typography></Typography>
          </AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordion>

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#270641",
          }}
        >
          <h3>Still have a question?</h3>
          <p style={{ alignContent: "center", alignSelf: "center" }}>
            Can’t find what you’re looking for?
            <Link
              style={{
                color: "black",
                textDecoration: "underline",
                marginLeft: "5px",
              }}
              to="/contact"
            >
              <b>Contact Us</b>
            </Link>{" "}
            <br />
          </p>
          <p style={{ marginTop: "-10px" }}>We will answer to you shortly!</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
