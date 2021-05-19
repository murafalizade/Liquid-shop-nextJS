const sql = require('../database/db.config.js')
module.exports.getAll = (req,res) =>{
    sql.query('SELECT * FROM user_detail',(err,result,field)=>{
        if(err)
            throw err;
        else{
            console.log(result)
            res.send(result)
        }
    })
}

module.exports.getOne = (req, res) => {
    sql.query(`SELECT * FROM user_detail WHERE id=${req.params.id} `, (err, result, field) => {
        if (err)
            throw err;
        else {
            console.log(result)
            res.send(result)
        }
    })
}

module.exports.putOne = (req,res)=>{
    sql.query(`UPDATE user_detail SET Ready=TRUE WHERE id = ${req.params.id}`, (err, result, field) => {
        if (err)
            throw err;
        else {
            console.log('succcessfull')
            res.send({msg:'successfull'})
        }
    })
}