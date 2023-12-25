import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const Navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:7000/api/signin", {
        email,
        password,
      });

      if (response.data.message === "Login successful") {
        console.log("Login successful", response.data.user);
        setUser(response.data.user);

        Navigate("/profile"); 
      } else {
        setError(response.data.error || "Invalid email or password");
      }
    } catch (err) {
      console.error(err);
      setError("Your email or password is incorrect. Please try again.");
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "50px",
        color: "white",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <TextField
        fullWidth
        margin="normal"
        label="Email"
        type="text"
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Password"
        type="password"
        variant="outlined"
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && (
        <Typography
          variant="body2"
          style={{ color: "red", marginBottom: "10px" }}
        >
          {error}
        </Typography>
      )}
      <Button
        onClick={handleLogin}
        variant="contained"
        style={{ backgroundColor: "#5A4FCF", color: "white" }}
        fullWidth
      >
        Login
      </Button>
      <Typography
        variant="body2"
        style={{ color: "white", marginBottom: "10px" }}
      >
        Don't have an account? <Link to="/Signup">Join Us</Link>
      </Typography>
      <Button component={Link} to="/Signup" fullWidth>
        SignUp
      </Button>
    </Container>
  );
};

export default Login;
