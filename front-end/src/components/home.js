import React, { useState, useEffect } from "react";
import Cards from "./pages/hospitalCart";
import "./home.css";
import { fetchHospitals } from "./Features/AllData";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  const [startIndex, setStartIndex] = useState(0);
  const hospitalsPerPage = 3;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHospitals());
  }, [dispatch]);
  const hospitals = useSelector((state) => state.hospitals.data);
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
