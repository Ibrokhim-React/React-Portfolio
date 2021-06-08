import React from "react";
import "./Brands.css";
import Row from "../components/Row";
import collaborationImage from '../assets/half-word.png';

function Brand() {
  return (
    <div className="brands">
      <img src={collaborationImage} alt="" className="col"/>
      <div className="brands__container">
        <h4>Collaboration with me</h4>
        <div className="row__wrapper">
          <Row />
        </div>
      </div>
    </div>
  );
}

export default Brand;
