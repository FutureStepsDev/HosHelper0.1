const { DataTypes } = require("sequelize");
const db = require("./index");

module.exports = (sequelize) => {
 const Appointment = sequelize.define('Appointment', {
    appointmentDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    doctorName: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    patientName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('pending', 'approved', 'rejected'),
      defaultValue: 'pending',
      allowNull: false,
    },
 });

  
 Appointment.associate = (models) => {
    Appointment.belongsTo(models.Doctor, {
      foreignKey: 'doctorId',
      allowNull: true
    });
    Appointment.belongsTo(models.Patient, {
      foreignKey: 'patientId',
      allowNull: true
    });
 };

 return Appointment;
};