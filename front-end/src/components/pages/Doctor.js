import React, { useEffect ,useState} from "react";
import axios from "axios";
import DoctorCard from "./doctorCard.js";
import "./Doctor.css"

const DoctorList = () => {
 const [doctors, setDoctors] = useState([]);

 useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("http://localhost:7000/api/doctors");
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
 }, []);



 return (
    <div className="doc-list"> 
      {doctors.map((doctor) => (
        <div className="card-doc">
        <DoctorCard key={doctor.id} doctor={doctor} />
        </div>
      ))}
    </div>
 );
};

export default DoctorList;