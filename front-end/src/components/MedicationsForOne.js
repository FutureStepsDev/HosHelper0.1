import React from "react";
import "./Medication.css";

const MedicationForOne = (props) => {
  return (
    <div className="cardContainer">
      <img className="cardImage" src={props.e.image} alt="" />
      <div className="categoryText" style={{ marginTop: "15px" }}>
        {props.e.name}
      </div>
      <div className="titlePrice" style={{ marginTop: "15px" }}>
        <div className="titleText">{props.e.description}</div>
        <div className="priceText">{props.e.price} DT</div>
      </div>
    </div>
  );
};

export default MedicationForOne;
