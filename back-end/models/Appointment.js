const { DataTypes } = require("sequelize");
const db = require("./index");

module.exports = (sequelize) => {
  const Appointment = sequelize.define('Appointment', {
    appointmentDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: { msg: 'Appointment date is required' },
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  
  // Appointment.belongsTo(db.Doctor, { foreignKey: 'doctorId', allowNull: true });
  // Appointment.belongsTo(db.Patient, { foreignKey: 'patientId', allowNull: true });

  return Appointment;
};
