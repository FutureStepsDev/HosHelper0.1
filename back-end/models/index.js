// models/index.js
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Import the hospital data seeding script
const hospitalData = require('../Data/HospitalDatas');

// Sync models with the database
sequelize.sync({ force: false})
  .then(() => {
    // Insert seed data into the Hospital model
    return db.Hospital.bulkInsertData(hospitalData);
  })
  .then(() => {
    console.log('Database seeded successfully.');
  })
  .catch((error) => {
    console.error('Error seeding database:', error);
  });
  
// Keep the Sequelize connection open - don't close it here
// db.sequelize.close();

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
  