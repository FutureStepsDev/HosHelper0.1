import React, { useState, useRef } from "react";
import axios from "axios";
import { CloudinaryContext, Image } from "cloudinary-react";
import { Button, Container, TextField, Typography } from "@mui/material";

const SignUp = () => {
  const [UserName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  const cloudinaryUploadUrl = `https://api.cloudinary.com/v1_1/dmefds9ta/image/upload`;
  const uploadPreset = "samisa";
  const inputFileRef = useRef();

  const handleAddUser = async (e) => {
    setError(false);
    e.preventDefault();

    try {
      let imageData = {};

      if (image) {
        const cloudinaryResponse = await axios.post(cloudinaryUploadUrl, {
          file: image,
          upload_preset: uploadPreset,
        });

        const imageUrl = cloudinaryResponse.data.secure_url;
        imageData = { image: imageUrl };
      }

      const res = await axios.post("http://localhost:7000/api/signup", {
        UserName,
        email,
        password,
        role,
        ...imageData,
      });
      if (role === "Pharmacy") {
        await axios.post("http://localhost:7000/api/signupPhar", {
          UserName,
          email,
          password,
          role,
          ...imageData,
        });
      }

      res.data && window.location.replace("/login");
    } catch (error) {
      setError(true);
    }
  };

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

  const validatePassword = () => {
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }
    return true;
  };

  const validateRole = () => {
    if (!role) {
      setError("Role is required");
      return false;
    }
    return true;
  };

  const validateEmail = () => {
    if (email.trim() === "") {
      setError("Email is required");
      return false;
    }
    return true;
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
        label={UserName.trim() === "" ? " UserName" : ""}
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
        label={email.trim() === "" ? "Email" : ""}
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
        label={password.trim() === "" ? "Password" : ""}
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
      <select
        id="role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          backgroundColor: "white",
          color: "#0C2340",
        }}
      >
        <option value=""></option>
        <option value="Patient">Patient</option>
        <option value="Pharmacy">Pharmacy</option>
        <option value="Doctor">Doctor</option>
      </select>

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
        onClick={(e) => {
          setError("");

          if (validateEmail() && validatePassword() && validateRole()) {
            handleAddUser(e);
          }
        }}
        variant="contained"
        style={{
          backgroundColor: "#5A4FCF",
          color: "white",
          marginTop: "10px",
        }}
        fullWidth
      >
        Submit
      </Button>

      <CloudinaryContext cloudName="dmefds9ta">
        {image && <Image publicId={image} />}
      </CloudinaryContext>
    </Container>
  );
};

export default SignUp;