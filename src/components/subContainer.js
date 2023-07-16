import React, { useState } from "react";
import SubItem from "./SubItem";
import "./subContainer.css";

export default function SubContainer() {
  const [data, setData] = useState([
    {
      key: "12mExp",
      isSelect: false,
      duration: 12,
      totalPrice: 99,
      monthPrice: 8,
      tag: "Offer expired",
    },
    {
      key: "12m",
      isSelect: true,
      duration: 12,
      totalPrice: 179,
      monthPrice: 15,
      tag: "Recommended",
    },
    {
      key: "6m",
      isSelect: false,
      duration: 6,
      totalPrice: 149,
      monthPrice: 25,
      tag: "",
    },
    {
      key: "3m",
      isSelect: false,
      duration: 3,
      totalPrice: 99,
      monthPrice: 33,
      tag: "",
    },
  ]);

  var INR = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <div className="subMainContainer">
      <div className="subTopContainer">
        <div className="stc">
          <div>1</div>
          Sign Up
        </div>
        <div className="stc">
          <div>2</div>
          Login Up
        </div>
      </div>
      <div className="subMiddleContainer">
        {data.map((ele, index) => {
          return (
            <SubItem
              isSelect={ele.isSelect}
              id={ele.key}
              duration={ele.duration}
              totalPrice={ele.totalPrice}
              monthPrice={ele.monthPrice}
              index={index}
              data={data}
              setData={setData}
              setActiveIndex={setActiveIndex}
              tag={ele.tag}
            />
          );
        })}
      </div>
      <div className="SubBottomContainer">
        <div className="SubBottomContainer-top">
          <span>Subscription Fee</span>{" "}
          <b>
            <span>{INR.format(1550 * data[activeIndex].duration).replace(".00", "")}</span>
          </b>
        </div>
        <div className="SubBottomContainer-middle">
          <div className="sbc-m-t">
            Limited time offer <span>- {INR.format(1550 * data[activeIndex].duration - data[activeIndex].totalPrice).replace(".00", "")}</span>
          </div>
          <div className="sbc-m-b">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M11 7V13L16.2 16.1L17 14.9L12.5 12.2V7H11ZM20 12V18H22V12H20ZM20 20V22H22V20H20ZM18 20C16.3 21.3 14.3 22 12 22C6.49998 22 1.99998 17.5 1.99998 12C1.99998 6.5 6.49998 2 12 2C16.8 2 20.9 5.4 21.8 10H19.7C18.8 6.6 15.7 4 12 4C7.59998 4 3.99998 7.6 3.99998 12C3.99998 16.4 7.59998 20 12 20C14.4 20 16.5 18.9 18 17.3V20Z"
                fill="#DE4313"
              />
            </svg>
            Offer valid till 25th March 2023{" "}
          </div>
        </div>
        <div className="SubBottomContainer-top">
          <span>
            <b>Total</b> (Incl. of 18% GST)
          </span>{" "}
          <span className="extraBold">{INR.format(data[activeIndex].totalPrice).replace(".00", "")}</span>
        </div>
      </div>
      <div className="subButtonContainer">
        <button className="btn warning">cancel</button>
        <button className="btn success">proceed to pay</button>
      </div>
      <div className="subFooterIcon"></div>
    </div>
  );
}
