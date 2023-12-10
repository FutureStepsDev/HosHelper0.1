import React from "react";
import Button from "@material-ui/core/Button";
import "./SideBar.css";
const Sidebar = () => {
  return (
    <div className="container">
      <Button color="inherit">Home </Button>
      <br />
      <hr />
      <Button color="inherit">Sign Up</Button>
      <br />
      <hr />
      <Button color="inherit">Sign In</Button>
      <br />
      <hr />
      <Button color="inherit">About Us </Button>
      <br />
      <hr />
      <Button color="inherit">Contact</Button>
      <br />
      <hr />
      <Button color="inherit">Hospital</Button>
      <br />
      <hr />
      <Button color="inherit">Pharmacy</Button>
      <br />
      <hr />
      <Button color="inherit">Doctors</Button>
    </div>
  );
};

export default Sidebar;