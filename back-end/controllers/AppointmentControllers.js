const db = require("..//models/index");
const Appointment = db.Appointment;

const createAppointment = async (req, res) => {
  try {
    const { appointmentDate, patientId, doctorId } = req.body;

    const newAppointment = await Appointment.create({
      appointmentDate,
      patientId,
      doctorId,
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

module.exports = {
  createAppointment,
  getAllAppointments,
};
