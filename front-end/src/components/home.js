// Home.jsx
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./home.css";

const Home = () => {
  return (
    <div className="banner">
      <Box
        sx={{
          display: "grid",
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "grey.100",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",
          border: "1px solid",
          borderColor: (theme) =>
            theme.palette.mode === "dark" ? "grey.800" : "grey.300",
          p: 1,
          borderRadius: 2,
          fontSize: "2rem",
          fontWeight: "700",
        }}
      >
        {"We give you  solution to your pain"}
      </Box>

      <div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className="mt-5"
          onClick={() => {
            // Handle appointment button click logic
            console.log("Appointment button clicked");
          }}
          sx={{ margin: '10rem', marginLeft: '70rem', display: 'block' }}
        >
          Take an Appointment
        </Button>

        <Typography variant="h4" sx={{ marginY: '40rem', textAlign: 'left', color: '#555' }}>
          You can check every Hospitals and Pharmacy and make an appointment in two clicks.
          Doctors with many Speciality are here to listen to your request and give you the best treatment.
        </Typography>
        
      </div>
    </div>
  );
};

export default Home;
