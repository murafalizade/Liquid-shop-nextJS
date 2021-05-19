const nodemailer = require('nodemailer')
const db = require('../database/db.config')
const shortid = require('shortid')
module.exports =   (req, res) => {
        const user = req.body
        const userDetail = `name is ${user.fname},surname is ${user.sname} city is ${user.city},product id is ${user.product_id} product cout is ${user.count} number is ${user.number} and address is ${user.address}`
            
        db.query(`INSERT INTO user_detail VALUES("${user.fname}","${shortid.generate()}","${user.sname}","${user.email}","${user.number}","${user.city}","${user.address}","${user.product_id}","${user.count}",NOW(),FALSE);`,(err,result,feild)=>{
            if(err)
                throw err;
            else{
                console.log('succesfull for posting')
            }
        })


        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
            },
            tls: {
                rejectUnauthorized: false
            },
        });

        var message = {
            from: process.env.EMAIL,
            to: process.env.ADMIN_EMAIL,
            subject: 'User Detail',
            text: userDetail
        };

        transporter.sendMail(message, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            res.end()
        });
    }