import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHospitals } from "../Features/AllData";
import { Link } from "react-router-dom";
import Cards from "./hospitalCart";
import "./Hospital.css";
const Hospital = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHospitals());
  }, [dispatch]);
  const hospitals = useSelector((state) => state.hospitals.data);
  return (
    <div className="hospital-list">
      {hospitals.map((hospital, index) => (
        <Link key={index} to={`/hospital/${hospital.hospitalName}`}>
          <Cards
            hospitalName={hospital.hospitalName}
            imageUrl={hospital.imageUrl}
            address={hospital.address}
            phone={hospital.phone}
            fax={hospital.fax}
            emergency={hospital.emergency}
            websites={hospital.websites}
          />
        </Link>
      ))}
    </div>
  );
};
export default Hospital;
