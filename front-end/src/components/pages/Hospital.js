import React from "react";
import Cards from "../pages/hospitalCart";
import "./Hospital.css";
import { fetchHospitals } from "../Features/AllData";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const Hospital = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHospitals());
  }, [dispatch]);

  const hospitals = useSelector((state) => state.hospitals.data);
  
console.log(hospitals[0],"Hospitals")
  return (
    <div className="hospital-list">
      {hospitals.map((hospital, index) => (
        <Cards
          key={index}
          hospitalName={hospital.hospitalName}
          imageUrl={hospital.imageUrl}
          address={hospital.address}
          phone={hospital.phone}
          fax={hospital.fax}
          emergency={hospital.emergency}
          websites={hospital.websites}
          location={hospital.location}
        />
      ))}
    </div>
  );
};

export default Hospital;
