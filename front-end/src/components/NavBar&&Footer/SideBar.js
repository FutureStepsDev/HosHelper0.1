import React from "react";
import Button from "@material-ui/core/Button";
import "./SideBar.css";
const Sidebar = () => {
  return (
    <div className="container">
      <Button color="inherit" href ="/" >Home </Button>
      <br />
      <hr />
      <Button color="inherit" href ="signup" >Sign Up</Button>
      <br />
      <hr />
      <Button color="inherit" href ="/login">Sign In</Button>
      <br />
      <hr />
      <Button color="inherit" href ="/aboutus" > About Us </Button>
      <br />
      <hr />
      <Button color="inherit">Contact</Button>
      <br />
      <hr />
      <Button color="inherit" href ="/hospital">Hospital</Button>
      <br />
      <hr />
      <Button color="inherit" href ="/pharmacy">Pharmacy</Button>
      <br />
      <hr />
      <Button color="inherit">Doctors</Button>
    </div>
  );
};

export default Sidebar;
