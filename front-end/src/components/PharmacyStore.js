import React from "react";
import "./PharmacyStore.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Medication from "./Medication";
import axios from "axios";
const PharmacyStore = () => {
  const pharmacyUser = useSelector((state) => state.PharmacyUser.data);

  const [medications, setMedications] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:7000/api/getAllProductForOne/${pharmacyUser.id}`)
      .then(({ data }) => setMedications(data))
      .catch((err) => console.log(err));
  }, [pharmacyUser.id]);

  return (
    <div className="cardGrid">
      {medications.map((e, i) => {
        return <Medication e={e} key={i} />;
      })}
    </div>
  );
};

export default PharmacyStore;
