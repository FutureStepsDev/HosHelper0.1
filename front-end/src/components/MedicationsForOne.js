import React from "react";
import "./Medication.css";

const MedicationForOne = (props) => {
  return (
    // <div className="cardContainer">
    //   <img className="cardImage" src={props.e.image} alt="" />
    //   <div className="categoryText" style={{ marginTop: "15px" }}>
    //     {props.e.name}
    //   </div>
    //   <div className="titlePrice" style={{ marginTop: "15px" }}>
    //     <div className="titleText">{props.e.description}</div>
    //     <div className="priceText">{props.e.price} DT</div>
    //   </div>
    // </div>
    <div>
      <div className="containerMed">
        <div className="wrapper">
          <img className="banner-image" src={props.e.image} alt="" />

          <h1> {props.e.name}</h1>
          <h3>{props.e.price} Dt</h3>
          <p>{props.e.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MedicationForOne;
