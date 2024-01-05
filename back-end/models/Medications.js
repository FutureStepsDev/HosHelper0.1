const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Medication = sequelize.define(
    "Medication",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: true,
    }
  );

  // Medication.associate = (models) => {
  //   Medication.belongsTo(models.Pharmacien, {
  //     onDelete: "cascade",
  //   });
  // };
  Medication.associate = (models) => {
    Medication.belongsTo(models.Pharmacy, {
      onDelete: "cascade",
    });
  };
  return Medication;
};
