import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "./Features/User";
const UpdateProfil = () => {
  const [UserName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.data.data);
  console.log(user.id);
  const dispatch = useDispatch();
  const handleUpdate = () => {
    const profil = {};
    if (UserName !== "") {
      profil.UserName = UserName;
    }
    if (image !== "") {
      profil.image = image;
    }
    if (role !== "") {
      profil.role = role;
    }
    if (password !== "") {
      profil.password = password;
    }
    if (email !== "") {
      profil.email = email;
    }
    axios
      .put(`http://localhost:7000/api/updateProfile/${user.id}`, profil)
      .then((response) => console.log("done"))
      .catch((err) => console.log(err));
    dispatch(setUser({ data: { ...user, ...profil }, log: true }));
    navigate("/profile");
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        padding: "10px",
        borderRadius: "10px",
        marginTop: "50px",
        color: "white",
      }}
    >
      <Typography variant="h4" gutterBottom>
        SignUp
      </Typography>
      {error && (
        <Typography
          variant="body2"
          style={{ color: "red", marginBottom: "10px" }}
        >
          {error}
        </Typography>
      )}
      <TextField
        fullWidth
        margin="normal"
        type="text"
        variant="outlined"
        onChange={(e) => setName(e.target.value)}
        InputProps={{
          style: { backgroundColor: "white", color: "#0C2340" },
        }}
      />

      <TextField
        fullWidth
        margin="normal"
        type="email"
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
        InputProps={{
          style: { backgroundColor: "white", color: "#0C2340" },
        }}
      />
      <TextField
        fullWidth
        margin="normal"
        type="email"
        variant="outlined"
        onChange={(e) => setRole(e.target.value)}
        InputProps={{
          style: { backgroundColor: "white", color: "#0C2340" },
        }}
      />
      <TextField
        fullWidth
        margin="normal"
        type="password"
        variant="outlined"
        onChange={(e) => setPassword(e.target.value)}
        InputProps={{
          style: { backgroundColor: "white", color: "#0C2340" },
        }}
      />

      <label htmlFor="role" style={{ color: "white", marginBottom: "10px" }}>
        Role:
      </label>

      <TextField
        fullWidth
        margin="normal"
        label="Image URL"
        type="text"
        onChange={(e) => setImage(e.target.value)}
        InputProps={{
          style: { backgroundColor: "white", color: "#0C2340" },
        }}
      />

      <Button
        style={{
          backgroundColor: "#5A4FCF",
          color: "white",
          marginTop: "10px",
        }}
        onClick={handleUpdate}
      >
        Submit
      </Button>
    </Container>
  );
};

export default UpdateProfil;
