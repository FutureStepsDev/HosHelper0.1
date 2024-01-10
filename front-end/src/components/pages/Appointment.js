import React, { useState } from 'react'
import { useSelector } from "react-redux";
import axios from 'axios';
import "./Appointment.css"

const Appointment = () => {
  
 const user = useSelector((state) => state.user.data.data);
 const doc = useSelector((state) => state.docUser.data)
  
 const [date, setDate] = useState('');
 const [description, setDescription] = useState('');
 const [successMsg, setSuccessMsg] = useState(''); 

 const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:7000/api/appointments", {
        appointmentDate: date,
        patientId: user.id,
        doctorId: doc.id,
        description: description
      });

      console.log('Appointment created:', response.data);
      setDate('');
      setDescription('');
      setSuccessMsg('Appointment created successfully!'); 
    } catch (error) {
      console.error('Error creating appointment:', error);
    }
 };

 return (
    <div className="containerApp">
      <div className="card">
        <div className="card-details">
          <p className="text-title">Appointment Details</p>
          <p className="text-body">Doctor: {doc.UserName}</p>
          <p className="text-body">User: {user.UserName}</p>
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" onChange={(e) => setDate(e.target.value)} />
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" name="description" onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button className="card-button" onClick={handleSubmit}>Make an appointment</button>
      </div>
      {successMsg && <p className="success-msg">{successMsg}</p>} 
    </div>
 )
}

export default Appointment