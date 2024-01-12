import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Home = () => {
  const navigate = useNavigate();
  const log = useSelector((state) => state.user.log);
  return (
    <div>
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
            fontWeight: "500",
          }}
        >
          {
            "Your Life Is Not A Joke. Take Care of it with Preventative Treatments"
          }
        </Box>
        <div />

        {log && (
          <button
            id="myButton"
            style={{ position: "absolute", bottom: "450px", right: "150px" }}
            onClick={() => {
              navigate("/doctors");
            }}
          >
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span href>Make an appointment</span>
          </button>
        )}
        <div className="description">
          <Typography
            variant="h4"
            sx={{ marginY: "40rem", textAlign: "left", color: "#555" }}
          >
            You can check every Hospitals and Pharmacy and make an appointment
            in two clicks.
            <br></br>
            Doctors with many Speciality are here to listen to your request and
            give you the best treatment.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Home;
