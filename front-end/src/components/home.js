import React, { useState, useEffect } from "react";
import Cards from "./pages/hospitalCart";
import "./home.css";
import axios from "axios";
const Home = () => {
  const [hospitals, setHospitals] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const hospitalsPerPage = 3;

  useEffect(() => {
    axios
      .get("http://localhost:7000/api/gethospitals")
      .then((response) => setHospitals(response.data))
      .catch((error) => console.log(error));

    // const interval = setInterval(() => {
    //   setStartIndex((prevIndex) => (prevIndex + hospitalsPerPage) % hospitals.length);
    // }, 20000);

    // return () => clearInterval(interval);
  }, []);
  console.log(hospitals);
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
