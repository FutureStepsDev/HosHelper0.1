const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Pharmacy = sequelize.define("Pharmacy", {
    name: {
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

  Pharmacy.associate = (models) => {
    Pharmacy.hasMany(models.Medication, {
      onDelete: "cascade",
    });
    Pharmacy.belongsTo(models.Pharmacien, {
      onDelete: "cascade",
    });
  };
  // Pharmacy.associate = (models) => {
  //   Pharmacy.belongsTo(models.Pharmacien, {
  //     onDelete: "cascade",
  //   });
  // };
  return Pharmacy;
};
