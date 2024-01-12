const { DataTypes } = require("sequelize");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports = (sequelize) => {
    const User = sequelize.define('User', {
      UserName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'UserName is required' },
          len: { args: [0, 32], msg: 'Name must be at most 32 characters' },
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
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Password is required' },
          len: { args: [6], msg: 'Password must have at least 6 characters' },
        },
      },
      role: {
        type: DataTypes.ENUM('Pharmacy', 'Patient', 'Doctor'), 
        defaultValue: 'Patient',
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
        
    },
    Gender:{
      type:DataTypes.STRING,
      allowNull:true,

    },
    Weight:{
      type:DataTypes.STRING,
      allowNull:true,
    
    },
    Height:{
      type:DataTypes.STRING,
      allowNull:true,
    
    },
    },
    {
      timestamps: true,
      hooks: {
        beforeCreate: async (user) => {
          if (user.password) {
            user.password = await bcrypt.hash(user.password, 10);
          }
        },
      },
    });
    User.prototype.comparePassword = async function (enteredPassword) {
      return await bcrypt.compare(enteredPassword, this.password);
    };
  
    User.prototype.getJwtToken = function () {
      return jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
        expiresIn: 3600,
      });
    };
   
    return User;
};
