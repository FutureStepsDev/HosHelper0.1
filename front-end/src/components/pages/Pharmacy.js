import React, { useEffect } from "react";
import Cards from "./PharmacyCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhamacies } from "../Features/pharmacyData";
import "./Phamacy.css";

const Pharmacy = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhamacies());
  }, [dispatch]);
  const pharmacies = useSelector((state) => state.pharmacies.data);

  return (
    <div className="Pharmacy-list">
      {pharmacies.map((Pharmacy, index) => (
        <div className="card" key={index}>
          <Cards
            name={Pharmacy.name}
            address={Pharmacy.address}
            tel={Pharmacy.tel}
          />
        </div>
      ))}
    </div>
  );
};

export default Pharmacy;
