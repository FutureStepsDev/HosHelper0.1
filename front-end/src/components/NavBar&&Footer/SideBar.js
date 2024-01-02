import React from "react";
import Button from "@material-ui/core/Button";
import "./SideBar.css";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <Button color="inherit" onClick={() => navigate("/")}>
        Home
      </Button>
      <br />
      <hr />
      <Button color="inherit" onClick={() => navigate("/SignUp")}>
        Sign Up
      </Button>
      <br />
      <hr />
      <Button color="inherit" onClick={() => navigate("/login")}>
        Sign In
      </Button>
      <br />
      <hr />
      <Button color="inherit" onClick={() => navigate("/aboutus")}>
        {" "}
        About Us{" "}
      </Button>
      <br />
      <hr />
      <Button color="inherit">Contact</Button>
      <br />
      <hr />
      <Button color="inherit" onClick={() => navigate("/hospital")}>
        Hospital
      </Button>
      <br />
      <hr />
      <Button color="inherit" onClick={() => navigate("/pharmacy")}>
        Pharmacy
      </Button>
      <br />
      <hr />
      <Button color="inherit">Doctors</Button>
    </div>
  );
};

export default Sidebar;
