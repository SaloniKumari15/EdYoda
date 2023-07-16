import React from "react";
import "./subItem.css";

export default function SubItem(props) {
  const { isSelect, id, duration, totalPrice, monthPrice, index, data, setData, setActiveIndex, tag } = props;
  var cls = "selItemDiv";

  if (isSelect) {
    cls = cls + " selected";
  }

  if (tag === "Recommended") {
    cls = cls + " tag green";
  } else if (tag === "Offer expired") {
    cls = cls + " tag red itemDisabled";
  }

  data.forEach((element) => {
    element.isSelect = false;
  });
  const setValue = (index, data) => {
    if (tag === "Offer expired") return;
    setActiveIndex(index);
    data[index].isSelect = true;
    setData(data);
  };

  return (
    <div className={cls} datacontenattribute={tag} onClick={() => setValue(index, data)}>
      {!isSelect && (
        <div className="unselect">
          <div>
            <div className="disableCircle"></div>
          </div>
        </div>
      )}
      {isSelect && (
        <div className="select">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
            <path
              d="M14.1333 22.6334L23.5333 13.2334L21.6667 11.3667L14.1333 18.9001L10.3333 15.1001L8.46667 16.9667L14.1333 22.6334ZM16 29.8334C14.1556 29.8334 12.4222 29.4832 10.8 28.7827C9.17778 28.0832 7.76667 27.1334 6.56667 25.9334C5.36667 24.7334 4.41689 23.3223 3.71733 21.7001C3.01689 20.0779 2.66667 18.3445 2.66667 16.5001C2.66667 14.6556 3.01689 12.9223 3.71733 11.3001C4.41689 9.67786 5.36667 8.26675 6.56667 7.06675C7.76667 5.86675 9.17778 4.91653 10.8 4.21608C12.4222 3.51653 14.1556 3.16675 16 3.16675C17.8444 3.16675 19.5778 3.51653 21.2 4.21608C22.8222 4.91653 24.2333 5.86675 25.4333 7.06675C26.6333 8.26675 27.5831 9.67786 28.2827 11.3001C28.9831 12.9223 29.3333 14.6556 29.3333 16.5001C29.3333 18.3445 28.9831 20.0779 28.2827 21.7001C27.5831 23.3223 26.6333 24.7334 25.4333 25.9334C24.2333 27.1334 22.8222 28.0832 21.2 28.7827C19.5778 29.4832 17.8444 29.8334 16 29.8334Z"
              fill="#47BA68"
            />
          </svg>
        </div>
      )}
      <input id={id} type="radio" name="monthPack" />
      <div className="selItemText">
        <label>{duration} Months Subscription</label>
        <div className="textRight">
          <div className="textUpper">
            Total <span>₹{totalPrice}</span>
          </div>
          <div className="textLower">
            ₹{monthPrice} <span>/mo</span>
          </div>
        </div>
      </div>
    </div>
  );
}
