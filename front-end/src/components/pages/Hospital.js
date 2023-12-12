import React from 'react';
import Cards from '../pages/hospitalCart';
import hospitalData from '../datas/HospitalDatas';
import './Hospital.css';

const Hospital = () => {
  return (
    <div className="hospital-list">
      {hospitalData.map((hospital, index) => (
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
