import React from "react";
import "./PharmacyStore.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMedication } from "./Features/Medication";
import Medication from "./Medication";
const PharmacyStore = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMedication());
  }, [dispatch]);
  const medications = useSelector((state) => state.medications.data);
  useEffect(() => {
    setData(medications);
  }, [medications]);
  return (
    <div className="cardGrid">
      {data.map((e, i) => {
        return <Medication e={e} key={i} />;
      })}
    </div>
  );
};

export default PharmacyStore;
