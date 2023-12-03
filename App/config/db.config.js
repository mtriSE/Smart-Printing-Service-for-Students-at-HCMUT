module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "12345678",
    DB: "printing",
    dialect: "mysql",
    // pool: {
    //     max: 5,             
    //     min: 0,
    //     acquire: 30000,
    //     idle: 10000
    // }
}


// Password này là password Trị dùng trên máy mình để kết nối mysql

// max: maximum number of connection in pool
// min: minimum number of connection in pool
// idle: maximum time, in milliseconds, that a connection can be idle before being released
// acquire: maximum time, in milliseconds, that pool will try to get connection before throwing error