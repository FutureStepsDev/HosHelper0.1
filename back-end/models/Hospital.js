const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Hospital = sequelize.define("Hospital", {
    hospitalName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fax: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    emergency: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    websites: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Hospital.bulkInsertData = async (data) => {
    try {
      await Hospital.bulkCreate(data, {
        ignoreDuplicates: true,
      });
      console.log("Data inserted successfully.");
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  };

  return Hospital;
};
