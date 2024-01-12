import React, { useState, useEffect } from "react";
import { BsFillArchiveFill, BsPeopleFill } from "react-icons/bs";
import "./Dashbord.css";
import UserTable from "./UserTables";
import PharmacyTable from "./pharmacyTables";
import HospitalTable from "./HospitalsTables";

function Dashbord() {
  const [userCount, setUserCount] = useState(0);
  const [pharmacyCount, setPharmacyCount] = useState(0);
  const [hospitalCount, setHospitalCount] = useState(0); // Add hospital count state
  const [showUserTable, setShowUserTable] = useState(false);
  const [showPharmacyTable, setShowPharmacyTable] = useState(false);
  const [showHospital, setShowHospital] = useState(false);

  useEffect(() => {
    fetch("http://localhost:7000/api/getUserCount")
      .then((response) => response.json())
      .then((data) => setUserCount(data.count))
      .catch((error) => console.error("Error fetching user count:", error));

    fetch("http://localhost:7000/api/getPharmacyCount")
      .then((response) => response.json())
      .then((data) => setPharmacyCount(data.count))
      .catch((error) => console.error("Error fetching pharmacy count:", error));

    fetch("http://localhost:7000/api/getHospitalCount") 
      .then((response) => response.json())
      .then((data) => setHospitalCount(data.count))
      .catch((error) => console.error("Error fetching hospital count:", error));
  }, []);

  const toggleUserTable = () => {
    setShowUserTable(!showUserTable);
  };

  const togglePharmacyTable = () => {
    setShowPharmacyTable(!showPharmacyTable);
  };

  const toggleHospitalTable = () => {
    setShowHospital(!showHospital);
  };

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>
      <div className="main-cards">
        <div className="card card-blue" onClick={toggleHospitalTable}>
          <div className="card-inner">
            <h3>Hospitals</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>{hospitalCount}</h1>
        </div>
        <div className="card card-orange" onClick={togglePharmacyTable}>
          <div className="card-inner">
            <h3>Pharmacy</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>{pharmacyCount}</h1>
        </div>
        <div className="card card-green" onClick={toggleUserTable}>
          <div className="card-inner">
            <h3>Users</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>{userCount}</h1>
        </div>
      </div>

      {showUserTable && <div className="user-table"><UserTable /></div>}
      {showPharmacyTable && <div className="pharmacy-table"><PharmacyTable /></div>}
      {showHospital && <HospitalTable />}
    </main>
  );
}

export default Dashbord;
