import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { setUser } from "./Features/User";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:7000/api/signin", {
        email,
        password,
      }, { withCredentials: true });
  
      if (response.status === 200) {
        console.log("Login successful", response.data.user);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        dispatch(setUser(response.data.user));
        navigate("/profile");
  
        try {
          const profileResponse = await axios.get("http://localhost:7000/api/profile", { withCredentials: true });
          console.log(profileResponse.data);
        } catch (profileError) {
          console.error("Error fetching profile:", profileError);
          setError("Error fetching user profile. Please try again later.");
        }
      } else {
        setError(response.data.error || "Invalid email or password");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Your email or password are not correct. Please try again.");
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
        label={email.trim() === "" ? "Email" : ""}
        type="text"
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
        component={Link}
        variant="contained"
        style={{ backgroundColor: "#5A4FCF", color: "white" }}
        fullWidth
      >
        Login
      </Button>
      <br />
      <br />
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