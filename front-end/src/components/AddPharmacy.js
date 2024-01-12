import React, { useState } from "react";
import "./AddMedication.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const AddPharmacy = () => {
  const user = useSelector((state) => state.user.data.data);
  console.log(user);
  const userId = user.id;
  console.log("addpharmacy", userId);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [tel, setTel] = useState(0);

  const handleSubmit = async () => {
    const pharmacie = {};

    if (name !== "") {
      pharmacie.name = name;
    }
    if (adress !== "") {
      pharmacie.address = adress;
    }
    if (tel !== 0) {
      pharmacie.tel = tel;
    }
    if (userId !== 0) {
      pharmacie.PharmacienId = userId;
    }
    axios.post("http://localhost:7000/api/Pharmacy", pharmacie).then((response) => {
        console.log("done");
        navigate("/pharmacy");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="contain">
      <div className="formContainer">
        <form>
          <input
            type="text"
            placeholder="adress "
            onChange={(e) => {
              setAdress(e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            placeholder="nom"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <input
            type="number"
            placeholder="telephone"
            onChange={(e) => {
              setTel(e.target.value);
            }}
          />
        </form>
        <button onClick={handleSubmit}> add your pharmacy </button>
      </div>
    </div>
  );
};

export default AddPharmacy;
