import React from "react";
import "./Medication.css";
import { useDispatch } from "react-redux";
import { setProduct } from "./Features/ProductUpdate";
import { useNavigate } from "react-router";
import axios from "axios";
const Medication = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleUpdate = () => {
    dispatch(setProduct(props.e));
    navigate("/addmedication");
  };
  const handleDelete = () => {
    axios
      .delete(`http://localhost:7000/api/deleteProduct/${props.e.id}`)
      .then((response) => console.log("done"))
      .catch((err) => console.log(err));
    navigate("/profile");
  };
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
    //   <div className="buttonContainer">
    //     <button className="buyButton">
    //       <div className="buyButtonText" onClick={handleUpdate}>
    //         update
    //       </div>
    //     </button>
    //     <button className="buyButton" style={{ marginLeft: "5px" }}>
    //       <div className="buyButtonText" onClick={handleDelete}>
    //         delete
    //       </div>
    //     </button>
    //   </div>
    // </div>
    <div className="containerMed">
      <div className="wrapper">
        <img className="banner-image" src={props.e.image} alt="" />

        <h1> {props.e.name}</h1>
        <h3> {props.e.price}</h3>
        <p>{props.e.description}</p>
      </div>
      <div className="button-wrapper">
        <button className="btn outline" onClick={handleUpdate}>
          update
        </button>
        <button className="btn fill" onClick={handleDelete}>
          delete
        </button>
      </div>
    </div>
  );
};

export default Medication;
