import React from "react";
import "./Calltoact.css";
import arrow from "../assets/right-arrow.svg";

function Calltoact() {
  return (
    <div className="calltoact">
      <p className="calltoact__questionCall">Give yourself a Question...</p>
      <h2 className="calltoact__question">
        Is your Brand collecting efficient clients?
      </h2>
      <p className="calltoact__answer">
        Probably, No... That's why you are here now. I am always ready to lend a
        hand with the reputation of your brand.
      </p>
      <div className="calltoact__button">
        <div className="calltoact__inner">
          Get in touch <img src={arrow} alt="" className="calltoact__arrow" />
        </div>
      </div>
    </div>
  );
}

export default Calltoact;
