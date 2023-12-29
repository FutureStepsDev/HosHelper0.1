require("dotenv").config()
module.exports ={
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: process.env.DB_KEY, 
    DATABASE: 'hoshelper0.1',
    DIALECT: 'mysql',
    pool: {
        min: 0,
        max: 5,
        acquire: 30000,
        idle: 10000
    }
}
