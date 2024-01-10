const db = require("../models/index");
const Appointment = db.Appointment;
const Patient = db.Patient;
const Doctor = db.Doctor;

const createAppointment = async (req, res) => {
  try {
    const { doctorName, patientName, appointmentDate, patientId, doctorId ,description } = req.body;

    const newAppointment = await Appointment.create({
      doctorName, 
      patientName,
      appointmentDate,
      patientId,
      doctorId,
      description
    });

    res.status(201).json({
      success: true,
      appointment: newAppointment,
    });
  } catch (error) {
    console.error('Error creating appointment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.findAll();
    res.json(appointments);
  } catch (error) {
    console.error('Error getting appointments:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const approveAppointment = async (req, res) => {
  const { appointmentId } = req.params;

  try {
    const appointment = await Appointment.findByPk(appointmentId);

    if (!appointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }

    // Assuming you have the doctor's ID from the authentication process
    const doctorId = req.user.id;

    // Check if the doctorId matches the appointment's doctorId
    if (appointment.doctorId !== doctorId) {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    // Update the status to 'approved'
    appointment.status = 'approved';
    await appointment.save();

    res.json({
      success: true,
      appointment,
    });
  } catch (error) {
    console.error('Error approving appointment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createAppointment,
  getAllAppointments,
  approveAppointment,
};
