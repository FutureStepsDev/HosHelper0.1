module.exports ={
    HOST: 'localhost',
    USER: 'root',
    PASSWORD:'root', 
    DATABASE: 'HOSHELPER0.1',
    DIALECT: 'mysql',
    pool: {
        min: 0,
        max: 5,
        acquire: 30000,
        idle: 10000
    }
}