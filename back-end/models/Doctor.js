const { DataTypes, Sequelize } = require("sequelize");
const db = require("./index");

module.exports = (sequelize) => {
  const Doctor = sequelize.define('Doctor', {
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
    specification: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    hospitalsRelations: {
      type: DataTypes.STRING,
    }
  });

  Doctor.associate = (models) => {
    Doctor.hasMany(models.Appointment, {
      foreignKey: 'doctorId', 
      as: 'appointments'
    });
  };

  return Doctor;
};
