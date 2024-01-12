const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Patient = sequelize.define('Patient', {
    UserName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'UserName is required' },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: { msg: 'Email is required' },
        isEmail: { msg: 'Please add a valid email' },
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Weight: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    Height: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  // Patient.hasMany(sequelize.models.Appointment, { foreignKey: 'patientId', as: 'appointments' });
  Patient.associate = (models) => {
    Patient.hasMany(models.Appointment, {
      foreignKey: 'patientId', 
      as: 'appointments'
    });
  };

  return Patient;
};
