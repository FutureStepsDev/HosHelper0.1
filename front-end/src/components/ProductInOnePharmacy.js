import React from "react";
import MedicationForOne from "./MedicationsForOne";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
const ProductInOnePharmacy = () => {
  const pharmacyUser = useSelector((state) => state.PharmacyUser.data);
  console.log(pharmacyUser);
  const [medications, setMedications] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:7000/api/getAllProductForOne/${pharmacyUser}`)
      .then(({ data }) => setMedications(data))
      .catch((err) => console.log(err));
  }, [pharmacyUser]);

  return (
    <div className="cardGrid">
      {medications.map((e, i) => {
        return <MedicationForOne e={e} key={i} />;
      })}
    </div>
  );
};

export default ProductInOnePharmacy;
