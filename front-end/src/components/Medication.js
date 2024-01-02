import React from "react";
import "./Medication.css";
import { useDispatch } from "react-redux";
import { setProduct } from "./Features/ProductUpdate";
import { useEffect } from "react";
import { useNavigate } from "react-router";
const Medication = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleUpdate = () => {
    dispatch(setProduct(props.e));
    navigate("/addmedication");
  };

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
      <div className="buttonContainer">
        <button className="buyButton">
          <div className="buyButtonText" onClick={handleUpdate}>
            update
          </div>
        </button>
        <button className="buyButton" style={{ marginLeft: "5px" }}>
          <div className="buyButtonText">delete</div>
        </button>
      </div>
    </div>
  );
};

export default Medication;
