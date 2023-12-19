import React, { useState, useEffect } from "react";
import Cards from "./pages/hospitalCart";
import hospitalData from "./datas/HospitalDatas";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { setHospitals } from "./Features/AllData";
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHospitals(hospitalData));
  }, [dispatch]);
  const hospitals = useSelector((state) => state.hospitals.hospitals);

  const [startIndex, setStartIndex] = useState(0);
  const hospitalsPerPage = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex(
        (prevIndex) => (prevIndex + hospitalsPerPage) % hospitals.length
      );
    }, 20000);

    return () => clearInterval(interval);
  }, [hospitals.length]);

  const displayedHospitals = hospitals.slice(
    startIndex,
    startIndex + hospitalsPerPage
  );

  return (
    <div className="cards">
      <div className="card-container">
        {displayedHospitals.map((hospital, index) => (
          <Cards
            key={index}
            hospitalName={hospital.hospitalName}
            imageUrl={hospital.imageUrl}
            address={hospital.address}
            phone={hospital.phone}
            fax={hospital.fax}
            emergency={hospital.emergency}
            websites={hospital.websites}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
