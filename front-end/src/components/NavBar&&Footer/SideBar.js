import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import "./SideBar.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Sidebar = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.data.data);
  const [profil, setProfil] = useState({});

  console.log(user);
  useEffect(() => {
    setProfil(user);
  }, [user]);
  console.log("sidebar", profil);
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
        About Us
      </Button>
      <br />
      <hr />
      {profil.role === "Admin" && (
        <Button color="inherit" onClick={() => navigate("/dashbord")}>
          dashbord
        </Button>
      )}
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
      <Button color="inherit" onClick={() => navigate("/doctors")}>
        Doctors
      </Button>
    </div>
  );
};

export default Sidebar;
