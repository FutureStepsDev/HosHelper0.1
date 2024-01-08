import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { setUser } from "./Features/User";
import { useDispatch } from "react-redux";
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
      });

      if (response.data.message === "Login successful") {
        console.log("Login successful", response.data.user);

        dispatch(setUser({ data: response.data.user, log: true }));

        navigate("/");
      } else {
        setError(response.data.error || "Invalid email or password");
      }
    } catch (err) {
      console.log(err);
      setError("Your email or password are not correcr.Please try again. ");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url('https://t4.ftcdn.net/jpg/03/67/85/53/360_F_367855342_hC9tRkea0aqxsyqfOzBwjc9Tv3jiSmNz.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Container
        component="main"
        maxWidth="xs"
        style={{
          padding: "20px",
          borderRadius: "10px",
          marginTop: "50px",
          marginLeft: "750px",
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
          style={{ color: "blue", marginBottom: "10px" }}
        >
          Don't have an account? <Link to="/Signup">Join Us</Link>
        </Typography>
      </Container>
    </div>
  );
};

export default Login;
