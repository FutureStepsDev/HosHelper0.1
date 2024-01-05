const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
module.exports = (sequelize) => {
  const Pharmacien = sequelize.define(
    "Pharmacien",
    {
      UserName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "UserName is required" },
          len: { args: [0, 32], msg: "Name must be at most 32 characters" },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: { msg: "Email is required" },
          isEmail: { msg: "Please add a valid email" },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Password is required" },
          len: { args: [6], msg: "Password must have at least 6 characters" },
        },
      },
      role: {
        type: DataTypes.ENUM("Pharmacy", "Patient", "Doctor"),
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      adress: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: true,
      hooks: {
        beforeCreate: async (pharmacien) => {
          if (pharmacien.password) {
            pharmacien.password = await bcrypt.hash(pharmacien.password, 10);
          }
        },
      },
    }
  );
  Pharmacien.associate = (models) => {
    Pharmacien.hasOne(models.Pharmacy, {
      onDelete: "cascade",
    });
  };

  return Pharmacien;
};
