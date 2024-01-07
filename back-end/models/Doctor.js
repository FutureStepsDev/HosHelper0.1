const { DataTypes } = require("sequelize");

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
    // specification: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // hospitalsRelations: {
    //   type: DataTypes.STRING,
    // }
  });

  // Doctor.hasMany(sequelize.models.Appointment, { foreignKey: 'doctorId', as: 'appointments' });

  return Doctor;
};
