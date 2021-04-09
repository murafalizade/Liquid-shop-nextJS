const express = require('express')
const app = express()
const products = require('./data')
const bodyParser = require('body-parser')
const mailRouter = require('./mailRouter')

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})
app.use(bodyParser.json())


app.get('/',(req,res)=>{
    res.status(200).send(products)
})

app.get('/:id',(req,res)=>{
    const id = req.params.id;
    const selectProduct = products.filter((product)=> {return product.id === id});
    res.status(200).send(selectProduct)
})

app.use('/userDetail', mailRouter);

app.listen(3001,()=>{
    console.log(`Sever was working in http://localhost:3001`)
})