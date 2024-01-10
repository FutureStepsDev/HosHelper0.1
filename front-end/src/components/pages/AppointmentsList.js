import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useSelector } from "react-redux";
// import Appointment from './Appointment';

const AppointmentsList = () => {
    const user = useSelector((state) => state.user.data.data);
    const [appointments, setAppointments] = useState([]);
    console.log(user.id)

    useEffect(() => {
        fetchAppointments();
    }, []);

    const fetchAppointments = async () => {
        try {
            const response = await axios.get("http://localhost:7000/api/appointments");
            if (user.role === 'Patient') {
                setAppointments(response.data.filter(appointment => appointment.patientId === user.id));
            } else if (user.role === 'Doctor') {
                setAppointments(response.data.filter(appointment => appointment.doctorId === user.id));
            } else {
                setAppointments(response.data);
            }
        } catch (error) {
            console.error('Error fetching appointments:', error);
        }
    };

    console.log(appointments)
    return (
        <div class="pageAp">
            <div class="marginAp"></div>
            <h1>Appointments</h1>
            <ul>
                {appointments.map(appointment => (
                    <li key={appointment.id}>
                        Appointment Date: {appointment.appointmentDate}
                        <br />
                        Description: {appointment.description}
                        <br />
                        Status: {appointment.status}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AppointmentsList
