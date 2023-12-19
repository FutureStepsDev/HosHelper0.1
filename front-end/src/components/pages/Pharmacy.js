import React from "react";
import PharmacyDatas from "../datas/PharmacyDatas";
import Cards from "./PharmacyCard";
import "./Phamacy.css";
import { setPharmacy } from "../Features/pharmacyData";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const Pharmacy = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPharmacy(PharmacyDatas));
  }, [dispatch]);
  const pharmacies = useSelector((state) => state.pharmacy.pharmacy);
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
