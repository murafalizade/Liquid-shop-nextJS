const mysql = require('mysql')
const con = mysql.createConnection({
    host:process.env.HOST,
    user:'user',
    password:process.env.PASSWORD_DATABASE,
    database: process.env.DATABASE
})

module.exports = con
