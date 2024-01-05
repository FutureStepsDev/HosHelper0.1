import React, { useEffect, useState } from "react";
import Cards from "./pages/PharmacyCard";
import "./pages/Phamacy.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPharmacyUser } from "./Features/PharmacyUser";
const MyPharmacy = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const user = useSelector((state) => state.user.data.data);
  const [profil, setProfil] = useState({});

  useEffect(() => {
    setProfil(user);
  }, [user]);
  useEffect(() => {
    axios
      .get(`http://localhost:7000/api/getAllPharmacyForOne/${profil.id}`)
      .then(({ data }) => setData([data]))
      .catch((err) => console.log(err));
  }, [profil.id]);

  const addProduct = () => {
    if (data.length > 0) {
      console.log("Data to set:", data[0]);
      dispatch(setPharmacyUser(data[0]));
      navigate("/pharmacystore");
    }
  };

  return (
    <div className="Pharmacy-list" onClick={addProduct}>
      {data.map((Pharmacy, index) => (
        <div className="card" key={index}>
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

export default MyPharmacy;
