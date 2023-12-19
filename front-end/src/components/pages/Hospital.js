import React, { useState, useEffect } from 'react';
import Cards from '../pages/hospitalCart';
import './Hospital.css';

const Hospital = () => {
  const [hospitals, setHospitals] = useState([]);

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
  }, []);

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
        />
      ))}
    </div>
  );
};

export default Hospital;
