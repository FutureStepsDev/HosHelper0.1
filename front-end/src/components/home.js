import React, { useState, useEffect } from 'react';
import Cards from './pages/hospitalCart';
import './home.css';

const Home = () => {
  const [hospitals, setHospitals] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const hospitalsPerPage = 3;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/gethospitals');
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setHospitals(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();

    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + hospitalsPerPage) % hospitals.length);
    }, 20000);

    return () => clearInterval(interval);
  }, [hospitals]);

  const displayedHospitals = hospitals.slice(startIndex, startIndex + hospitalsPerPage);

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
