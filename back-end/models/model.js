const dbConfig = require('../dbconfig/db-config.js');
const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize(dbConfig.DATABASE, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
    pool: {
        min: dbConfig.pool.min,
        max: dbConfig.pool.max,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Errr'+ err)
})
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.models = {};
db.models.users = require('./User-Model.js')(sequelize, Sequelize.DataTypes);


db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})
module.exports = db;





