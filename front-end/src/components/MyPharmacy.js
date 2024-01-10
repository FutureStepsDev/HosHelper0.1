import React, { useEffect, useState } from "react";
import Cards from "./pages/PharmacyCard";
import "./pages/Phamacy.css";
import "./MyPharmacy.css";
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

  const addMedication = () => {
    dispatch(setPharmacyUser(data[0]));
    navigate("/addmedications");
  };

  const addProduct = () => {
    if (data.length > 0) {
      dispatch(setPharmacyUser(data[0]));
      navigate("/pharmacystore");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbDVxr5-0aZ8Jtj36uYriBCv0UVxZiOc1gdA&usqp=CAU')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
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
      <div style={{ marginLeft: "-100px", marginTop: "-30px" }}>
        <button className="btn-update" onClick={addMedication}>
          add medication
        </button>
      </div>
    </div>
  );
};

export default MyPharmacy;
