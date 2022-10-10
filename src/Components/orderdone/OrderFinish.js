import React from "react";
import { useParams } from "react-router-dom";
import tick from "./tick.svg";
import "./OrderFinish.css";
const OrderFinish = () => {
  const { type, name, date } = useParams();
  return (
    <div className="order-bg">
      {type == "wedding" ? (
        <div className="order-card">
          <div className="icon">
            <img src={tick} />
          </div>
          <div className="details">
            Hello {name} , <br /> Welcome to the family of “The Design House” by <br /> Tina Rosario. <br /> Appreciate
            your confidence in us <br /> - <br />
            Your appointment has been confirmed. <br /> Looking forward to discuss further to make your day <br />{" "}
            “look” special <br /> <br />
            Our Designer will contact you on {date}, <br />
            between 11am to 7pm.
          </div>
        </div>
      ) : (
        <div className="order-card">
          <div className="icon">
            <img src={tick} />
          </div>
          <div className="details">
            Hello {name} , <br /> Welcome to the family of “The Design House” by <br /> Tina Rosario. <br /> Appreciate
            your confidence in us <br /> - <br />
            Your appointment has been confirmed. <br /> Looking forward to customize your comfort attire <br /> “look”
            special <br /> <br />
            Our Designer will contact you between between 11am to 7pm. <br /> to discuss fabric, design, and measurement
            details.
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderFinish;
