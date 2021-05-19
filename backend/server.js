const express = require('express')
const app = express()
const products = require('./utils/data')
const bodyParser = require('body-parser')
const mailRouter = require('./router/mailRouter')
const cors = require('cors')
const db  = require('./database/db.config')
const adminRouter = require('./router/adminRouter')
const dotenv = require("dotenv");

dotenv.config();

app.use(cors())
app.use(bodyParser.json())

db.connect((err) => {
    if (err)
        throw err;
    console.log("succesfull connection");
    var sql ="CREATE TABLE IF NOT EXISTS user_detail (Fname VARCHAR(250),Sname VARCHAR(250),  Email VARCHAR(250),Phone VARCHAR(250),  City VARCHAR(250), Address VARCHAR(250), ProductID VARCHAR(250) ,Count INT,CreatingDate DATETIME, Ready BOOLEAN );";
    db.query(sql, (err) => {
        if (err) {
            throw err;
        }
        console.log("table is created");
    })
})


app.use('/api/userDetail', mailRouter);
app.use('/api/dashboard', adminRouter);

app.get('/api',(req,res)=>{
    res.status(200).send(products)
})

app.get('/api/:id',(req,res)=>{
    const id = req.params.id;
    const selectProduct = products.filter((product)=> {return product.id === id});
    res.status(200).send(selectProduct)
})


app.listen(3001,()=>{
    console.log(`Sever was working in http://localhost:3001`)
})