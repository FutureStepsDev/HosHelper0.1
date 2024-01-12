// Dashbord.js
import React, { useState, useEffect } from "react";
import { BsFillArchiveFill, BsPeopleFill } from "react-icons/bs";
import "./Dashbord.css";
import UserTable from "./UserTables";

function Dashbord() {
  const [userCount, setUserCount] = useState(0);
  const [pharmacyCount, setPharmacyCount] = useState(0);

  useEffect(() => {
    // Fetch the real number of users and pharmacies from your backend
    fetch("http://localhost:7000/api/getUserCount")
      .then((response) => response.json())
      .then((data) => setUserCount(data.count))
      .catch((error) => console.error("Error fetching user count:", error));

    fetch("http://localhost:7000/api/getPharmacyCount")
      .then((response) => response.json())
      .then((data) => setPharmacyCount(data.count))
      .catch((error) => console.error("Error fetching pharmacy count:", error));
  }, []);

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className=" card-blue">
          <div className="card-inner">
            <h3>Hospitals</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>300</h1>{" "}
          {/* You can replace this with the real number of hospitals if needed */}
        </div>
        <div className=" card-orange">
          <div className="card-inner">
            <h3>Pharmacy</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>{pharmacyCount}</h1>
        </div>
        <div className="card-green">
          <div className="card-inner">
            <h3>Patients</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>{userCount}</h1>
        </div>
        <div className=" card-red">
          <div className="card-inner">
            <h3>Doctors</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>42</h1> {/* Replace with the real number of doctors if needed */}
        </div>
      </div>
      <div className="user-table">
        <UserTable />
      </div>
    </main>
  );
}

export default Dashbord;
