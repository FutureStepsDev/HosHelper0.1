const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Pharmacy = sequelize.define("Pharmacy", {
    PharmacyName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tel: {
      type: DataTypes.STRING,
      allowNull: true,
    },
   
  });



  return Pharmacy;
};
