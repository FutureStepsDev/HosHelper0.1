import React from 'react';
import PharmacyDatas from '../datas/PharmacyDatas';
import Cards from './PharmacyCard';
import './Phamacy.css';

const Pharmacy = () => {
  return (
    <div className="Pharmacy-list">
      {PharmacyDatas.map((Pharmacy, index) => (
        <div className='card' key={index}>
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
