import React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { setPharmacyUser } from "../Features/PharmacyUser";
// import Map from "./Map";
import { useNavigate } from "react-router-dom";
const Cards = ({ id, name, address, tel }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goToPharmacyStore = () => {
    dispatch(setPharmacyUser(id, name, address, tel));
    navigate("/productInOnePharmacy");
  };
  const hasData = name || address || tel;

  return hasData ? (
    <div
      sx={{
        cursor: "pointer",
        marginBottom: "20px",
        marginRight: "20px",
        backgroundColor: "transparent",
      }}
      onClick={goToPharmacyStore}
    >
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            fontWeight: "bold",
            marginBottom: "10px",
            color: "#2196F3",
          }}
        >
          {name}
        </Typography>
        <Typography color="text.secondary">
          <strong>Address:</strong> {address}
          <br />
          <strong>tel:</strong> {tel}
          <br />
        </Typography>
      </div>
    </div>
  ) : null;
};

export default Cards;
