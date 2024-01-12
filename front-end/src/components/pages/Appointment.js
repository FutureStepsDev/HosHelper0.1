import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./Appointment.css";

const Appointment = () => {
  const user = useSelector((state) => state.user.data.data);
  const doc = useSelector((state) => state.docUser.data);
  //  const Patient = useSelector((state) => state.patient.data);

  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await axios.get(
          `http://localhost:7000/api/patients/user/${user.id}`
        );
        setPatient(response.data);
      } catch (error) {
        console.error("Error fetching patient:", error);
      }
    };

    fetchPatient();
  }, [user.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:7000/api/appointments",
        {
          doctorName: doc.UserName,
          patientName: patient.UserName,
          appointmentDate: date,
          patientId: patient.id,
          doctorId: doc.id,
          description: description,
        }
      );

      console.log("Appointment created:", response.data);
      setDate("");
      setDescription("");
      setSuccessMsg("Appointment created successfully!");
    } catch (error) {
      console.error("Error creating appointment:", error);
    }
  };
  console.log(patient);

  return (
    <div className="containerAppointment">
      <div className="cardAppointment">
        <div className="cardAppointment-details">
          <p className="text-title">Appointment Details</p>
          <p className="text-body">Doctor: {doc.UserName}</p>
          {/* <p className="text-body">User: {user.UserName}</p> */}
          <p className="text-body">Patient: {patient && patient.UserName}</p>
          <label htmlFor="date">Date : </label>
          <input
            type="date"
            id="date"
            name="date"
            onChange={(e) => setDate(e.target.value)}
          />
          <br />
          <label htmlFor="description">Description : </label>
          <input
            type="text"
            id="description"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button className="cardAppointment-button" onClick={handleSubmit}>
          Make an appointment
        </button>
      </div>
      {successMsg && <p className="success-msg">{successMsg}</p>}
    </div>
  );
};

export default Appointment;
