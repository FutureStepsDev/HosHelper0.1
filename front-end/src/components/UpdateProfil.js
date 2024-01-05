import React, { useState, useRef } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "./Features/User";
import { CloudinaryContext, Image } from "cloudinary-react";
const UpdateProfil = () => {
  const [UserName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [adress, setAdress] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const inputFileRef = useRef();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.data.data);
  console.log(user.id);
  const dispatch = useDispatch();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
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
    if (adress !== "") {
      profil.adress = adress;
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
        Update your profil
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
        label={UserName.trim() === "" ? " UserName" : ""}
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
        label={email.trim() === "" ? "Email" : ""}
        onChange={(e) => setEmail(e.target.value)}
        InputProps={{
          style: { backgroundColor: "white", color: "#0C2340" },
        }}
      />

      {user.role === "Pharmacy" && (
        <TextField
          fullWidth
          margin="normal"
          type="adress"
          variant="outlined"
          label={adress.trim() === "" ? "Adress" : ""}
          onChange={(e) => setAdress(e.target.value)}
          InputProps={{
            style: { backgroundColor: "white", color: "#0C2340" },
          }}
        />
      )}
      <TextField
        fullWidth
        margin="normal"
        type="password"
        variant="outlined"
        label={password.trim() === "" ? "Password" : ""}
        onChange={(e) => setPassword(e.target.value)}
        InputProps={{
          style: { backgroundColor: "white", color: "#0C2340" },
        }}
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleImageChange(e)}
        style={{ display: "none" }}
        ref={inputFileRef}
      />
      <Button
        onClick={() => inputFileRef.current.click()}
        variant="contained"
        style={{
          backgroundColor: "#5A4FCF",
          color: "white",
          marginTop: "10px",
        }}
        fullWidth
      >
        Upload Image
      </Button>

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

      <CloudinaryContext cloudName="dmefds9ta">
        {image && <Image publicId={image} />}
      </CloudinaryContext>
    </Container>
  );
};

export default UpdateProfil;
