import React, { useState, useEffect } from 'react';
import Cards from "./PharmacyCard";
import "./Phamacy.css";
import axios from "axios"
const Pharmacy = () => {
  const [Phamarcy, setPharmacy] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:7000/api/getPharmacy').then((response)=>setPharmacy(response.data)).catch((error=>console.log(error)))
   
  }, []);
  const displayPharmacy =Phamarcy
  return (
    <div className="Pharmacy-list">
      {displayPharmacy.map((Pharmacy, index) => (
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
