import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "./AppointmentsList.css";

const AppointmentsList = () => {
  const user = useSelector((state) => state.user.data.data);
  const [appointments, setAppointments] = useState([]);
  const [patient, setPatient] = useState(null);
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    fetchPatient();
    fetchDoctor();
  }, [user.id]);

  useEffect(() => {
    fetchAppointments();
  }, [patient, doctor]);

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

  const fetchDoctor = async () => {
    try {
      const response = await axios.get(
        `http://localhost:7000/api/doctor/user/${user.id}`
      );
      setDoctor(response.data);
    } catch (error) {
      console.error("Error fetching doctor:", error);
    }
  };

  const fetchAppointments = async () => {
    try {
      const response = await axios.get(
        "http://localhost:7000/api/appointments"
      );
      if (user.role === "Patient") {
        setAppointments(
          response.data.filter(
            (appointment) => appointment.patientId === patient.id
          )
        );
      } else if (user.role === "Doctor") {
        setAppointments(
          response.data.filter(
            (appointment) => appointment.doctorId === doctor.id
          )
        );
      } else {
        setAppointments(response.data);
      }
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  const approveAppointment = async (appointmentId) => {
    try {
      await axios.put(
        `http://localhost:7000/api/appointments/${appointmentId}/approve`
      );
      fetchAppointments();
    } catch (error) {
      console.error("Error approving appointment:", error);
    }
  };

  const rejectAppointment = async (appointmentId) => {
    try {
      await axios.put(
        `http://localhost:7000/api/appointments/${appointmentId}/reject`
      );
      fetchAppointments();
    } catch (error) {
      console.error("Error rejecting appointment:", error);
    }
  };

  console.log(appointments);
  return (
    <div class="cardApp">
      <div class="cardApp-details">
        <div class="text-title">Appointments</div>
        <ul>
          {appointments.map((appointment) => (
            <div class="text-body" key={appointment.id}>
              Appointment Date: {appointment.appointmentDate}
              <br />
              Description: {appointment.description}
              <br />
              Status: {appointment.status}
              {user.role === "Doctor" && (
                <>
                  <button
                    className="cardApp-button"
                    onClick={() => approveAppointment(appointment.id)}
                  >
                    Approve
                  </button>
                  <button
                    className="cardApp-button"
                    onClick={() => rejectAppointment(appointment.id)}
                  >
                    Reject
                  </button>
                </>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AppointmentsList;
