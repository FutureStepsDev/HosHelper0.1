import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
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
    <Card
      sx={{
        maxWidth: 250,
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s",
        "&:hover": { transform: "scale(1.05)" },
        cursor: "pointer",
        marginBottom: "20px",
        marginRight: "20px",
      }}
      onClick={goToPharmacyStore}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "16px",
        }}
      >
        <Typography
          variant="h8"
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
        <Typography variant="body2" color="text.secondary">
          <strong>Address:</strong> {address}
          <br />
          <strong>tel:</strong> {tel}
          <br />
        </Typography>
      </CardContent>
      <CardContent>{/* <Map address={address} /> */}</CardContent>
    </Card>
  ) : null;
};

export default Cards;
